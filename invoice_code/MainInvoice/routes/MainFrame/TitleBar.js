'use strict';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Flex } from 'antd-mobile';

export default class TitleBar extends Component {
    constructor(props) {
        super(props);

    }
    _onPress() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.pop();
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textview}>
                    <Flex>
                        <Flex.Item>
                            <TouchableOpacity onPress={this._onPress.bind(this)}>
                                <Image source={require("../../assets/arrows.png")} />
                            </TouchableOpacity>
                        </Flex.Item>
                        <Flex.Item>
                            <Text style={styles.textstyle}>{this.props.text || "返回"}</Text>
                        </Flex.Item>
                        <Flex.Item>   
                        </Flex.Item>
                    </Flex>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 45,
        alignSelf: 'stretch',
        backgroundColor: '#4a9df8',
    },
    textview: {
        flex: 1,
        alignSelf: 'center',
    },
    textstyle: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
});