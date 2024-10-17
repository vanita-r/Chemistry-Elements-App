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
      <Text style={[styles.header, { backgroundColor: 'white' }]}>Oxygen</Text>
        <TouchableOpacity
          style={[styles.backButton, { backgroundColor: 'purple' }]}
          onPress={() => {
            this.goToImportantEleScreen();
          }}>
          <Text style={styles.buttonText}>Back to Important Elements</Text>
        </TouchableOpacity>
        <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Oxygen is used for supporting the respiration process of plants and animals, water, composing about ⅔ of the human body, creating the compounds of both plants and animals, and is used for the enrichment of fuel in furnaces.
{"\n"}
        </Text>
        <Text style={styles.text}>
        <Text style={styles.text,{fontWeight:'bold'}}>Atomic Number: </Text>8{"\n"}
        </Text>
        <Text style={styles.text}>
        <Text style={styles.text,{fontWeight:'bold'}}>Orbital Diagram/Electron Configuration: </Text>1s^2, 2s^2, 2p^4 {"\n"}
        </Text>
        <Text style={styles.text}>
        <Text style={styles.text,{fontWeight:'bold'}}>Group Number: </Text>16{"\n"}
        </Text>
        <Text style={styles.text}>
        <Text style={styles.text,{fontWeight:'bold'}}>Period Number: </Text>2{"\n"}
        </Text>
        <Text style={styles.text}>
        <Text style={styles.text,{fontWeight:'bold'}}>Valence Electrons: </Text>6{"\n"}
        </Text>
        <Text style={styles.text}>
        <Text style={styles.text,{fontWeight:'bold'}}>Family it belongs to: </Text>Oxygen Family{"\n"}{"\n"}
        </Text>
        <Text style={styles.text}>
        I chose this element because Oxygen can be used to create many useful and important compounds which are essential for supporting life on Earth.
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
    marginTop:670,
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