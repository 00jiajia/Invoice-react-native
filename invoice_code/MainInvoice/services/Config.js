import React,{Component} from 'react';

 const BaseUrl='http://192.168.1.215:8080';

export const Config={   
    queryFpbLgs:`${BaseUrl}/api/queryFpbLgs`,
    queryFpbTz:`${BaseUrl}/api/queryFpbTz`,
    saveFpbLg:`${BaseUrl}/api/addFpbLg`,
    Login:`${BaseUrl}/api/login`,
    queryKpzh:`${BaseUrl}/api/getZh`,
}