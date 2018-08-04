import React, { Component } from 'react';

import { Text, View, TextInput, Image, Button, StyleSheet, Alert, TouchableOpacity, AsyncStorage } from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';
import { Flex, WhiteSpace, Toast, WingBlank } from 'antd-mobile';

import Storage from 'react-native-storage';

import BaseService from '../../services/BaseService';
import MainFrame from '../MainFrame/MainFrame';


var storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true,
})



export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            navigator: this.props.navigator
        };


        storage.load({
            key: 'loginUserState',
            // autoSync: false,
            // syncInBackground: true,
            // syncParams: {
            //     extraFetchOptions: {
            //         // 各种参数
            //     },
            //     someFlag: true,
            // },
        }).then(ret => {
            console.log("ret--->",ret);
            this.setState({
                username: ret.username,
                password: ret.password
            });
           
            const { navigator } = this.props;
            if (navigator) {
                navigator.push({
                    name: 'MainFrame',
                    component: MainFrame
                });
            }
        })
        .catch(err => {
            console.warn(err.message);
            switch (err.name) {
                case 'NotFoundError':
                    break;
                case 'ExpiredError':
                    // TODO
                    break;
            }
        });
    }

    //  _initData(){
    //     let temp = this._init();
    //     console.log("temp--->",temp);
    //     if (temp != null) {
    //         const { navigator } = this.props;

    //         if (navigator) {
    //             navigator.push({
    //                 name: 'MainFrame',
    //                 component: MainFrame
    //             });
    //         }

    //     }
    // }

     _init() {
         console.log("init000");
         


    }

    async _onPressButton() {
        let username = this.state.username;
        let password = this.state.password;
        if (username.length < 1) {
            Alert.alert("请输入登录名");
            return;
        }
        if (password.length < 1) {
            Alert.alert("请输入密码");
            return;
        }
        let obj = {
            DLM: username,
            PASSWORD: password
        }

        let data = await BaseService.queryLoginAccount(JSON.stringify(obj));
        const { navigator } = this.props;
        if (data) {
            storage.save({
                key: 'loginUserState',
                data: {
                    username: username,
                    password: password
                },
                expires: null
            });

            if (navigator) {
                navigator.push({
                    name: 'MainFrame',
                    component: MainFrame,
                    params: {
                        LoginAccount: this.state.username,
                    }
                });
            }
        } else {
            Alert.alert("用户名或密码错误");
        }

    }

    render() {
        return (
            <View style={styles.container}>
                {/* <WingBlank> */}
                <Flex direction='row'>
                    <Flex.Item>
                        <Image
                            source={require('../../assets/ball.png')}
                        />
                    </Flex.Item>
                    <Flex.Item>
                        <Text>用户登录</Text>
                    </Flex.Item>
                </Flex>
                <WhiteSpace size="lg" />
                <Flex>
                    <Flex.Item>
                        <Text>登录名</Text>
                    </Flex.Item>
                    <Flex.Item>
                        <TextInput
                            style={{ height: 40, }}
                            onChangeText={(username) => this.setState({ username })}
                            value={this.state.username}
                            keyboardType='twitter'
                            autoCapitalize='none'
                        />
                    </Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item>
                        <Text>密 码</Text>
                    </Flex.Item>
                    <Flex.Item>
                        <TextInput
                            style={{ height: 40 }}
                            onChangeText={(password) => this.setState({ password })}
                            value={this.state.password}
                            secureTextEntry={true}
                            keyboardType='default'
                            returnKeyType='search'
                            autoCapitalize='none'
                        />
                    </Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item>
                        {/* <TouchableOpacity
                        activeOpacity={0.5}
                    > */}
                        <Button
                            color="#841584"
                            title="登录"
                            onPress={this._onPressButton.bind(this)}
                        />
                        {/* </TouchableOpacity> */}
                    </Flex.Item>
                </Flex>

            </View>
        );
    }
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
    //   subtitle:{
    //     color: '#888';
    //     font-size: '14px';
    //     //padding: 30px 0 18px 0;
    //   },
});