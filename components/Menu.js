import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

class MenuStyleSheetFactory {
    static getStyleSheet(props = {}) {
        return StyleSheet.create({
            tab: {
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            },
            label: {
                color: props.color
            }
        });
    }
}

const tabs = [
    {
        icon: "airplane-takeoff",
        name: "Flights",
        component: MaterialCommunityIcons
    },
    {
        icon: "hotel",
        name: "Hotels",
        component: FontAwesome
    }
];

export default class Menu extends React.Component {
    render() {
        const menuStyles = MenuStyleSheetFactory.getStyleSheet(this.props);
        return (
            <View style={this.props.style}>
                {
                    tabs.map((tab, index) => {
                        const IconCategory = tab.component;
                        return (
                            <View style={menuStyles.tab} key={index}>
                                <IconCategory name={tab.icon} size={32} color={menuStyles.label.color} />
                                <Text style={menuStyles.label}>{tab.name}</Text>
                            </View>
                        );
                    })
                }
            </View>
        )
    }
}
