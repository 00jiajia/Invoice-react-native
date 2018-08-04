import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, DatePickerAndroid } from 'react-native';
import { Flex, WingBlank } from 'antd-mobile';
import DatePicker from 'react-native-datepicker';

import FpbService from '../../services/FpbService';
import TitleBar from '../MainFrame/TitleBar';


// import JsonUtil from '../../services/JsonUtil';
// import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

export default class AddNewInvoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FPDM: '',//发票代码
            FPHS: '',//发票号始
            FPHZ: '',//发票号止
            LGSJ: new Date(),//领购时间
            FS: 0,//份数
        }
        //console.log("prameters:", this.props.ttt);
    }
    async _onSure() {
        if(this.state.FPHS.length<7){
            Alert.alert("发票号始");
            return false;
        }
        if(this.state.FPDM.length!=12){
            Alert.alert("发票代码的位数不正确");
        }

        let obj = {
            FPHS: this.state.FPHS,
            FPDM: this.state.FPDM,
            FPHZ: this.state.FPHZ,
            LGSJ: this.state.LGSJ,
            FS: this.state.FS,
        };
        let result = await FpbService.addFpbLg(JSON.stringify(obj));

        //console.log("newinvoice--->", result);
        if (result) {
            Alert.alert("添加成功");
            const { navigator } = this.props;
            if (navigator) {
                navigator.pop();
            }
        } else {
            Alert.alert("添加失败，请联系管理员");
        }
    }
    _onCancle() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.pop();//表示回退
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TitleBar navigator={this.props.navigator} text="增加购票记录"/>
                <WingBlank>
                    <Flex>
                        <Flex.Item>
                            <Text>发票代码</Text>
                        </Flex.Item>
                        <Flex.Item>
                            <TextInput
                                style={{ height: 40, }}
                                onChangeText={(FPDM) => this.setState({ FPDM })}
                                value={this.state.FPDM}
                            />

                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item>
                            <Text>开票号码</Text>
                        </Flex.Item>
                        <Flex.Item>
                            <TextInput
                                style={{ height: 40, }}
                                onChangeText={(FPHS) => this.setState({ FPHS })}
                                value={this.state.FPHS}
                            />
                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item>
                            <Text>截止票号</Text>
                        </Flex.Item>
                        <Flex.Item>
                            <TextInput
                                style={{ height: 40, }}
                                onChangeText={(FPHZ) => this.setState({ FPHZ })}
                                value={this.state.FPHZ}
                            />

                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item>
                            <Text>份数</Text>

                        </Flex.Item>
                        <Flex.Item>
                            <TextInput
                                style={{ height: 40, }}
                                onChangeText={(FS) => this.setState({ FS })}
                                value={`${this.state.FS}`}
                                keyboardType='numeric'
                            />
                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item>
                            <Text>购票日期</Text>
                        </Flex.Item>
                        <Flex.Item>
                            <Flex>
                                <Flex.Item>
                                    <TextInput
                                        style={{ height: 40, }}
                                        value={`${this.state.LGSJ}`}
                                        editable={false}
                                    />
                                </Flex.Item>
                                <Flex.Item>
                                    <DatePicker
                                        style={{ width: 100 }}
                                        date={this.state.LGSJ}
                                        mode="date"
                                        androidMode='calendar'
                                        placeholder="select date"
                                        format="YYYY-MM-DD"
                                        minDate="2016-05-01"
                                        maxDate="2020-06-01"
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        hideText="true"
                                        customStyles={{
                                            dateIcon: {
                                                position: 'absolute',
                                                left: 0,
                                                top: 4,
                                                marginLeft: 0
                                            },
                                            dateInput: {
                                                marginLeft: 36
                                            }
                                        }}
                                        onDateChange={(date) => { this.setState({ LGSJ: date }) }}
                                    />
                                </Flex.Item>
                            </Flex>
                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item>

                            <Button
                                title='确定'
                                onPress={this._onSure.bind(this)}
                                style={{ width: 10 }}
                            />

                        </Flex.Item>
                        <WingBlank></WingBlank>
                        <Flex.Item>

                            <Button
                                title="取消"
                                onPress={this._onCancle.bind(this)}
                                style={{ width: 30 }}
                            />

                        </Flex.Item>
                    </Flex>
                </WingBlank>
            </View >
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

    welcome: {
        //fontSize: 20,
        textAlign: 'center',
        margin: 5,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});