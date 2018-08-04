import React, { Component } from 'react';
import { View, Text, TextInput,Button } from 'react-native';
import { Flex } from 'antd-mobile';
import TitleBar from '../MainFrame/TitleBar';

export default class AddInvoiceBookUnlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FPHS: '',
            FPDM: '',
            FPHZ: '',
            LGSJ: '',
            FS: 0,
        }
    }
    _onPressUnlock(){
        //把数据提交上去



        const { navigator } = this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    _onPressCancle(){
        const { navigator } = this.props;
        if (navigator) {
            navigator.pop();
        }
    }
    render() {
        return (
            <View>
                 <TitleBar navigator={this.props.navigator} />
                <Text>发票簿解锁</Text>
                <Text>输入完整一本(卷)发票的开始号码和截止号码</Text>
                <Flex>
                    <Flex.Item>
                        <Flex>
                            <Flex.Item>
                                <Text>发票代码</Text>
                            </Flex.Item>
                            <Flex.Item>
                                <TextInput
                                    style={{ height: 40 }}
                                    onChangeText={(FPDM) => this.state({ FPDM })}
                                    value={this.state.FPDM}
                                />
                            </Flex.Item>
                        </Flex>
                    </Flex.Item>
                    <Flex.Item>
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
                                    style={{ height: 40 }}
                                    onChangeText={(FPHS) => this.state({ FPHS })}
                                    value={this.state.FPHS}
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
                                    style={{ height: 40 }}
                                    onChangeText={(FPHZ) => this.state({ FPHZ })}
                                    value={this.state.FPHZ}
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
                                    style={{ height: 40 }}
                                    onChangeText={(FPHZ) => this.state({ FPHZ })}
                                    value={this.state.FPHZ}
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
                                    style={{ height: 40 }}
                                    onChangeText={(FPHZ) => this.state({ FPHZ })}
                                    value={this.state.FPHZ}
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
                                    style={{ height: 40 }}
                                    onChangeText={(FPHZ) => this.state({ FPHZ })}
                                    value={this.state.FPHZ}
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
                                    style={{ height: 40 }}
                                    onChangeText={(FPHZ) => this.state({ FPHZ })}
                                    value={this.state.FPHZ}
                                    editable={false}
                                />
                            </Flex.Item>
                        </Flex>
                    </Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item>
                        <Button
                            title='解锁'
                            onPress={this._onPressUnlock.bind(this)}
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