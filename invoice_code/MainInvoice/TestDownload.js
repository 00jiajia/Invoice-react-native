import React,{Component} from 'react';
import{View,Button,Alert} from 'react-native';
import RNFS from 'react-native-fs';

const downloadDest = `${RNFS.DocumentDirectoryPath}/${((Math.random() * 1000) | 0)}.xls`;
//const downloadDest=`${RNFS.DocumentDirectoryPath}/20180515.xls`;
        // http://wvoice.spriteapp.cn/voice/2015/0902/55e6fc6e4f7b9.mp3
const formUrl = 'http://192.168.1.215:8080/file/fileExport';

export default class TestDownload extends Component{
    constructor(props){
        super(props);
    }

    downloadFile(){
        const options={
            fromUrl: formUrl,
            toFile: downloadDest,
            background: true,
            begin: (res) => {
                console.log('begin', res);
                console.log('contentLength:', res.contentLength / 4096 / 4096, 'M');
            },
            progress: (res) => {
                console.log("progress-->",res);
                let pro = res.bytesWritten / res.contentLength;
                this.setState({
                    progressNum: pro,
                });
            }
        };
        try {
            const ret = RNFS.downloadFile(options);
            ret.promise.then(res => {
                console.log('success', res);

                console.log('file://' + downloadDest);
                //return RNFS.readFile(downloadDest,'utf-8');
            }).catch(err => {
                console.log('err', err);
            });
        }
        catch (e) {
            console.log(error);
        }
    }

    render(){
        return(
            <View>
                <Button 
                    onPress={this.downloadFile.bind(this)}
                    title="下载"
                />
            </View>
        );
    }
}