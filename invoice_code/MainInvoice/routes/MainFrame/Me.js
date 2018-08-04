import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator,
    Image,
    StyleSheet,
    TouchableOpacity,
    Button,
    Alert,
    Platform
} from 'react-native';


import { Flex, WhiteSpace, WingBlank, Steps,ActionSheet } from 'antd-mobile';
import PhotoUpload from 'react-native-photo-upload';

import StatisticsForDay from '../Invoice/StatisticsForDay';
import StatisticsForThisMonth from '../Invoice/StatisticsForThisMonth';
import StatisticsForLastMonth  from '../Invoice/StatisticsForLastMonth';
import StatisticsForThreeMonth from '../Invoice/StatisticsForThreeMonth';

import ImagePicker from 'react-native-image-picker'
import ImageResizer from 'react-native-image-resizer'
import RNFS from 'react-native-fs'
import PropTypes from 'prop-types'


let wrapProps;
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
if (isIPhone) {
    wrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}

export default class Me extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        containerStyle: PropTypes.object,
        photoPickerTitle: PropTypes.string,
        height: PropTypes.number,
        width: PropTypes.number,
        format: PropTypes.string,
        quality: PropTypes.number,
        onPhotoSelect: PropTypes.func, // returns the base64 string of uploaded photo
        onError: PropTypes.func, // if any error occur with response
        onTapCustomButton: PropTypes.func, // on tap custom button
        onStart: PropTypes.func, // when user starts (useful for loading, etc)
        onCancel: PropTypes.func, // when user cancel
        onResponse: PropTypes.func, // on response exists!
        onRender: PropTypes.func, // after render
        onResizedImageUri: PropTypes.func, // when image resized is ready
    }

    state = {
        height: this.props.height || 300,
        width: this.props.width || 300,
        format: this.props.format || 'JPEG',
        quality: this.props.quality || 80,
        //buttonDisabled: false,
        imgsrc: 'http://192.168.1.215:8080/img/administrator.png'
    }

    options = {
        title: this.props.pickerTitle || '请选择图片',
        storageOptions: {
            skipBackup: true,
            path: 'images'
        }
    }

    openImagePicker = () => {
        //this.setState({ buttonDisabled: true })
        if (this.props.onStart) this.props.onStart()

        // get image from image picker
        ImagePicker.showImagePicker(this.options, async response => {
            //this.setState({ buttonDisabled: false })
            let rotation = 0
            const { originalRotation } = response

            if (this.props.onResponse) this.props.onResponse(response)

            if (response.didCancel) {
                console.log('User cancelled image picker')
                if (this.props.onCancel) this.props.onCancel('User cancelled image picker')
                return
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error)
                if (this.props.onError) this.props.onError(response.error)
                return
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton)
                if (this.props.onTapCustomButton) this.props.onTapCustomButton(response.customButton)
                return
            }

            let { height, width, quality, format } = this.state

            //Determining rotation param
            if (originalRotation === 90) {
                rotation = 90
            } else if (originalRotation === 180) {
                //For a few images rotation is 180. 
                rotation = -180
            } else if (originalRotation === 270) {
                //When taking images with the front camera (selfie), the rotation is 270.
                rotation = -90
            }
            // resize image
            const resizedImageUri = await ImageResizer.createResizedImage(
                `data:image/jpeg;base64,${response.data}`,
                height,
                width,
                format,
                quality,
                rotation
            )

            if (this.props.onResizedImageUri) this.props.onResizedImageUri(resizedImageUri)

            const filePath = Platform.OS === 'android' && resizedImageUri.uri.replace
                ? resizedImageUri.uri.replace('file:/data', '/data')
                : resizedImageUri.uri

            const photoData = await RNFS.readFile(filePath, 'base64')
            let source = { uri: resizedImageUri.uri }

            this.setState({
                avatarSource: source
            })

            // handle photo in props functions as data string
            if (this.props.onPhotoSelect) this.props.onPhotoSelect(photoData)


            let tempUrl = "http://192.168.1.215:8080/file/postPhoto";
      
            let formData = new FormData();
            
            const parama = {
                path: filePath,
                name: response.fileName,
                data:response.data,
                type:response.type
            }
            let file = { uri: filePath, type: 'application/octet-stream', name: response.fileName };
            formData.append("file", file);
            fetch(tempUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'multipart/form-data;charset=utf-8',
                    "x-access-token": '',
                },
                body: formData,
            }).then((response) =>{
                //this.setState({ : response })
                //console.log("service:===============>",response);
                return response.text();
            } )
                .then((responseData) => {
                    console.log('uploadImage===============>', responseData);
                    console.log('imgsrc===============>',this.state.imgsrc);
                    this.setState({imgsrc:responseData});
                    //return responseData;
                   // resolve(responseData);
                })
                .catch((err) => {
                    console.log('err', err);
                });
        })
    }
    _onImagePress() {
        //Alert.alert("modify image");
        const BUTTONS = ['更换头像', '删除头像'];
        ActionSheet.showActionSheetWithOptions({
            options: BUTTONS,
            cancelButtonIndex: BUTTONS.length - 1,
            destructiveButtonIndex: BUTTONS.length - 4,
            // title: 'title',
            message: '操作',
            maskClosable: true,
            'data-seed': 'logId',
            wrapProps,
        },
            (buttonIndex) => {
                if(buttonIndex==0){
                    this.setState({ clicked: BUTTONS[buttonIndex] });
                    this.openImagePicker();
                }               
            });

    };
    _onButtonPress(title) {

        const { navigator } = this.props;
        // if(navigator){
        //     navigator.push({
        //         name:'StatisticsForDay',
        //         component:StatisticsForDay
        //     });
        // }
        switch (title) {
            case "当日":
                if (navigator) {
                    navigator.push({
                        name: 'StatisticsForDay',
                        component: StatisticsForDay
                    });
                }
                break;
            case "当月":
                if (navigator) {
                    navigator.push({
                        name: 'StatisticsForThisMonth',
                        component: StatisticsForThisMonth
                    });
                }
                break;
            case "上月":
                if (navigator) {
                    navigator.push({
                        name: 'StatisticsForLastMonth',
                        component: StatisticsForLastMonth
                    });
                }
                break;
            case "三个月内":
                if (navigator) {
                    navigator.push({
                        name: 'StatisticsForThreeMonth',
                        component: StatisticsForThreeMonth
                    });
                }
                break;
        }
    };

    render() {
        const Step = Steps.Step;
        const steps = [{
            title: '',
            description: '发票购票录入',
        }, {
            title: '',
            description: '发票购票录入',
        }, {
            title: '',
            description: '发票购票录入',
        }].map((s, i) => <Step key={i} title={s.title} description={s.description} />);

        let isDefaultImg=this.state.imgsrc;
        
        var icon ="";
        console.log("imgage********",isDefaultImg);

        return (
            <View style={styles.container1}>
                <WhiteSpace size="lg" />
                <Flex>
                    <Flex.Item>
                        <TouchableOpacity onPress={this._onImagePress.bind(this)}>
                        {/* {
                            isDefaultImg.indexOf("assets")>0?
                            <Image
                            source={require('./img/check.png')}
                            style={styles.icon}
                            />:
                            
                        } */}

                        <Image
                            source={{uri:this.state.imgsrc}}
                            style={styles.icon}
                            />
                       
                        </TouchableOpacity>
                    </Flex.Item>
                    <Flex.Item>
                        <Text>Administrator</Text>
                        <Text>password</Text>
                        <Text>code</Text>
                    </Flex.Item>
                </Flex>
                <WhiteSpace size="lg" />

                <Flex>
                    <Flex.Item>
                        <Text>当前月度：</Text>
                    </Flex.Item>
                </Flex>
                <WhiteSpace size="lg" />

                <Flex>
                    <Flex.Item>
                        <Button
                            onPress={this._onButtonPress.bind(this,"当日")}
                            title="当日"
                        />
                    </Flex.Item>
                    <WingBlank size="sm" />
                    <Flex.Item>
                        <Button
                            onPress={this._onButtonPress.bind(this,"当月")}
                            title="当月"
                        />
                    </Flex.Item>
                    <WingBlank size="sm" />
                    <Flex.Item>
                        <Button
                            onPress={this._onButtonPress.bind(this,"上月")}
                            title="上月"
                        />
                    </Flex.Item>
                    <WingBlank size="sm" />
                    <Flex.Item>
                        <Button
                            onPress={this._onButtonPress.bind(this,"三个月内")}
                            title="三个月内"
                        />
                    </Flex.Item>
                </Flex>
                <WhiteSpace size="lg" />

                <Flex>
                    <WingBlank mode={20} style={styles.stepsExample}>
                        <Text>开票向导：</Text>
                        <WhiteSpace />
                        <Steps current={0} direction="horizontal" size="small" style={styles.stepCss} >{steps}</Steps>
                    </WingBlank>
                </Flex>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#fff',
    },
    icon: {
        width: 100,
        height: 100
    },
    stepsExample: {
        width: 335,
        height: 150,
        backgroundColor: '#d9dff1',
        borderRadius: 0.5,
    },
    subtitle: {
        color: '#888',
        fontSize: 14,
        paddingTop: 30,
        paddingLeft: 18,
        paddingBottom: 0,
        paddingRight: 18,

    },

})
