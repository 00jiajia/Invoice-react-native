import React, { Component } from 'react';
import { View, Text, Alert, Button } from 'react-native';
import { SegmentedControl, WingBlank, Flex,WhiteSpace } from 'antd-mobile';


export default class Search extends Component {
  constructor(props) {
    super(props);
  }
  _onChange = (e) => {
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
  }
  _onValueChange(value) {
    console.log(value);
  }
  _onSearch() {

  }
  render() {
    return (
      <View>
        <Flex>
          <Flex.Item>
            <Text>发票查询</Text>
          </Flex.Item>
          <Flex.Item>
          </Flex.Item>
          <Flex.Item>
            <Button
              title='查询'
              onPress={this._onSearch.bind(this)}
            />
          </Flex.Item>
        </Flex>
        <WhiteSpace size="lg" />
        <SegmentedControl values={['当日开票', '本月开票', '上月开票', '三个月内开票']}
          onChange={this._onChange}
          onValueChange={this._onValueChange}
        />
      </View>
    );
  }
}