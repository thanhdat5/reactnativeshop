import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    TextInput
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import {HomeComponent} from "./homeComponent";
import {CartComponent} from "./cartComponent";
import {ContactComponent} from "./contactComponent";
import {SearchComponent} from "./searchComponent";

type Props = {};

export class ShopComponent extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',

        }
    }

    openMenu() {
        const {open} = this.props;
        open();
    }

    render() {
        return (
            <View style={styles.wraper}>
                <View style={styles.topbar}>
                    <View style={styles.topbarsection}>
                        <View style={styles.topbaricon}>
                            <TouchableOpacity style={styles.btn} onPress={() => {
                                this.openMenu()
                            }}>
                                <Image style={styles.topbariconimage}
                                       source={require('../../Images/list-icon.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.topbartext}>
                            <Text style={styles.topbartextheading}>Page title here</Text>
                        </View>
                        <View style={styles.topbaricon}>
                            <TouchableOpacity style={styles.btn} onPress={() => {
                                this.openMenu()
                            }}>
                                <Image style={styles.topbariconimage}
                                       source={require('../../Images/cart-icon.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
                <View style={styles.mainScreen}>
                    <TabNavigator>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'home'}
                            title="Home"
                            renderIcon={() => <Image style={styles.icon}
                                                     source={require('../../Images/home-inactive.png')}/>}
                            renderSelectedIcon={() => <Image style={styles.icon}
                                                             source={require('../../Images/home-active.png')}/>}
                            //badgeText="1"
                            onPress={() => this.setState({selectedTab: 'home'})}>
                            <HomeComponent/>
                        </TabNavigator.Item>

                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'cart'}
                            title="Cart"
                            renderIcon={() => <Image style={styles.icon}
                                                     source={require('../../Images/cart-inactive.png')}/>}
                            renderSelectedIcon={() => <Image style={styles.icon}
                                                             source={require('../../Images/cart-active.png')}/>}
                            //renderBadge={() => <CustomBadgeView />}
                            onPress={() => this.setState({selectedTab: 'cart'})}>
                            <CartComponent/>
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'search'}
                            title="Search"
                            renderIcon={() => <Image style={styles.icon}
                                                     source={require('../../Images/search-inactive.png')}/>}
                            renderSelectedIcon={() => <Image style={styles.icon}
                                                             source={require('../../Images/search-active.png')}/>}
                            //renderBadge={() => <CustomBadgeView />}
                            onPress={() => this.setState({selectedTab: 'search'})}>
                            <SearchComponent/>
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'contact'}
                            title="Contact"
                            renderIcon={() => <Image style={styles.icon}
                                                     source={require('../../Images/account-inactive.png')}/>}
                            renderSelectedIcon={() => <Image style={styles.icon}
                                                             source={require('../../Images/account-active.png')}/>}
                            //renderBadge={() => <CustomBadgeView />}
                            onPress={() => this.setState({selectedTab: 'contact'})}>
                            <ContactComponent/>
                        </TabNavigator.Item>
                    </TabNavigator>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        padding: 20
    },
    wraper: {
        flex: 1
    },
    btn: {
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    icon: {
        width: 20,
        height: 20,
        backgroundColor:'transparent'
    },
    topbar: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgb(52, 152, 219)',
        paddingHorizontal:15,
        paddingTop:10
    },
    topbarsection: {
        flex: 1,
        flexDirection: 'row',
    },
    topbaricon: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(52, 152, 219)',
    },
    topbariconimage: {
        width: 16,
        height: 16,
        backgroundColor:'transparent'
    },
    topbartext: {
        flex: 4,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topbartextheading: {
        color: '#fff'
    },
    mainScreen: {
        flex: 6,
        flexDirection: 'row'
    }
});