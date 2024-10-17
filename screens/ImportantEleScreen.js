import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader2 from '../components/AppHeader2';

export default class HomeScreen extends React.Component {
  goToHomeScreen = (backgroundColor) => {
    this.props.navigation.navigate('HomeScreen', { color: backgroundColor });
  };
  goToCarbon = (backgroundColor) => {
    this.props.navigation.navigate('Carbon', { color: backgroundColor });
  };
  goToHydrogen = (backgroundColor) => {
    this.props.navigation.navigate('Hydrogen', { color: backgroundColor });
  };
  goToOxygen = (backgroundColor) => {
    this.props.navigation.navigate('Oxygen', { color: backgroundColor });
  };
  goToCalcium = (backgroundColor) => {
    this.props.navigation.navigate('Calcium', { color: backgroundColor });
  };
  goToNitrogen = (backgroundColor) => {
    this.props.navigation.navigate('Nitrogen', { color: backgroundColor });
  };
  goToPhosphorus = (backgroundColor) => {
    this.props.navigation.navigate('Phosphorus', { color: backgroundColor });
  };
  goToPotassium = (backgroundColor) => {
    this.props.navigation.navigate('Potassium', { color: backgroundColor });
  };
  goToSulfur = (backgroundColor) => {
    this.props.navigation.navigate('Sulfur', { color: backgroundColor });
  };
  goToChlorine = (backgroundColor) => {
    this.props.navigation.navigate('Chlorine', { color: backgroundColor });
  };
  goToSodium = (backgroundColor) => {
    this.props.navigation.navigate('Sodium', { color: backgroundColor });
  };
  render(){
    return(
      <View>
      <AppHeader2/>
      <Text style={[styles.header, { backgroundColor: 'white' }]}>This is a list of 10 elements that are important to human life.</Text> 
      <Text style={[styles.header, { backgroundColor: 'white', top:4 }]}> For each element, there is information about how they are used, atomic number, electronic configuration, group number, period number, valence electrons, family, etc.</Text>

      <TouchableOpacity style={styles.buttons} onPress={() => {this.goToCarbon();}}>
      <Text style={{alignSelf:'center'}}>1. Carbon</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons} onPress={() => {this.goToHydrogen();}}>
      <Text style={{alignSelf:'center'}}>2. Hydrogen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons} onPress={() => {this.goToOxygen();}}>
      <Text style={{alignSelf:'center'}}>3. Oxygen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons} onPress={() => {this.goToCalcium();}}>
      <Text style={{alignSelf:'center'}}>4. Calcium</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons} onPress={() => {this.goToNitrogen();}}>
      <Text style={{alignSelf:'center'}}>5. Nitrogen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons2} onPress={() => {this.goToPhosphorus();}}>
      <Text style={{alignSelf:'center'}}>6. Phosphorus</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons2} onPress={() => {this.goToPotassium();}}>
      <Text style={{alignSelf:'center'}}>7. Potassium</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons2} onPress={() => {this.goToSulfur();}}>
      <Text style={{alignSelf:'center'}}>8. Sulfur</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons2}onPress={() => {this.goToChlorine();}} >
      <Text style={{alignSelf:'center'}}>9. Chlorine</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons2} onPress={() => {this.goToSodium();}}>
      <Text style={{alignSelf:'center'}}>10. Sodium</Text>
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
    position: 'relative',
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