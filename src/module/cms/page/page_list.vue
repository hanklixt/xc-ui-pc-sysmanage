<template>
    <div>
      <el-form :model="params">
      <el-select v-model="params.siteId" placeholder="请选择站点">
      <el-option
      v-for="item in siteList"
      :key="item.siteId"
      :label="item.siteName"
      :value="item.siteId">
      </el-option>
      </el-select>
      页面别名：<el-input v-model="params.pageAliase" style="width: 100px"></el-input>
      <el-button type="primary" v-on:click="query" size="small">查询</el-button>
        <router-link :to="{path:'/cms/page/add',query:{
        page:this.params.page,
        siteId:this.params.siteId
        }}">
          <el-button type="primary"  size="small">新增页面</el-button>
        </router-link>
      </el-form>
      <el-table
        :data="list"
        border
        style="width: 100%">
         <el-table-column type="index" width="60"></el-table-column>
          <el-table-column prop="pageName" label="页面名称" width="120"></el-table-column>
          <el-table-column prop="pageAliase" label="别名" width="120"></el-table-column>
          <el-table-column prop="pageType" label="页面类型" width="100"></el-table-column>
          <el-table-column prop="pageWebPath" label="访问路径" width="200"></el-table-column>
          <el-table-column prop="pagePhysicalPath" label="物理路径" width="100"></el-table-column>
        <el-table-column prop="dataUrl" label="dataUrl" width="200"></el-table-column>
          <el-table-column prop="pageCreateTime" label="创建时间" width="180" ></el-table-column>
          <el-table-column prop="pageCreateTime" label="操作" width="80" >

            <template slot-scope="page">
              <el-button size="small" type="text"
              @click="edit(page.row.pageId)">编辑
              </el-button>

              <el-button size="small" type="text"
                         @click="del(page.row.pageId)">删除
              </el-button>
              <el-button size="small" type="text"
                         @click="preview(page.row.pageId)">页面预览
              </el-button>
              <el-button size="small" type="text"
                         @click="post(page.row.pageId)">发布页面
              </el-button>
            </template>
          </el-table-column>

      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total='total'
        :page-size='params.pageSize'
        :current-page='params.pageNo'
        @current-change="changePage"
        style="float: right">
      </el-pagination>
    </div>
</template>

<script>
   import * as cmsApi from "../api/cms"

    export default {
        data() {
            return {
                list: [],
                total:0,
                params:{
                    pageSize:10,
                    pageNo:1,
                    siteId:'',
                    pageAliase:''
                },
                siteList: [],
            }

        },
        methods:{
            query:function () {
                // alert("hello");
                cmsApi.page_list(this.params.pageNo,this.params.pageSize,this.params).then(res=>{
                    console.log(res);
                    this.total = res.queryResult.total;
                    this.list = res.queryResult.list;
                });
            },
            changePage:function (page) {
                this.params.pageNo=page;
                this.query();
            },
            edit:function (pageId) {
                this.$router.push({
                    path:'/cms/page/edit/'+pageId,
                    query:{
                        page:this.params.page,
                        siteId:this.params.siteId
                    }
                });
            },
            del:function (pageId) {
                cmsApi.page_delete(pageId).then(res => {
                    if (res.success) {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        //查询页面
                        this.query()
                    } else {
                        this.$message({
                            type: 'error',
                            message: '删除失败!'
                        });
                    }
                })
            },
            preview:function (pageId) {
                window.open("http://www.xuecheng.com/cms/preview/"+pageId);
            },
            post:function (pageId) {
             cmsApi.page_post(pageId).then(res=>{
                 if (res.submenus){
                     this.$message({
                         type :'success',
                         message: '发布成功!'
                     });
                 }else {
                     this.$message({
                         type :'success',
                         message: res.message
                     });
                 }
             })
            }
        },
        created(){
          this.params.page=Number.parseInt(this.$route.query.page||1), this.params.siteId=this.$route.query.siteId
        },
        mounted() {
             //默认查询页面
            this.query()
            this.siteList = [
                {
                    siteId:'5a751fab6abb5044e0d19ea1',
                    siteName:'门户主站'
                },
                {
                    siteId:'102',
                    siteName:'测试站'
                }
            ]
        }


    }
</script>

<style scoped>

</style>
