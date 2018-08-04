import React, { Component } from 'react';
import { Grid } from 'antd-mobile';
import { View,Button,Alert,Image } from 'react-native';

const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
}));

const data1 = Array.from(new Array(9)).map(() => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
}));
export default class TestGrid extends Component {
    constructor(props) {
        super(props);
    }

    _onPress(){
        Alert.alert("h");

    }

    
    render() {
        return (
            <View>
                {/* <Grid data={data} activeStyle={false} /> */}
                <Grid data={data1}
                    columnNum={4}
                    renderItem={dataItem => (
                        <Button
                        onPress={this._onPress.bind(this)}
                        title="a"
                    />
                        
                    )}
                />
            </View>
        );
    }
}