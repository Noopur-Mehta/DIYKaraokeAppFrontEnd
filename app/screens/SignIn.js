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

function SignIn({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/karaoke.png")} />
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
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton}>
        <Button title="LOGIN"  onPress={() => navigation.navigate("Options")} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.register}
         onPress={() => navigation.navigate("SignUp")}>
             New User? Register Here</Text>
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
    marginBottom: 30, //adding distance between two fields
    alignItems: "center",
  },
  inputFields: {
    height: 50,
    flex: 1,
    padding: 10,
    alignContent: "center",
  },
  forgotPassword: {
    height: 30,
    marginBottom: 30,
  },
  loginButton: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff33cc",
    marginBottom: 30,
  },
  register: {
    height: 50,
    marginBottom: 50,
    color: "blue",
  },
});
export default SignIn;