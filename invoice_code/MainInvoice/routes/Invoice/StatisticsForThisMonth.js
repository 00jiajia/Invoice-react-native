import React,{Component} from 'react';
import{View,Text} from 'react-native';


import TitleBar from '../MainFrame/TitleBar';

export default class StatisticsForThisMonth extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <View>
                <TitleBar navigator={this.props.navigator} text="本月开票" />
            </View>
        );
    }
}