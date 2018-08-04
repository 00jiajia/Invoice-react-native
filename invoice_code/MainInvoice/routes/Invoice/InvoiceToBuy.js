import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet,Alert } from 'react-native';
import {
    Flex,
    WhiteSpace,
    Toast,
    Button,
    Modal,
    WingBlank
} from 'antd-mobile';
import AddNewInvoice from './AddNewInvoice';
import TitleBar from '../MainFrame/TitleBar';
import FpbService from '../../services/FpbService';


Date.prototype.pattern = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份         
        "d+": this.getDate(), //日         
        "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时         
        "H+": this.getHours(), //小时         
        "m+": this.getMinutes(), //分         
        "s+": this.getSeconds(), //秒         
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度         
        "S": this.getMilliseconds() //毫秒         
    };
    var week = {
        "0": "/u65e5",
        "1": "/u4e00",
        "2": "/u4e8c",
        "3": "/u4e09",
        "4": "/u56db",
        "5": "/u4e94",
        "6": "/u516d"
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[this.getDay() + ""]);
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}


export default class InvoiceToBuy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data_list: [],
            modalVisible: false,
        }

        FpbService.queryFpbLg(this._getListData.bind(this));
    }

    _getListData(datas) {
        if (datas) {
            this.setState({ data_list: datas });
        }

    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }


    _onAdd() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name: 'AddNewInvoice',
                component: AddNewInvoice,
                params: {
                    ttt: '张三'
                }
            });
        }

    }

    _onModify() {
        //后续看到再处理
        console.log("你确定要修改吗");
    
    }

    _renderSectionHeader() {
        return (
            <Flex style={styles.head}>
                <Flex.Item>
                    <Text>购票日期</Text>
                    <Text>发票代码</Text>
                </Flex.Item>
                <Flex.Item>
                    <Text>开始票号</Text>
                    <Text>截止号码</Text>
                </Flex.Item>
                <Flex.Item>
                    <Text>份数</Text>
                    <Text>状态</Text>
                </Flex.Item>
                <Flex.Item>
                </Flex.Item>
            </Flex>
        );

    }

    _renderItem(item) {
        var status = "";
        if (item.item.YWBZ == 1) status = "正常";
        else status = "作废";
        return (
            <Flex>
                <Flex.Item>
                    <Text>{new Date(item.item.LGSJ.time).pattern("yyyy-MM-dd")}</Text>
                    <Text>{item.item.FPDM}</Text>
                </Flex.Item>
                <Flex.Item>
                    <Text>{item.item.FPHS}</Text>
                    <Text>{item.item.FPHZ}</Text>
                </Flex.Item>
                <Flex.Item>
                    <Text>{item.item.FS}</Text>
                    <Text>{status}</Text>
                </Flex.Item>
                <Flex.Item>
                    <TouchableOpacity onPress={this._onModify.bind(this)}>
                        <Image
                            source={require('../../assets/modify.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </Flex.Item>
            </Flex>
        );
    }

    _separatorCom() {
        return (
            <View style={{ height: 4, width: 500, backgroundColor: 'orange' }}></View>
        )
    }

    render() {
        return (
            <View>
                <TitleBar navigator={this.props.navigator} text="购票记录" />
                <TouchableOpacity onPress={this._onAdd.bind(this)}>
                    <View>
                        <Text>增加购票记录</Text>
                    </View>
                </TouchableOpacity>
                < WhiteSpace size="lg" />

                {/* <SectionList
                    renderSectionHeader={this._renderSectionHeader}
                    renderItem={this._renderItem}
                    sections={this.state.data_list}
                    ItemSeparatorComponent={this._separatorCom}
                /> */}
                <FlatList
                    data={this.state.data_list}
                    renderItem={this._renderItem.bind(this)}
                    ListHeaderComponent={this._renderSectionHeader}
                    ItemSeparatorComponent={this._separatorCom}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    icon: {
        width: 15,
        height: 15
    },
    head: {
        backgroundColor: 'orange',
    },
});