import * as React from 'react';
import { Text, View, TouchableOpacity, Button, StyleSheet, Image } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component{
  goToImportantEleScreen = (bgcolor) => {
    this.props.navigation.navigate('ImportantEleScreen');
  };
  goToFoodAndHealthScreen = (bgcolor) => {
    this.props.navigation.navigate('FoodAndHealthScreen');
  };
  goToInformationScreen = (bgcolor) => {
    this.props.navigation.navigate('InformationScreen');
  };
 render(){
   return(
     <View>
     <AppHeader/>
     <Text style={{padding:10, fontSize:18}}><Text style={{fontWeight:'500', fontSize:18}}>My areas of research: </Text>Elements that are important to human life and food and health.</Text>
     <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttons2} 
            onPress={() => {
              this.goToImportantEleScreen('ImportantEleScreen');
            }}>
        <Text style={styles.buttonText2}>Elements important to human life</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}
            onPress={() => {
              this.goToFoodAndHealthScreen('FoodAndHealthScreen');
            }}>
            <Text style={styles.buttonText}>Food and health</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}
            onPress={() => {
              this.goToInformationScreen('InformationScreen');
            }}>
            <Text style={styles.buttonText}>Other Information</Text>
          </TouchableOpacity>
     </View>
     </View>
   );
 }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  buttons:{
    justifyContent:'center',
    //marginTop:30,
    marginTop:30,
    borderWidth:2,
    width:200,
    height:50,
    borderRadius:15,
    alignSelf:'center',
  },
  buttons2:{
    justifyContent:'center',
    //marginTop:30,
    marginTop:100,
    borderWidth:2,
    width:200,
    height:70,
    borderRadius:15,
    alignSelf:'center',
  },
  buttonText:{
    fontSize:20,
    alignSelf:'center',
  },
  buttonText2:{
    fontSize:20,
    alignSelf:'center',
    textAlign:'center'
  }
});
