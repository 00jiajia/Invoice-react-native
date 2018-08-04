import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ActionSheet, WingBlank, WhiteSpace, Button, Toast } from 'antd-mobile';

let wrapProps;
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
if (isIPhone) {
    wrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}
export default class TestActionSheet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: 'none',
            clicked1: 'none',
            clicked2: 'none',
        }
    }


    showActionSheet = () => {
        const BUTTONS = ['全部', '正常票', '废票', '退票'];
        ActionSheet.showActionSheetWithOptions({
            options: BUTTONS,
            cancelButtonIndex: BUTTONS.length - 1,
            destructiveButtonIndex: BUTTONS.length - 2,
            // title: 'title',
            message: 'I am description, description, description',
            maskClosable: true,
            'data-seed': 'logId',
            wrapProps,
        },
            (buttonIndex) => {
                console.log("heee:   "+buttonIndex+"   ");
                this.setState({ clicked: BUTTONS[buttonIndex] });
            });
    }


    render() {

        return (
            <View>
                <Text>hello </Text>
                <Button onClick={this.showActionSheet}>showActionSheet</Button>
            </View>
        );
    }
}