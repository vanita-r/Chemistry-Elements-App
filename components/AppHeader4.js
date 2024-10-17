import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader4 extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>Other Information</Text>
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
    padding: 15,
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:15,
  }
});

export default AppHeader4;