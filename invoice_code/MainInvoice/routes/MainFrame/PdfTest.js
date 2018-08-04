import React, { Component } from 'react';
import { Button, View, Text, Alert, StyleSheet, WebView, Dimensions } from 'react-native';

import RNHTMLtoPDF from 'react-native-html-to-pdf';
import PDFView from 'react-native-pdf-view';

export default class PdfTest extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      html:''
    }

    this._onLoadFinish = this._onLoadFinish.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }

  async createPDF() {
    let options = {
      html: this.state.html,
      fileName: 'invoice',
      directory: 'docs',
    };

    let file = await RNHTMLtoPDF.convert(options);
    if(file.filePath.length>0)
    Alert.alert('生成成功~');
    //console.log(file.filePath);
  }

  async componentDidMount() {
    let options = {
      html: '<h1>Heading 1</h1><h2>Heading 2</h2><h3>Heading 3</h3>',
      fileName: 'testa',
      base64: true
    };
  }
  handleMessage(e) {
    //alert("aaaaa==>bbb");
    this.setState({ html: e.nativeEvent.data });
  }

  _onMessge(event){
    alert("a+b");
    const message=event.nativeEvent.data;
    alert(message.split(',')[0]);
    this.setState(html,message.split(',')[0]);
  }


  _onLoadFinish(){
    let a='dog'; b='tao';
    this.refs.webViewRef.postMessage([a,b]);
    //this.refs.webview.postMessage("a");
    //this.webView.postMessage('"Hello" 我是RN发送过来的数据');
  }

  render() {
    var {
      height: deviceHeight,
      width: deviceWidth
    } = Dimensions.get('window');
    return (
      <View style = {styles.container1}>
        <WebView
          // style={{ width: deviceWidth, height: deviceHeight }}
          ref="webViewRef"
          //ref={webview => this.webview = webview}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          scalesPageToFit={true}
          startInLoadingState={true}
          automaticallyAdjustContentInsets={true}
          source={{uri: 'http://192.168.1.215:8080/page/invoice' }}
          onLoad={this._onLoadFinish}        
          onMessage={this.handleMessage}
        />
        <Button
          title="生成pdf"
          onPress={this.createPDF.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
     flex: 1,
    // backgroundColor: '#fff',
    // paddingTop: 20
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
  webView: {
    backgroundColor: 'yellow',
    height: 350,
  },

})
