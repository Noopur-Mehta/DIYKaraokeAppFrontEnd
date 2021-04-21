import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";

function SignUp(props) {
  const[fname,setFname] = useState("");
  const[lname,setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/karaoke.png")} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputFields}
          placeholder="First Name"
          placeholderTextColor="#003f5c"
          onChangeText={(fname) => setFname(fname)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputFields}
          placeholder="Last Name"
          placeholderTextColor="#003f5c"
          onChangeText={(lname) => setLname(lname)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputFields}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputFields}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputFields}
          placeholder="Confirm Password"
          placeholderTextColor="#003f5c"
          onChangeText={(password) => setPassword(password)}
        />
      </View>
        <Text style={styles.alreadyMember}>Already a Member? </Text>
      <TouchableOpacity style={styles.loginButton}>
        <Button title="Login here" color="#ff33cc" onPress=""/>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.loginButton}>
        <Button title="Next" color="#ff33cc"></Button>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20, //adding distance between two fields
    alignItems: "center",
  },
  inputFields: {
    height: 50,
    flex: 1,
    padding: 10,
    alignContent: "center",
  },
  alreadyMember: {
    height: 30,
    marginTop: 30,
  },
  loginButton: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff33cc",
    margin: "1%",
  },
});
export default SignUp;