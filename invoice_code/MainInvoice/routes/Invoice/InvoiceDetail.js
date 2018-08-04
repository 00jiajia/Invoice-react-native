import React,{Component} from 'react';
import{View,Text,Button,Alert} from 'react-native';


export default class InvoiceDetail extends Component{
    constructor(props){
        super(props);
    }

    _onPress(){
        Alert.alert("生成pdf");
    }
    render(){
        return(
            <View>
                <Text>1.里面有个webView，将画好的发票的html展示出来</Text>
                <Button
                    title='生成pdf'
                    onPress={this._onPress.bind(this)}
                />
            </View>
        );
    }
}