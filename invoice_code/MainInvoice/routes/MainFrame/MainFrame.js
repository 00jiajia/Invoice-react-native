import React, { Component } from 'react';

import { StyleSheet, Image, View, Dimensions,Navigator,Alert } from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Search from './Search';
import Other from './Other';
import Record from './Record';
import Me from './Me';
import DrawerBar from './DrawerBar';
export default class MainFrame extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            selectedTab: '我的'
        }
    }
    render() {
        return (
            <View style={styles.container} >
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '查询'}
                        title="查询"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../../assets/home1.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../../assets/home2.png")} />}
                        onPress={() => this.setState({ selectedTab: '查询' })}>
                        <Search  navigator={this.props.navigator}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '记录'}
                        title="记录"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../../assets/invoice1.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../../assets/invoice.png")} />}
                        onPress={() => this.setState({ selectedTab: '记录' })}>
                        <Record navigator={this.props.navigator}/>

                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '其他'}
                        title="其他"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../../assets/other2.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../../assets/other.png")} />}
                        onPress={() => this.setState({ selectedTab: '其他' })}>
                        <Other navigator={this.props.navigator} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '我的'}
                        title="我的"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../../assets/me.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../../assets/me1.png")} />}
                        onPress={() => this.setState({ selectedTab: '我的' })}>
                        {/* <Me navigator={this.props.navigator}/> */}
                        <DrawerBar navigator={this.props.navigator} />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    tabText: {
        color: '#000000',
        fontSize: 10
    },
    selectedTabText: {
        color: '#D81E06'
    },
    icon: {
        width: 20,
        height: 20
    }
})
