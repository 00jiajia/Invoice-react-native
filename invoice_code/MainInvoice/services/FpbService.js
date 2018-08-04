import React,{Component}from 'react';
import {Config} from './Config';
import NetUtil from './NetUtil';
import {Alert} from 'react-native';

const{saveFpbLg,queryFpbLgs} = Config;
class FpbService extends Component{
    constructor(props){
        super(props);
    }

    static async addFpbLg(strJson){
      return await NetUtil.postJsonWithoutCallback(saveFpbLg,strJson);
    }

    static async queryFpbLg(callback){
        await NetUtil.get(queryFpbLgs,callback);
    }

}

export default FpbService;