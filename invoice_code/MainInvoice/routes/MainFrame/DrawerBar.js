import React, { Component } from 'react';
import { View, Text, DrawerLayoutAndroid, TouchableOpacity, Image } from 'react-native';
import { Flex } from 'antd-mobile';
import Me from './Me';
import InvoiceStore from '../Invoice/InvoiceStore';
import StatisticsForDay from '../Invoice/StatisticsForDay';

export default class DrawerBar extends Component {
    constructor(props) {
        super(props);
    }

    _onPressGo(msg) {
        const { navigator } = this.props;
        switch (msg) {
            case "Me":
                if (navigator) {
                    navigator.push({
                        name: 'Me',
                        component: Me
                    });
                }
                break;
            case "StatisticsForDay":
            if (navigator) {
                navigator.push({
                    name: 'StatisticsForDay',
                    component: StatisticsForDay
                });
            }
            break;
        }


    }
    render() {
        var navigationView = (
            <View style={{ flex: 1, backgroundColor: '#EEF0F4' }}>
                <View>
                    <TouchableOpacity onPress={this._onPressGo.bind(this, "Me")}>
                        <Flex>
                            <Flex.Item>
                                <Image source={require("../../assets/matte.png")} />
                            </Flex.Item>
                            <Flex.Item>
                                <Text styleTextstyle={{ margin: 10, marginLeft: 20, color: '#fff', fontSize: 15, textAlign: 'center' }}>首页</Text>
                            </Flex.Item>
                        </Flex>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={this._onPressGo.bind(this, "StatisticsForDay")}>
                    <Flex>
                        <Flex.Item>
                        <Image source={require("../../assets/matte.png")} />
                        </Flex.Item>
                        <Flex.Item>
                        <Text styleTextstyle={{ marginTop: 10, marginLeft: 20, color: '#fff', fontSize: 15, textAlign: 'left' }}>当日开票</Text>
                        </Flex.Item>
                    </Flex>
                        
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={this._onPressGo.bind(this, "InvoiceStore")}>
                    <Flex>
                        <Flex.Item>
                        <Image source={require("../../assets/matte.png")} />
                        </Flex.Item>
                        <Flex.Item>
                        <Text styleTextstyle={{ marginTop: 10, marginLeft: 20, color: '#fff', fontSize: 15, textAlign: 'left' }}>本月开票</Text>
                        </Flex.Item>
                    </Flex>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={this._onPressGo.bind(this, "InvoiceStore")}>
                    <Flex>
                        <Flex.Item>
                        <Image source={require("../../assets/matte.png")} />
                        </Flex.Item>
                        <Flex.Item>
                        <Text styleTextstyle={{ marginTop: 10, marginLeft: 20, color: '#fff', fontSize: 15, textAlign: 'left' }}>上月开票</Text>
                        </Flex.Item>
                    </Flex>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={this._onPressGo.bind(this, "InvoiceStore")}>
                    <Flex>
                        <Flex.Item>
                        <Image source={require("../../assets/matte.png")} />
                        </Flex.Item>
                        <Flex.Item>
                        <Text styleTextstyle={{ marginTop: 10, marginLeft: 20, color: '#fff', fontSize: 15, textAlign: 'left' }}>三月内开票</Text>
                        </Flex.Item>
                    </Flex>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={this._onPressGo.bind(this, "InvoiceStore")}>
                    <Flex>
                        <Flex.Item>
                        <Image source={require("../../assets/matte.png")} />
                        </Flex.Item>
                        <Flex.Item>
                        <Text styleTextstyle={{ marginTop: 10, marginLeft: 20, color: '#fff', fontSize: 15, textAlign: 'left' }}>开票查询</Text>
                        </Flex.Item>
                    </Flex>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={this._onPressGo.bind(this, "InvoiceStore")}>
                    <Flex>
                        <Flex.Item>
                        <Image source={require("../../assets/matte.png")} />
                        </Flex.Item>
                        <Flex.Item>
                        <Text styleTextstyle={{ marginTop: 10, marginLeft: 20, color: '#fff', fontSize: 15, textAlign: 'left' }}>退票记录</Text>
                        </Flex.Item>
                    </Flex>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={this._onPressGo.bind(this, "InvoiceStore")}>
                    <Flex>
                        <Flex.Item>
                        <Image source={require("../../assets/matte.png")} />
                        </Flex.Item>
                        <Flex.Item>
                        <Text styleTextstyle={{ marginTop: 10, marginLeft: 20, color: '#fff', fontSize: 15, textAlign: 'left' }}>作废发票</Text>
                        </Flex.Item>
                    </Flex>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={this._onPressGo.bind(this, "InvoiceStore")}>
                    <Flex>
                        <Flex.Item>
                        <Image source={require("../../assets/matte.png")} />
                        </Flex.Item>
                        <Flex.Item>
                        <Text styleTextstyle={{ marginTop: 10, marginLeft: 20, color: '#fff', fontSize: 15, textAlign: 'left' }}>购票记录</Text>
                        </Flex.Item>
                    </Flex>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={this._onPressGo.bind(this, "InvoiceStore")}>
                    <Flex>
                        <Flex.Item>
                        <Image source={require("../../assets/matte.png")} />
                        </Flex.Item>
                        <Flex.Item>
                        <Text styleTextstyle={{ marginTop: 10, marginLeft: 20, color: '#fff', fontSize: 15, textAlign: 'left' }}>发票库存</Text>
                        </Flex.Item>
                    </Flex>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={this._onPressGo.bind(this, "InvoiceStore")}>
                    <Flex>
                        <Flex.Item>
                        <Image source={require("../../assets/matte.png")} />
                        </Flex.Item>
                        <Flex.Item>
                        <Text styleTextstyle={{ marginTop: 10, marginLeft: 20, color: '#fff', fontSize: 15, textAlign: 'left' }}>遗失发票</Text>
                        </Flex.Item>
                    </Flex>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={this._onPressGo.bind(this, "InvoiceStore")}>
                    <Flex>
                        <Flex.Item>
                        <Image source={require("../../assets/matte.png")} />
                        </Flex.Item>
                        <Flex.Item>
                        <Text styleTextstyle={{ marginTop: 10, marginLeft: 20, color: '#fff', fontSize: 15, textAlign: 'left' }}>缴销发票</Text>
                        </Flex.Item>
                    </Flex>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={this._onPressGo.bind(this, "InvoiceStore")}>
                    <Flex>
                        <Flex.Item>
                        <Image source={require("../../assets/matte.png")} />
                        </Flex.Item>
                        <Flex.Item>
                        <Text styleTextstyle={{ marginTop: 10, marginLeft: 20, color: '#fff', fontSize: 15, textAlign: 'left' }}>收发记录</Text>
                        </Flex.Item>
                    </Flex>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={this._onPressGo.bind(this, "InvoiceStore")}>
                    <Flex>
                        <Flex.Item>
                        <Image source={require("../../assets/matte.png")} />
                        </Flex.Item>
                        <Flex.Item>
                        <Text styleTextstyle={{ marginTop: 10, marginLeft: 20, color: '#fff', fontSize: 15, textAlign: 'left' }}>货品或项目</Text>
                        </Flex.Item>
                    </Flex>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={this._onPressGo.bind(this, "InvoiceStore")}>
                    <Flex>
                        <Flex.Item>
                        <Image source={require("../../assets/matte.png")} />
                        </Flex.Item>
                        <Flex.Item>
                        <Text styleTextstyle={{ marginTop: 10, marginLeft: 20, color: '#fff', fontSize: 15, textAlign: 'left' }}>客户</Text>
                        </Flex.Item>
                    </Flex>
                    </TouchableOpacity>
                </View>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={150}
                drawerPosition={DrawerLayoutAndroid.positions.left}
                renderNavigationView={() => navigationView}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Me navigator={this.props.navigator} />
                </View>
            </DrawerLayoutAndroid>
        );
    }
}