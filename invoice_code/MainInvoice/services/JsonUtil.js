'use strict';
import React,{Component} from 'react';


class JsonUtil extends Component{
    static strToJson(data){
        return JSON.parse(data);
    }

    static jsonToStr(data){
        return JSON.stringify(data);
    }
    static mapToJson(map){
        return JSON.stringify(JsonUtil.strMapToObj(map));
    }
    static jsonToMap(jsonStr){
        return JsonUtil.objToStrMap(JSON.parse(jsonStr));
    }

    static strMapToObj(strMap){
        let obj=Object.create(null);
        for(let[k,v] of strMap){
            obj[k]=v;
        }
        return obj;
    }

    static objToStrMap(obj){
        let strMap=new Map();
        for(let k of Object.keys(obj)){
            strMap.set(k,obj[k]);
        }
        return strMap;
    }
}

export default JsonUtil;