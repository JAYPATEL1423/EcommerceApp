import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';

function App() {
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.font}>Hello World</Text>
    </SafeAreaView>
  );
}

export default App;

const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"coral"
  },
  font:{
    fontSize:30,
    fontWeight:"bold",
    color:"white",
  }
})