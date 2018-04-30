import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity
} from 'react-native';
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import {StackNavigator} from 'react-navigation';
import {AuthenticationComponent} from "./authentication/authenticationComponent";
import {OrderHistoryComponent} from "./common/orderHistoryComponent";
import {ProfileComponent} from "./authentication/profileComponent";

type Props = {};

export const AppStack = StackNavigator({
    Authentication: {
        screen: AuthenticationComponent,
        navigationOptions: {
            title: "Authentication"
        },
    },
    OrderHistory: {
        screen: OrderHistoryComponent,
        navigationOptions: {
            title: "Order History",
        }
    },
    Profile: {
        screen: ProfileComponent,
        navigationOptions: {
            title: "Profile",
        }
    }
})

export class NavigatorComponent extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppStack></AppStack>
        );
    }
}