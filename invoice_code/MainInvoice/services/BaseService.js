import React,{Component} from 'react';
import {Config} from './Config';
import NetUtil from './NetUtil';
import {Alert} from 'react-native';
const{Login} = Config;

class BaseService extends Component{
    constructor(props){
        super(props)
    }
    
    static async queryLoginAccount(strJson){
        let tt=await NetUtil.postJsonWithoutCallback(Login,strJson);
       return tt;
    }
    static queryForTest(strJson,callback){
        return NetUtil.postJson(Login,strJson,callback);
    }
}

export default BaseService;