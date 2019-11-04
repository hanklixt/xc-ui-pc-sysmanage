import http from './../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.xcApiUrlPre;
let xcApiUrl = sysConfig.xcApiUrl;


//定义方法，查询页面
export const page_list=(page,size,params)=>{
  return   http.requestQuickGet(apiUrl+"/cms/list/"+page+"/"+size);
}




