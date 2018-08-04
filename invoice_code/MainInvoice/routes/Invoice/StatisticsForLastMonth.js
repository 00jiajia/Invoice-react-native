import React,{Component} from 'react';
import{View,Text} from 'react-native';
import TitleBar from '../MainFrame/TitleBar';

export default class StatisticsForLastMonth extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <View>
                <TitleBar navigator={this.props.navigator} text="上月开票" />
            </View>
        );
    }
}