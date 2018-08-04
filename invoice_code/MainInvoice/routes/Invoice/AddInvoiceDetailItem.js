import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Flex, Button } from 'antd-mobile';
import TitleBar from '../MainFrame/TitleBar';


export default class AddInvoiceDetailItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            HPMC: '',//货品名称
            DJ: '',//单价
            JLDW: '',//计量单位
            SL: 0,//数量
        }
    }
    _onSave() {

    }
    _onCancle() {

    }
    render() {
        return (
            <View>
                 <TitleBar navigator={this.props.navigator}/>
                <Flex>
                    <Flex.Item>
                        <Text>项目名称</Text>
                    </Flex.Item>
                    <Flex.Item>
                        <TextInput
                            style={{ height: 40, }}
                            onChangeText={(HPMC) => this.setState({ HPMC })}
                            value={this.state.HPMC}
                        />
                    </Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item>
                        <Text>计量单位</Text>
                    </Flex.Item>
                    <Flex.Item>
                        <TextInput
                            style={{ height: 40, }}
                            onChangeText={(JLDW) => this.setState({ JLDW })}
                            value={this.state.JLDW}
                        />
                    </Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item>
                        <Text>数量</Text>
                    </Flex.Item>
                    <Flex.Item>
                        <TextInput
                            style={{ height: 40, }}
                            onChangeText={(SL) => this.setState({ SL })}
                            value={`${this.state.SL}`}
                            keyboardType='numeric'
                        />
                    </Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item>
                        <Text>单价</Text>
                    </Flex.Item>
                    <Flex.Item>
                        <TextInput
                            style={{ height: 40, }}
                            onChangeText={(DJ) => this.setState({ DJ })}
                            value={this.state.DJ}
                        />
                    </Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item>
                        <Button onClick={this._onSave.bind(this)}>保存</Button>
                    </Flex.Item>
                    <Flex.Item>
                        <Button onClick={this._onCancle.bind(this)}>取消</Button>
                    </Flex.Item>
                </Flex>
                
            </View>
        );
    }
}