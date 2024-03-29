import React, { useState } from "react";
import {
  Dropdown }
  from 'react-native-material-dropdown';
import {StyleSheet, SafeAreaView, Image, View, TextInput, TouchableOpacity, Button} from "react-native";

function SignUp3({navigation}) {
  const[sque1,setSque1] = useState("");
  const[sque2, setSque2] = useState("");
  const data1 = [{
    value: 'In what town or city was your first full time job?',
  },  {
    value: 'What primary school did you attend?',
  }, {
    value: 'In what town or city did you meet your spouse or partner?',
  }];
  const data2 =[{
    value: 'In what town or city was your first full time job?',
  },  {
    value: 'What primary school did you attend?',
  }, {
    value: 'In what town or city did you meet your spouse or partner?',
  }];
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={require("../assets/karaoke.png")} />
       <Dropdown
       label='Select Security Question 1:'
       data={data1}
       />
       <View style={styles.inputView}>
        <TextInput
          style={styles.inputFields}
          onChangeText={(sque1) => setSque1(sque1)}
        />
      </View>
        <Dropdown
       label='Select Security Question 2:'
       data={data2}
       /> 
       <View style={styles.inputView}>
        <TextInput
          style={styles.inputFields}
          onChangeText={(sque2) => setSque2(sque2)}
        />
      </View>
      <TouchableOpacity style={styles.regButton}>
        <Button title="Register" color="#ff33cc" onPress={() => navigation.navigate("SignIn")}></Button>
      </TouchableOpacity>
       </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingLeft:10,
      paddingTop: 50,
    },
    logo: {
      width: 120,
      height: 120,
      marginLeft: 120,
      marginBottom: 40,
    },
    inputView: {
      backgroundColor: "lightgrey",
      // borderRadius: 30,
      height: 45,
      marginTop:10,
      marginRight:10,
      marginBottom: 20, //adding distance between two fields
      // alignItems: "center",
    },
    inputFields: {
      height: 50,
      flex: 1,
      padding: 10,
      // alignContent: "center",
    },
    regButton:{
      marginRight: 10
    }
  });

export default SignUp3;