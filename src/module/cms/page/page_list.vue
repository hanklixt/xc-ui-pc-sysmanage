<template>
    <div>
      <el-button type="primary" size="small" v-on:click="query">查询</el-button>
      <el-table
        :data="list"
        border
        style="width: 100%">
         <el-table-column type="index" width="60"></el-table-column>
          <el-table-column prop="pageName" label="页面名称" width="120"></el-table-column>
          <el-table-column prop="pageAliase" label="别名" width="120"></el-table-column>
          <el-table-column prop="pageType" label="页面类型" width="150"></el-table-column>
          <el-table-column prop="pageWebPath" label="访问路径" width="250"></el-table-column>
          <el-table-column prop="pagePhysicalPath" label="物理路径" width="250"></el-table-column>
          <el-table-column prop="pageCreateTime" label="创建时间" width="180" ></el-table-column>
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
                    pageNo:1
                }
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
            }
        },
        mounted() {
             //默认查询页面
            this.query()
        }


    }
</script>

<style scoped>

</style>
