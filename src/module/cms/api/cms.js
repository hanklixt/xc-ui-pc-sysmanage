import http from './../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.xcApiUrlPre;
let xcApiUrl = sysConfig.xcApiUrl;


//定义方法，查询页面
export const page_list=(page,size,params)=>{
  let stringify = querystring.stringify(params);
  return   http.requestQuickGet(apiUrl+"/cms/list/"+page+"/"+size+"?"+stringify);
}
//新增
export const page_add=(params=>{
  let stringify = querystring.stringify(params);
  return http.requestPost(apiUrl+"/cms/add",params)
})
//查询
export const  page_get=(id=>{
   return http.requestQuickGet(apiUrl+"/cms/get/"+id);
})
//
export  const  page_edit=((id,params)=>{
  return http.requestPut(apiUrl+"/cms/edit/"+id,params);
})
export const  page_delete=(id=>{
  return http.requestDelete(apiUrl+"/cms/del/"+id);
})
export const page_post=(id=>{
  return http.requestPost(apiUrl+"/cms/post/"+id)
})




