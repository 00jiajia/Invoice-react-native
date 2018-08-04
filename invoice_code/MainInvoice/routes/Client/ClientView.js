import React, { Component } from 'react';
import { View, Button, Text, Alert,NativeModules } from 'react-native';
import { WhiteSpace } from 'antd-mobile';
import TitleBar from '../MainFrame/TitleBar';

export default class ClientView extends Component {
    constructor(props) {
        super(props);
    }

    _onPress() {
        // NativeModules.FileUploadIntentModule.callNativeBySend((result) => {
        // console.log(msg);
        // });
        NativeModules.FileUploadIntentModule.callNativeBySend();
    };
    _outPut(){
        NativeModules.FileUploadIntentModule.downloadFile("test");
    }
    render() {
        return (
            <View>
                <TitleBar navigator={this.props.navigator} text="客户列表" />
                <WhiteSpace />
                <WhiteSpace />
                <Button
                    title='导入客户excel'
                    onPress={this._onPress.bind(this)}
                />
                <WhiteSpace />
                <WhiteSpace />
                <Button
                    title='导出客户excel'
                    onPress={this._outPut.bind(this)}
                />
    
            </View>
        );
    }
}