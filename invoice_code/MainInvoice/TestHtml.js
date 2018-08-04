import React,{Component} from 'react';
import { 
   
    View,
    Text,
    StyleSheet,
    TextInput,
    WebView,
 } from 'react-native';
 import {DOMParser} from 'react-native-html-parser';

 const DomParser =DOMParser;

export default class TestHtml extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        let html = `<html>
                        <body>
                            <div id="b">
                                <a href="example.org">
                                <div class="inA">
                                    <br>bbbb</br>
                                </div>
                            </div>
                            <div class="bb">
                                Test
                            </div>
                        </body>
                    </html>`
        let doc = new DomParser().parseFromString(html,'text/html')
        
        console.log(doc.querySelect('#b .inA'))
        console.log(doc.getElementsByTagName('a'))
        console.log(doc.querySelect('#b a[href="example.org"]'))
        new DomParser()
    }
    
    render(){
        this.componentDidMount();
        return(
            <View>
                <Text>aaa</Text>
            </View>
        );
    }
}