import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Alert, TouchableOpacity, FlatList, SectionList } from 'react-native';

import App from '../../App';
import { Flex, WhiteSpace, WingBlank } from 'antd-mobile';
import InvoiceToBuy from '../Invoice/InvoiceToBuy';
import InvoiceStore from '../Invoice/InvoiceStore';

import InvoiceRefund from '../Invoice/InvoiceRefund';
import InvoiceInvalid from '../Invoice/InvoiceInvalid';

import InvoiceMislaid from '../Invoice/InvoiceMislaid';
import InvoiceForCancellation from '../Invoice/InvoiceForCancellation';

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

export default class Record extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data_list: [],
        }
        FpbService.queryFpbLg(this._getListData.bind(this));
    }

    _getListData(datas) {
        if (datas) {
            this.setState({ data_list: datas });
        }
    }
    _onImagePress(msg) {
        const { navigator } = this.props;
        switch (msg) {
            case "img_buy_invoice":
                if (navigator) {
                    navigator.push({
                        name: 'InvoiceToBuy',
                        component: InvoiceToBuy
                    });
                }
                break;
            case "img_store_invoice":
                if (navigator) {
                    navigator.push({
                        name: 'InvoiceStore',
                        component: InvoiceStore
                    });
                }
                break;
            case "img_refund_invoice":
                if (navigator) {
                    navigator.push({
                        name: 'InvoiceRefund',
                        component: InvoiceRefund
                    });
                }
                break;
            case "img_invalid_invoice":
                if (navigator) {
                    navigator.push({
                        name: 'InvoiceInvalid',
                        component: InvoiceInvalid
                    });
                }
                break;
            case "img_mislaid_invoice":
                if (navigator) {
                    navigator.push({
                        name: 'InvoiceMislaid',
                        component: InvoiceMislaid
                    });
                }
                break;
            case "img_handle_invoice":
                if (navigator) {
                    navigator.push({
                        name: 'InvoiceForCancellation',
                        component: InvoiceForCancellation
                    });
                }
                break;
        }

    }

    _header = () => {
        return (
            <Flex style={styles.head}>
                <Flex.Item >
                    <Text style={styles.font}>购票日期</Text>
                    <Text style={styles.font}>状态</Text>
                </Flex.Item>
                <Flex.Item>
                    <Text style={styles.font}>发票代码</Text>
                    <Text style={styles.font}>份数</Text>
                </Flex.Item>
                <Flex.Item>
                    <Text style={styles.font}>开始号码</Text>
                    <Text style={styles.font}>截止号码</Text>
                </Flex.Item>
            </Flex>
        );
    }
    _separator = () => {
        return <View style={{height:2,backgroundColor:'#0F4545'}}/>;
    }
    _renderItem = (item) => {
        var status = "";
        if (item.item.YWBZ == 1) status = "正常";
        else status = "作废";
        return (
            <Flex>
                <WhiteSpace size="lg" />
                <Flex.Item>
                    <Text>{new Date(item.item.LGSJ.time).pattern("yyyy-MM-dd")}</Text>
                    <Text>{status}</Text>
                </Flex.Item>
                <Flex.Item>
                    <Text>{item.item.FPDM}</Text>
                    <Text>{item.item.FS}</Text>
                </Flex.Item>
                <Flex.Item>
                    <Text>{item.item.FPHS}</Text>
                    <Text>{item.item.FPHZ}</Text>
                </Flex.Item>
                <WhiteSpace />
            </Flex>
        )
    }
    render() {
        return (
            <View>
                <Flex>
                    <Flex.Item>
                        <TouchableOpacity onPress={this._onImagePress.bind(this, "img_buy_invoice")}>
                            <Image
                                source={require('../../assets/buy1.png')}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </Flex.Item>
                    <Flex.Item>
                        <TouchableOpacity onPress={this._onImagePress.bind(this, "img_store_invoice")}>
                            <Image
                                source={require('../../assets/store.png')}
                                style={styles.icon}
                            />
                        </TouchableOpacity >
                    </Flex.Item>
                    <Flex.Item>
                        <TouchableOpacity onPress={this._onImagePress.bind(this, "img_refund_invoice")}>
                            <Image
                                source={require('../../assets/refund.png')}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </Flex.Item>
                </Flex>

                <Flex>
                    <Flex.Item>
                        <TouchableOpacity onPress={this._onImagePress.bind(this, "img_invalid_invoice")}>
                            <Image
                                source={require('../../assets/invalid.png')}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </Flex.Item>
                    <Flex.Item>
                        <TouchableOpacity onPress={this._onImagePress.bind(this, "img_mislaid_invoice")}>
                            <Image
                                source={require('../../assets/missing.png')}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </Flex.Item>
                    <Flex.Item>
                        <TouchableOpacity onPress={this._onImagePress.bind(this, "img_handle_invoice")}>
                            <Image
                                source={require('../../assets/handle.png')}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </Flex.Item>
                </Flex>
                <WingBlank>
                    <FlatList
                        data={this.state.data_list}
                        renderItem={this._renderItem}
                        ListHeaderComponent={this._header}
                        ItemSeparatorComponent={this._separator}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </WingBlank>
            </View>
        );

    };

}

const styles = StyleSheet.create({
    icon: {
        width: 100,
        height: 100
    },
    head: {
        backgroundColor: '#0F4545',
    },
    font: {
        color: 'yellow'
    }
})
