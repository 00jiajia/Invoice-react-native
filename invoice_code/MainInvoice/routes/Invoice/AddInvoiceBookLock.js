import React, { Component } from 'react';
import { View, Text, Button,TextInput } from 'react-native';
import { Flex } from 'antd-mobile';
import TitleBar from '../MainFrame/TitleBar';

export default class AddInvoiceBookLock extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:''
        }
    }

    _onPressLock() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.pop();//表示回退
        }
    }
    _onPressCancle() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.pop();//表示回退
        }
    }
    render() {
        return (
            <View>
                <TitleBar navigator={this.props.navigator} />
                <Text>发票簿加锁</Text>
                <Text>只有验证通过的发票才能使用</Text>
                <Flex>
                    <Flex.Item>
                        <Flex>
                            <Flex.Item>
                                <Text>发票代码</Text>
                            </Flex.Item>
                            <Flex.Item>
                                <TextInput
                                     style={{height:40,}}
                                     onChangeText={(username)=>this.setState({username})}
                                     value={this.state.username}
                                />
                            </Flex.Item>
                        </Flex>
                    </Flex.Item>
                    <Flex.Item>
                        <Flex>
                            <Flex.Item>
                            </Flex.Item>
                            <Flex.Item></Flex.Item>
                        </Flex>
                    </Flex.Item>
                </Flex>

                <Flex>
                    <Flex.Item>
                        <Flex>
                            <Flex.Item>
                                <Text>开始号码</Text>
                            </Flex.Item>
                            <Flex.Item>
                                <TextInput
                                    style={{height:40,}}
                                    onChangeText={(username)=>this.setState({username})}
                                    value={this.state.username}
                                />
                            </Flex.Item>
                        </Flex>
                    </Flex.Item>
                    <Flex.Item>
                        <Flex>
                            <Flex.Item>
                                <Text>截止号码</Text>
                            </Flex.Item>
                            <Flex.Item>
                            <TextInput
                                    style={{height:40,}}
                                    onChangeText={(username)=>this.setState({username})}
                                    value={this.state.username}
                                />
                            </Flex.Item>
                        </Flex>
                    </Flex.Item>
                </Flex>

                <Flex>
                    <Flex.Item>
                        <Flex>
                            <Flex.Item>
                                <Text>份数</Text>
                            </Flex.Item>
                            <Flex.Item>
                            <TextInput
                                    style={{height:40,}}
                                    onChangeText={(username)=>this.setState({username})}
                                    value={this.state.username}
                                    editable={false}
                                />
                            </Flex.Item>
                        </Flex>
                    </Flex.Item>
                    <Flex.Item>
                        <Flex>
                            <Flex.Item>
                                <Text>结存份数</Text>
                            </Flex.Item>
                            <Flex.Item>
                            <TextInput
                                    style={{height:40,}}
                                    onChangeText={(username)=>this.setState({username})}
                                    value={this.state.username}
                                    editable={false}
                                />
                            </Flex.Item>
                        </Flex>
                    </Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item>
                        <Flex>
                            <Flex.Item>
                                <Text>开票机</Text>
                            </Flex.Item>
                            <Flex.Item>
                            <TextInput
                                    style={{height:40,}}
                                    onChangeText={(username)=>this.setState({username})}
                                    value={this.state.username}
                                    editable={false}
                                />
                            </Flex.Item>
                        </Flex>
                    </Flex.Item>
                    <Flex.Item>
                        <Flex>
                            <Flex.Item>
                                <Text>已用份数</Text>
                            </Flex.Item>
                            <Flex.Item>
                            <TextInput
                                    style={{height:40,}}
                                    onChangeText={(username)=>this.setState({username})}
                                    value={this.state.username}
                                    editable={false}
                                />
                            </Flex.Item>
                        </Flex>
                    </Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item>
                        <Button
                            title='加锁'
                            onPress={this._onPressLock.bind(this)}
                        />
                    </Flex.Item>
                    <Flex.Item>
                        <Button
                            title='取消'
                            onPress={this._onPressCancle.bind(this)}
                        />
                    </Flex.Item>
                </Flex>

            </View>
        );
    }
}