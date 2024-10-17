import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader3 from '../components/AppHeader3';

export default class HomeScreen extends React.Component {
  goToHomeScreen = (backgroundColor) => {
    this.props.navigation.navigate('HomeScreen', { color: backgroundColor });
  };
  goToAluminum = (backgroundColor) => {
    this.props.navigation.navigate('Aluminum', {color:backgroundColor});
  };
  goToBarium = (backgroundColor) => {
    this.props.navigation.navigate('Barium', {color:backgroundColor});
  };
   goToBismuth = (backgroundColor) => {
    this.props.navigation.navigate('Bismuth', {color:backgroundColor});
  };
  goToFluorine = (backgroundColor) => {
    this.props.navigation.navigate('Fluorine', {color:backgroundColor});
  };
  goToGold = (backgroundColor) => {
    this.props.navigation.navigate('Gold', {color:backgroundColor});
  };
  goToIodine = (backgroundColor) => {
    this.props.navigation.navigate('Iodine', {color:backgroundColor});
  };
  goToMagnesium = (backgroundColor) => {
    this.props.navigation.navigate('Magnesium', {color:backgroundColor});
  };
  goToSilicon = (backgroundColor) => {
    this.props.navigation.navigate('Silicon', {color:backgroundColor});
  };
  goToTin = (backgroundColor) => {
    this.props.navigation.navigate('Tin', {color:backgroundColor});
  };
  goToBromine = (backgroundColor) => {
    this.props.navigation.navigate('Bromine', {color:backgroundColor});
  };
  
  render(){
    return(
      <View>
      <AppHeader3/>
      <Text style={[styles.header, { backgroundColor: 'white' }]}>This is a list of 10 elements that are found in food.</Text>
      <Text style={{textAlign:'center', fontSize:18, backgroundColor:'white'}}>Just like the "Elements important to human life" page, there is information about how these elements are used, atomic number, group number period number, etc.</Text>

<TouchableOpacity style={styles.buttons} onPress={() => {this.goToIodine();}}>
      <Text style={{alignSelf:'center'}}>11. Iodine</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons} onPress={() => {this.goToBromine();}}>
      <Text style={{alignSelf:'center'}}>12. Bromine</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons} onPress={() => {this.goToBarium();}}>
      <Text style={{alignSelf:'center'}}>13. Barium</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons} onPress={() => {this.goToGold();}}>
      <Text style={{alignSelf:'center'}}>14. Gold</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons} onPress={() => {this.goToBismuth();}}>
      <Text style={{alignSelf:'center'}}>15. Bismuth</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons2} onPress={() => {this.goToFluorine();}}>
      <Text style={{alignSelf:'center'}}>16. Fluorine</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons2} onPress={() => {this.goToMagnesium();}}>
      <Text style={{alignSelf:'center'}}>17. Magnesium</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons2} onPress={() => {this.goToAluminum();}}>
      <Text style={{alignSelf:'center'}}>18. Aluminum</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons2} onPress={() => {this.goToSilicon();}}>
      <Text style={{alignSelf:'center'}}>19. Silicon</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons2} onPress={() => {this.goToTin();}}>
      <Text style={{alignSelf:'center'}}>20. Tin</Text>
      </TouchableOpacity>

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
    //position: 'absolute',
    bottom:300
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
  },
});