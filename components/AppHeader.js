import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>Element Project</Text>
        <Text style={styles.text2}>Vanita Rabsatt</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'red',
  },
  text:{
    color: 'white',
    padding: 20,
    marginTop:15,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text2:{
    color:'black',
    //padding:0,
    marginTop:-18,
    fontsize:11,
    fontWeight:600,
    textAlign:'center',
  }
});

export default AppHeader;