import React, { Component } from 'react';

import { View, Text, Alert, Button } from 'react-native';

import { Flex, Modal, WingBlank, WhiteSpace, Toast } from 'antd-mobile';

import AddNewInvoiceBook from './AddNewInvoiceBook';
import TitleBar from '../MainFrame/TitleBar';
import AddInvoiceBookLock from './AddInvoiceBookLock';
import AddInvoiceBookUnlock from './AddInvoiceBookUnlock';

export default class InvoiceStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'main'
        }
    }
    _onAddInvoiceBook() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name: 'AddInvoiceBookLock',
                component: AddInvoiceBookLock
            });
        }
    }
    _onDeblocking() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name: 'AddInvoiceBookUnlock',
                component: AddInvoiceBookUnlock
            });
        }
    }
    _onToStart() {
        const prompt = Modal.prompt;
        prompt(
            '输入开始票号',
            '请装好发票,输入第一张发票的代码和号码',
            (FPDM, FPHS) => {
                console.log(`login: ${FPDM}, password: ${FPHS}`)
            },
            'login-password',
            null,
            ['发票代码', '开始号码'],
        );
    }
    _onToBlockUp() {
        const prompt = Modal.prompt;
        prompt(
            '停用发票簿',
            '停用',
            (FPDM, FPHS) => {
                console.log('这个地方dialog需要更改,要更换这个输入结构');
                console.log(`login: ${FPDM}, password: ${FPHS}`)
            },
            'login-password',
            null,
            ['发票代码', '第一张发票号码'],
        );
    }
    render() {
        const prompt = Modal.prompt;
        return (
            <View>
                <TitleBar navigator={this.props.navigator} />
                <Text>发票库存</Text>
                    <Flex>
                        <Flex.Item>
                            <Button
                                title='发票簿加锁'
                                onPress={this._onAddInvoiceBook.bind(this)}
                            />
                        </Flex.Item>
                        {/* <WingBlank></WingBlank> */}
                        <Flex.Item>
                            <Button
                                title='发票簿解锁'
                                onPress={this._onDeblocking.bind(this)}
                            />
                        </Flex.Item>
                        {/* <WingBlank></WingBlank> */}
                        <Flex.Item>
                            <Button
                                title='启用'
                                onPress={this._onToStart.bind(this)}
                            />
                        </Flex.Item>
                        {/* <WingBlank></WingBlank> */}
                        <Flex.Item>
                            <Button
                                title='停用'
                                onPress={this._onToBlockUp.bind(this)}
                            />
                        </Flex.Item>
                    </Flex>
            </View>
        );
    }
}