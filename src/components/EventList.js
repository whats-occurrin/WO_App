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
                {this.renderEvents()}
            </ScrollView>
        );
    }
}

export default EventList;