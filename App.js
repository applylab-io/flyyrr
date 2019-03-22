import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Menu from './components/Menu';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Menu style={styles.menu} color="steelblue"/>
        <View style={styles.body}>
          <Text style={styles.placeholder}>We'll be ready to take off in T-10</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  body: {
    flex: 4,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  placeholder: {
    fontSize: 72,
    color: 'steelblue',
    textAlign: 'center'
  }
});
