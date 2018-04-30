import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity, StyleSheet
} from 'react-native';
import Drawer from 'react-native-drawer';
import {MenuComponent} from "./shop/menuComponent";
import {ShopComponent} from "./shop/shopComponent";
import {NavigatorComponent} from "./navigatorComponent";

type Props = {};

export class MainComponent extends Component<Props> {
    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };

    render() {
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                tapToClose={true}
                openDrawerOffset={0.4}
                content={<MenuComponent/>}
            >
                <ShopComponent open={() => {
                    this.openControlPanel()
                }}/>
            </Drawer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
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