import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';
import { Flex, WhiteSpace,WingBlank } from 'antd-mobile';
import TitleBar from '../MainFrame/TitleBar';
import AddInvoiceDetailItem from './AddInvoiceDetailItem';
import PdfTest from '../MainFrame/PdfTest';

export default  class AddInvoiceDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    _onAddProjectDetail() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name: 'AddInvoiceDetailItem',
                component: AddInvoiceDetailItem
            });
        }
    }
    _onAddRemark() {

    }

    _onAdd() {

    }
    _onPrint(){
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name: 'PdfTest',
                component: PdfTest
            });
        }
    }
    render() {
        return (
            <View>
                <TitleBar navigator={this.props.navigator} text="录入发票信息" />
                <Flex>
                    <Flex.Item>
                        <Text>付款单位(个人)名称:</Text>
                    </Flex.Item>
                    <Flex.Item>
                        <TextInput
                            style={{ height: 40, }}
                            onChangeText={(username) => this.setState({ username })}
                            value={this.state.username}
                        />
                    </Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item>
                        <Text>纳税人识别码(证件号)</Text>
                    </Flex.Item>
                    <Flex.Item>
                        <TextInput
                            style={{ height: 40, }}
                            onChangeText={(username) => this.setState({ username })}
                            value={this.state.username}
                        />
                    </Flex.Item>
                </Flex>
                <Button
                    title='添加项目'
                    onPress={this._onAddProjectDetail.bind(this)}
                />

                {/* <FlatList
                    data={[{key:'a'},{key:'b'}]}
                    renderItem={({item})=><Text>{item.key}</Text>}
                /> */}
                <WhiteSpace />
                <Button
                    title="添加备注"
                    onPress={this._onAddRemark.bind(this)}
                />
                <WhiteSpace />
                <Flex>
                    <Flex.Item>
                    <Button
                        title="确认"
                        onPress={this._onAdd.bind(this)}
                    />
                    </Flex.Item>
                    <WingBlank/>
                    <Flex.Item>
                    <Button
                        title="取消"
                        onPress={this._onAdd.bind(this)}
                    />
                    </Flex.Item>
                </Flex>
                <WhiteSpace />
                <Button
                    title="打印"
                    onPress={this._onPrint.bind(this)}
                    />
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
});