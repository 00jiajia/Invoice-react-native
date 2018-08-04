import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Platform,
    Text
} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import ImageResizer from 'react-native-image-resizer'
import RNFS from 'react-native-fs'
//import PhotoUpload from'react-native-photo-uploaded';

export default class TestPhoto extends Component {
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
        buttonDisabled: false,
        imgsrc:''
    }

    options = {
        title: this.props.pickerTitle || '请选择图片',
        storageOptions: {
            skipBackup: true,
            path: 'images'
        }
    }

    uploadImage(url, params) {
        return new Promise(function (resolve, reject) {
            let formData = new FormData();
            for (var key in params) {
                formData.append(key, params[key]);
            }
            let file = { uri: params.path, type: 'application/octet-stream', name: params.name };
            formData.append("file", file);
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'multipart/form-data;charset=utf-8',
                    "x-access-token": token,
                },
                body: formData,
            }).then((response) =>{
                console.log("service:------>",response);
                response.json()
            } )
                .then((responseData) => {
                    console.log('uploadImage---->', responseData);
                    resolve(responseData);
                })
                .catch((err) => {
                    console.log('err', err);
                    reject(err);
                });
        });
    }
    openImagePicker = () => {
        this.setState({ buttonDisabled: true })
        if (this.props.onStart) this.props.onStart()

        // get image from image picker
        ImagePicker.showImagePicker(this.options, async response => {
            this.setState({ buttonDisabled: false })
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

            // convert image back to base64 string
            const photoData = await RNFS.readFile(filePath, 'base64')
            let source = { uri: resizedImageUri.uri }
            // console.info("............");
            // console.info(photoData);
            this.setState({
                avatarSource: source
            })

            // handle photo in props functions as data string
            if (this.props.onPhotoSelect) this.props.onPhotoSelect(photoData)


            let tempUrl = "http://192.168.1.215:8080/file/postPhoto";
            // const dataa=new FormData();
            // dataa.append('photo',{
            //     uri:filePath,
            //     type:response.type,
            //     name:response.fileName
            // });
            // dataa.append('file',response.data);
            // fetch(tempUrl,{
            //     method:'PUT',
            //     body:dataa
            // }).then(res=>{
            //     console.log('return from service:');
            //     console.log(res);
            // }).catch(error => console.error('Error:', error))

            let formData = new FormData();
            // for (var key in params) {
            //     formData.append(key, params[key]);
            // }

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
                console.log("service:===============>",response);
                return response.text();
            } )
                .then((responseData) => {
                    console.log('uploadImage===============>', responseData);
                    this.setState(imgsrc,responseData);
                    return responseData;
                   // resolve(responseData);
                })
                .catch((err) => {
                    console.log('err', err);
                    //reject(err);
                });






           
            //this.uploadImage(tempUrl, parama);

        })
    }

    renderChildren = props => {
        return React.Children.map(props.children, child => {
            if (child.type === Image && this.state.avatarSource) {
                return React.cloneElement(child, {
                    source: this.state.avatarSource
                })
            } else return child
        })
    }

    componentDidUpdate() {
        if (this.props.onAfterRender) this.props.onAfterRender(this.state)
    }

    render() {
        return (
            <View style={[styles.container, this.props.containerStyle]}>
                <TouchableOpacity
                    onPress={this.openImagePicker.bind(this)}
                    disabled={this.state.buttonDisabled}
                >
                    <Text>hello</Text>
                    {this.renderChildren(this.props)}
                </TouchableOpacity>
                {/* <Image source={require(this.state.imgsrc)}/> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})