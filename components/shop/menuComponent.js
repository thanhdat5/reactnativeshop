import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

type Props = {};

export class MenuComponent extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.btn} onPress={() => {
                    this.props.navigation.navigate("OrderHistory")
                }}>
                    <Text>Go to page Order History</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => {
                    this.props.navigation.navigate("Authentication")
                }}>
                    <Text>Go to page Authentication</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => {
                    this.props.navigation.navigate("Profile")
                }}>
                    <Text>Go to page Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => {
                    this.props.navigation.goBack()
                }}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
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