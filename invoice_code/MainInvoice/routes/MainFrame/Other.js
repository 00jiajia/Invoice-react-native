import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { WingBlank, WhiteSpace, Grid, Flex } from 'antd-mobile';
import AddInvoiceDetail from '../Invoice/AddInvoiceDetail';
import ClientView from '../Client/ClientView';

const titleList = [
    { location: require('../../assets/box1.png'), text: '开票' },
    { location: require('../../assets/box2.png'), text: '发票作废' },
    { location: require('../../assets/box3.png'), text: '开退票' },
    { location: require('../../assets/box4.png'), text: '打印表格' },
    { location: require('../../assets/box5.png'), text: '输出表格' },
    { location: require('../../assets/box6.png'), text: '收发记录' },
    { location: require('../../assets/box7.png'), text: '货品项目' },
    { location: require('../../assets/box5.png'), text: '客户' },
    { location: require('../../assets/box3.png'), text: '开票管理' },
    { location: require('../../assets/box1.png'), text: '发票管理' },
    { location: require('../../assets/box2.png'), text: '数据收发' },
    { location: require('../../assets/box4.png'), text: '设置' },

];

export default class Other extends Component {
    constructor(props) {
        super(props);
    }
    _onOutPutTicket() {

        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name: 'AddInvoiceDetail',
                component: AddInvoiceDetail
            });
        }
    }
    _onGridPress(title) {
        const{navigator}=this.props;
        switch(title){
            case "开票":
            navigator.push({
                name: 'AddInvoiceDetail',
                component: AddInvoiceDetail
            });
            break;
            case "发票作废":
            navigator.push({
                name: 'AddInvoiceDetail',
                component: AddInvoiceDetail
            });
            break;
            case "开退票":
            navigator.push({
                name: 'AddInvoiceDetail',
                component: AddInvoiceDetail
            });
            break;
            case "打印表格":
            navigator.push({
                name: 'AddInvoiceDetail',
                component: AddInvoiceDetail
            });
            break;
            case "输出表格":
            navigator.push({
                name: 'AddInvoiceDetail',
                component: AddInvoiceDetail
            });
            break;
            case "收发记录":
            navigator.push({
                name: 'AddInvoiceDetail',
                component: AddInvoiceDetail
            });
            break;
            case "货品项目":
            navigator.push({
                name: 'AddInvoiceDetail',
                component: AddInvoiceDetail
            });
            break;
            case "客户":
            navigator.push({
                name: 'ClientView',
                component: ClientView
            });
            break;
            case "开票管理":
            navigator.push({
                name: 'AddInvoiceDetail',
                component: AddInvoiceDetail
            });
            break;
            case "发票管理":
            navigator.push({
                name: 'AddInvoiceDetail',
                component: AddInvoiceDetail
            });
            break;
            case "数据收发":
            navigator.push({
                name: 'AddInvoiceDetail',
                component: AddInvoiceDetail
            });
            break;
            case "设置":
            navigator.push({
                name: 'AddInvoiceDetail',
                component: AddInvoiceDetail
            });
            break;
        }
        
    }
    render() {
        return (
            <View>
                <Grid data={titleList}
                    columnNum={4}
                    renderItem={dataItem => (
                        <Flex>
                            <Flex.Item>
                                <TouchableOpacity onPress={this._onGridPress.bind(this, dataItem.text)}>
                                    <WingBlank>
                                        <Image 
                                            source={dataItem.location}
                                            style={styles.icon}
                                        />
                                    </WingBlank>
                                    <WingBlank size="lg">
                                    <Text>{dataItem.text}</Text>
                                    </WingBlank>
                                </TouchableOpacity>
                            </Flex.Item>
                        </Flex>
                    )}
                />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    icon: {
        width: 60,
        height: 60
    },

})