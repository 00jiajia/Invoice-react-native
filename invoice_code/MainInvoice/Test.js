import React, { Component } from 'react';
//import { View, Text, Alert} from "react-native";
import { Modal, Text, TouchableHighlight, View ,Button} from 'react-native';
//import { Button } from 'antd-mobile';
//import { NavBar, Icon,Drawer,List,Flex, Modal, WingBlank, WhiteSpace, Toast ,Button} from 'antd-mobile';

export default class Test extends Component {
    constructor(props) {
        super(props);

        // const { navigator } = this.props;
        // if (navigator) {
        //     Alert.alert("right");
        // } else {
        //     Alert.alert("bb");
        // }
        this.state={
            open: true,
            modalVisible: false
        }
    }

    onOpenChange(){
        this.setState({ open: !this.state.open });
    }
    // onOpenChange= (...args) => {
    //     console.log(args);
    //     this.setState({ open: !this.state.open });
    //   }
      
    _onClick() {
        this.setState({modalVisible:true});
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }


    render() {
        // const sidebar = (<List>
        //     {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i, index) => {
        //       if (index === 0) {
        //         return (<List.Item key={index}
        //           thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
        //           multipleLine
        //         >Category</List.Item>);
        //       }
        //       return (<List.Item key={index}
        //         thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
        //       >Category{index}</List.Item>);
        //     })}
        //   </List>);
        //   const prompt = Modal.prompt;
        return (
            this.state.modalVisible==true?
            <View>
                <Text>Hello</Text>
            </View>:

            // <View>
            //     {/* <NavBar
            //         mode="light"
            //         icon={<Icon type="left" />}
            //         onLeftClick={this._onClick}
            //         rightContent={[
            //             <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            //             <Icon key="1" type="ellipsis" />,
            //         ]}
            //     >NavBar</NavBar> */}
            //         {/* <NavBar icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>Basic</NavBar> */}
            //         <Button
            //             title="Basic"
            //             onPress={this.onOpenChange.bind(this)}
            //         />
            //         <Drawer
            //             className="my-drawer"
            //             style={{ minHeight: 800 }}
            //             enableDragHandle
            //             contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
            //             sidebar={sidebar}
            //             open={this.state.open}
            //             onOpenChange={this.onOpenChange.bind(this)}
            //         >
                       
            //      </Drawer>
               
            // </View>

            <View>
               
                {/* <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Button onClick={() => prompt(
                        'Login',
                        'Please input login information',
                        (login, password) => console.log(`login: ${login}, password: ${password}`),
                        'login-password',
                        null,
                        ['Please input name', 'Please input password'],
                    )}
                    >login-password</Button>

                    <WhiteSpace size="lg" />
                </WingBlank> */}
                <Button
                    title='on'
                    onPress={this._onClick.bind(this)}
                />
            </View>
        );
    }
}