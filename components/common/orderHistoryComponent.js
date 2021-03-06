import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

type Props = {};
export class OrderHistoryComponent extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{color:'#fff'}}>OrderHistoryComponent</Text>
                <TouchableOpacity style={styles.btn} onPress={()=>{this.props.navigation.goBack()}}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        padding: 20
    },
    btn: {
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
});