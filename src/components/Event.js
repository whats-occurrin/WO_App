import React from 'react';
import { Text, View } from 'react-native';

const Event = ({event}) => {
    return (
        <View>
            <Text style={styles.textStyle}>{event.location}</Text>
            <Text style={styles.textStyle}>{event.eventDetails}</Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20,
        color: '#00897F'
    }
};

export default Event;