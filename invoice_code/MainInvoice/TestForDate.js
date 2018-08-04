import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DatePicker from 'react-native-datepicker';


export default class TestForDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    render() {
        return (
            <View>
                <Text>DatePicker</Text>
                {/* <Text>Hello</Text> */}
                <DatePicker
                    style={{ width: 100 }}
                    date={this.state.date}
                    mode="date"
                    androidMode='calendar'
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2016-05-01"
                    maxDate="2018-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    hideText="true"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                    }}
                    onDateChange={(date) => { this.setState({ date: date }) }}
                />
            </View>
        );
    }
}