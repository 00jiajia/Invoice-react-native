import React,{Component} from 'react';

import{View,Text,Alert} from 'react-native';
import TitleBar from '../MainFrame/TitleBar';

export default class InvoiceForCancellation extends Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <View>
                <TitleBar navigator={this.props.navigator} text="缴销"/>
            </View>
        );
    }
}