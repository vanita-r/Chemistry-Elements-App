import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import AppHeader2 from '../components/AppHeader2';

export default class HomeScreen extends React.Component {
  goToImportantEleScreen = (backgroundColor) => {
    this.props.navigation.navigate('ImportantEleScreen', { color: backgroundColor });
  };
  render(){
    return(
      <View>
      <AppHeader2/>
      <Text style={[styles.header, { backgroundColor: 'white' }]}>Sodium</Text>
        <TouchableOpacity
          style={[styles.backButton, { backgroundColor: 'purple' }]}
          onPress={() => {
            this.goToImportantEleScreen();
          }}>
          <Text style={styles.buttonText}>Back to Important Elements</Text>
        </TouchableOpacity>
        <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Sodium is used for electrical signaling in nerves as an electrolyte, regulating the amount of water in the body, and aiding proper nerve functions. It’s also used in processed foods and table salt.
{"\n"}
        </Text>
        <Text style={styles.text}>
        <Text style={styles.text,{fontWeight:'bold'}}>Atomic Number: </Text>11{"\n"}
        </Text>
        <Text style={styles.text}>
        <Text style={styles.text,{fontWeight:'bold'}}>Orbital Diagram/Electron Configuration: </Text>1s^2, 2s^2, 2p^6, 3s^1 {"\n"}
        </Text>
        <Text style={styles.text}>
        <Text style={styles.text,{fontWeight:'bold'}}>Group Number: </Text>1{"\n"}
        </Text>
        <Text style={styles.text}>
        <Text style={styles.text,{fontWeight:'bold'}}>Period Number: </Text>3{"\n"}
        </Text>
        <Text style={styles.text}>
        <Text style={styles.text,{fontWeight:'bold'}}>Valence Electrons: </Text>1{"\n"}
        </Text>
        <Text style={styles.text}>
        <Text style={styles.text,{fontWeight:'bold'}}>Family it belongs to: </Text>Alkali Metals{"\n"}{"\n"}
        </Text>
        <Text style={styles.text}>
        I chose this element because sodium is one of the important elements that help the body function properly.
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