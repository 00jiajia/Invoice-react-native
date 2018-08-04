import React,{Component} from 'react';
import{View,Text} from 'react-native';
import App from '../../App';


export default class InvoiceForSearch extends App{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <View>
                <Text>开票查询</Text>
            </View>
        );
    }
}