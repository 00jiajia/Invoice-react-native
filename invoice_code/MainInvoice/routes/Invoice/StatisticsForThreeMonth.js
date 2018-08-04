import React,{Component} from 'react';
import{View,Text} from 'react-native';


import TitleBar from '../MainFrame/TitleBar';

export default class StatisticsForThreeMonth extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <View>
                 <TitleBar navigator={this.props.navigator} text="三个月内开票" />
            </View>
        );
    }
}