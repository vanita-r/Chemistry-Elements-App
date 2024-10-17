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
      <Text style={[styles.header, { backgroundColor: 'white' }]}>Sulfur</Text>
        <TouchableOpacity
          style={[styles.backButton, { backgroundColor: 'purple' }]}
          onPress={() => {
            this.goToImportantEleScreen();
          }}>
          <Text style={styles.buttonText}>Back to Important Elements</Text>
        </TouchableOpacity>
        <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Sulfur is used for giving proteins their shape and making up small parts of fats, body fluids, and skeletal minerals. Since it’s also a part of the molecules used in skin, hair, nails, and cartilage, it’s used to keep them firm. Sulfur is found in food such as beef, peanuts, clams, wheat germ, and dried beans.
{"\n"}
        </Text>
        <Text style={styles.text}>
        <Text style={styles.text,{fontWeight:'bold'}}>Atomic Number: </Text>16
        </Text>
        <Text style={styles.text}>
        <Text style={styles.text,{fontWeight:'bold'}}>Orbital Diagram/Electron Configuration: </Text>1s^2, 2s^2, 2p^6, 3s^2, 3p^4
        </Text>
        <Text style={styles.text}>
        <Text style={styles.text,{fontWeight:'bold'}}>Group Number: </Text>16
        </Text>
        <Text style={styles.text}>
        <Text style={styles.text,{fontWeight:'bold'}}>Period Number: </Text>3
        </Text>
        <Text style={styles.text}>
        <Text style={styles.text,{fontWeight:'bold'}}>Valence Electrons: </Text>6
        </Text>
        <Text style={styles.text}>
        <Text style={styles.text,{fontWeight:'bold'}}>Family it belongs to: </Text>Oxygen Family{"\n"}{"\n"}
        </Text>
        <Text style={styles.text}>
        I chose this element because sulfur is used in important compounds such as Calcium sulfate (a food source for calcium), Sulfur dioxide (a reducing agent used for fumigation, bleaching, and food preservation), and Ammonium sulfate (fertilizer).
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