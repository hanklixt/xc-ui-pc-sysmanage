import http from './../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.xcApiUrlPre;


//定义方法，查询页面
export const page_list=(page,size,params)=>{
  return   http.requestQuickGet("http://localhost:31001/cmsPage/list/"+page+"/"+size);
}




