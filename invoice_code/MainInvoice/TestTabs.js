import React, { Component } from 'react';

import { Modal, Text, TouchableHighlight, View, Button,DrawerLayoutAndroid } from 'react-native';

import { Tabs, WhiteSpace, Badge, Flex } from 'antd-mobile';

export default class TestTabs extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const tabs = [
            { title: <Badge text={'3'}>First Tab</Badge> },
            { title: <Badge text={'今日(20)'}>Second Tab</Badge> },
            { title: <Badge dot>Third Tab</Badge> },
        ];
    //     return (
    //         <View>
    //             <Text>heelo</Text>
    //             <Tabs tabs={tabs}
    //                 initialPage={1}
    //                 onChange={(tab, index) => { console.log('onChange', index, tab); }}
    //                 onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
    //             >
    //             {/* <Flex>
    //                 <Flex.Item>
    //                 <View>第一个tab</View>
    //                 </Flex.Item>
    //                 <Flex.Item>
    //                 <View>第二个tab</View>
    //                 </Flex.Item>
    //                 <Flex.Item>
    //                 <View>第三个tab</View>
    //                 </Flex.Item>
    //             </Flex> */}
    //                 {/* <View>第一个tab</View>
    //                 <View>第二个tab</View>
    //                 <View>第三个tab</View> */}
    //                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
    //                     Content of first tab
    //   </div>
    //                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
    //                     Content of second tab
    //   </div>
    //                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
    //                     Content of third tab
    //   </div>
    //             </Tabs>
    //             <WhiteSpace />
    //         </View>
    //     );

    var navigationView = (  
        <View style={{flex: 1, backgroundColor:'blue'}}>  
          <Text style={{margin:10,color:'#fff',fontSize: 15, textAlign: 'center'}}>我是导航功能栏标题</Text>  
          <Text styleTextstyle={{marginTop: 10,marginLeft:20,color:'#fff',fontSize: 15, textAlign:'left'}}>1.功能1</Text>  
          <Text styleTextstyle={{marginTop: 10,marginLeft:20,color:'#fff',fontSize: 15, textAlign:'left'}}>2.功能2</Text>  
        </View>  
      );  
      return (  
        <DrawerLayoutAndroid  
          drawerWidth={150}  
          drawerPosition={DrawerLayoutAndroid.positions.left}  
          renderNavigationView={() =>navigationView}>  
          <View style={{flex: 1, alignItems:'center'}}>  
            <Text styleTextstyle={{margin: 10, fontSize: 15, textAlign: 'right'}}>我是主布局内容</Text>  
          </View>  
        </DrawerLayoutAndroid>  
       );   
    }
}