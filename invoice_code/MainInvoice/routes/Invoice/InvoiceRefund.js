import React,{Component} from 'react';

import{View,Text} from 'react-native';

import TitleBar from '../MainFrame/TitleBar';

export default class InvoiceRefund extends Component{
    render(){
        return(
            <View>
                <TitleBar navigator={this.props.navigator} text="退票" />
            </View>
        );
    }
}