
import React,{Component} from 'react';

import {View,Text} from 'react-native';
import {ActionSheet, WingBlank, WhiteSpace, Button, Toast} from 'antd-mobile';
import TitleBar from '../MainFrame/TitleBar';


let wrapProps;
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
if (isIPhone) {
    wrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}
export default class StatisticsForDay extends Component{
    constructor(props){
        super(props);
    }
    showActionSheet = () => {
        const BUTTONS = ['全部', '正常票', '废票', '退票'];
        ActionSheet.showActionSheetWithOptions({
            options: BUTTONS,
            cancelButtonIndex: BUTTONS.length - 1,
            destructiveButtonIndex: BUTTONS.length - 4,
            // title: 'title',
            message: '请选择想要选择的类型',
            maskClosable: true,
            'data-seed': 'logId',
            wrapProps,
        },
            (buttonIndex) => {
                //这个地方需要来一个查询,然后将结果放置到下面的FatList
                console.log("heee:   "+buttonIndex+"   ");
                this.setState({ clicked: BUTTONS[buttonIndex] });
            });
    }

    render(){
        return(
            <View>
                 <TitleBar navigator={this.props.navigator} text="当日开票" />
                <Button onClick={this.showActionSheet}>操作</Button>
            </View>
        );
    };
}

