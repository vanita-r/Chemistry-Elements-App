import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader4 from '../components/AppHeader4';

export default class HomeScreen extends React.Component {
  goToHomeScreen = (backgroundColor) => {
    this.props.navigation.navigate('HomeScreen', { color: backgroundColor });
  };
  render(){
    return(
      <View>
      <AppHeader4/>
      <Text style={[styles.header, { backgroundColor: 'white' }]}>Elements with the largest atomic radius/ionization energy/electronegativity: {"\n"}{"\n"}{"\n"}</Text> 

      <Text style={styles.text}>
        <Text style={styles.text,{fontWeight:'bold'}}>Largest Atomic Radius: </Text>Barium{"\n"}{"\n"}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.text,{fontWeight:'bold'}}>First Largest Ionization Energy: </Text>Fluorine{"\n"}{"\n"}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.text,{fontWeight:'bold'}}>Largest Electronegativity: </Text>Fluorine{"\n"}{"\n"}
      </Text>

        <TouchableOpacity
          style={[styles.backButton, { backgroundColor: 'purple' }]}
          onPress={() => {
            this.goToHomeScreen();
          }}>
          <Text style={styles.buttonText}>Back to home screen</Text>
        </TouchableOpacity>


    </View>
    );
  }
}

const styles = StyleSheet.create({
  buttons2: {
    justifyContent: 'center',
    //justifyContent: 'space-evenly',
    //alignItems:'flex-end',
    alignSelf: 'flex-end',
    //flexDirection:'column-reverse',
    //direction:'rtl',
    marginTop: 25,
    right:10,
    position:'relative',
    padding:8,
    bottom:375,
    //marginLeft:213,
    width: 150,
    height: 50,
    borderWidth:2,
    borderRadius:15,
  },
  buttons:{
    justifyContent:'center',
    //marginTop:30,
    //marginTop:50,
    marginTop:25,
    left:8,
    borderWidth:2,
    width:150,
    height:50,
    borderRadius:15,
    //alignSelf:'center',
  },
  backButton:{
    justifyContent: 'center',
    alignSelf: 'center',
    //marginTop: 635,
    width: 333,
    height: 30,
    position: 'relative',
    top:300
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
  header: {
    //textAlign: 'justify',
    fontSize: 20,
    fontWeight: '300',
  },
  text: {
    fontSize: 18,
  },
});