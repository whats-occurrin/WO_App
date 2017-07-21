import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Event from './Event';
import * as fakeData from './fakeData';

class EventList extends Component {

    renderEvents() {
        return fakeData.events.map(event =>
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