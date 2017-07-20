import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Event from './Event';
import listOfEvents from './Fake_Data';

class EventList extends Component {
    // state = { data: Fake_Data }

    renderEvents() {
        return listOfEvents.map(event =>
            <Event key={event.id} event={event} />);
    }

    render() {
        return (
            <ScrollView>
                <Text style={styles.textStyle}>{'What\'s Occurring?'}</Text>
                {this.renderEvents()}
            </ScrollView>
        );
    }
}

const styles = {
    textStyle: {
        fontSize: 20,
        color: '#00897F'
    }
};

export default EventList;