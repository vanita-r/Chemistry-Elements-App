import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import AppHeader3 from '../components/AppHeader3';

export default class HomeScreen extends React.Component {
  goToFoodAndHealthScreen = (backgroundColor) => {
    this.props.navigation.navigate('FoodAndHealthScreen', { color: backgroundColor });
  };
  render(){
    return(
      <View>
      <AppHeader3/>
      <Text style={[styles.header, { backgroundColor: 'white' }]}>Aluminum</Text>
        <TouchableOpacity
          style={[styles.backButton, { backgroundColor: 'purple' }]}
          onPress={() => {
            this.goToFoodAndHealthScreen();
          }}>
          <Text style={styles.buttonText}>Back to Food and Health</Text>
        </TouchableOpacity>
        <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Aluminum is used in frying pans, food packaging, food storage, baking powder, cake and biscuit decoration, and dyes.{"\n"}
        </Text>
        <Text style={styles.text}>
        <Text style={styles.text,{fontWeight:'bold'}}>Atomic Number: </Text>12{"\n"}
        </Text>
        <Text style={styles.text}>
        <Text style={styles.text,{fontWeight:'bold'}}>Orbital Diagram/Electron Configuration: </Text>1s^2, 2s^2, 2p^6, 3s^2{"\n"}
        </Text>
        <Text style={styles.text}>
        <Text style={styles.text,{fontWeight:'bold'}}>Group Number: </Text>2{"\n"}
        </Text>
        <Text style={styles.text}>
        <Text style={styles.text,{fontWeight:'bold'}}>Period Number: </Text>3{"\n"}
        </Text>
        <Text style={styles.text}>
        <Text style={styles.text,{fontWeight:'bold'}}>Family it belongs to: </Text>alkaline earth metals{"\n"}{"\n"}
        </Text>
        <Text style={styles.text}>
        I chose this element because I usually find aluminum in food storage such as aluminum foil and chip bags.
        </Text>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 635,
    width: 333,
    height: 30,
  },
  backButton:{
    justifyContent: 'center',
    alignSelf: 'center',
    //marginTop: 635,
    width: 333,
    height: 30,
    position: 'absolute',
    //bottom:100
    marginTop:650,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: '#d1f8ff',
    marginHorizontal: 20,
    //marginBottom:100,
    //marginTop:10,
    top:20,
  },
  text: {
    fontSize: 18,
  },
});