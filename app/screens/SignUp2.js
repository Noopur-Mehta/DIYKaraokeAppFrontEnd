import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View,Image, Button, TouchableOpacity } from "react-native";

function SignUp2({navigation}) {
    return (
        <ScrollView
          contentContainerStyle={styles.scrollContentContainer}
        >
            <Image style={styles.logo} source={require("../assets/karaoke.png")} />
            <Text>Select Your Favorite Genres{'\n'}</Text>
            <SafeAreaView style={styles.container}>
              <View style={[styles.box, {
                transform: [{ translateX: -110 }]
            }]}>
              <Image
              style={styles.image}
              source={require("../assets/karaoke.png")}
              resizeMode="contain" />
              <Text style={{position: 'absolute', fontSize: 20, fontWeight:'bold'}}>Pop</Text>
          </View>
          <View style={[styles.box, {
                transform: [{ translateY: -110 }]
            }]}>
                          <Image
              style={styles.image}
              source={require("../assets/karaoke.png")}
              resizeMode="contain" />
              <Text style={{position: 'absolute', fontSize: 20, fontWeight:'bold'}}>Classical</Text>
          </View>
          <View style={[styles.box, {
                transform: [{ translateY: -220 },{translateX:110}]
            }]}>
                          <Image
              style={styles.image}
              source={require("../assets/karaoke.png")}
              resizeMode="contain" />
              <Text style={{position: 'absolute', fontSize: 20, fontWeight:'bold'}}>Hiphop</Text>
          </View>
          </SafeAreaView>
          <SafeAreaView style={styles.container}>
             <View style={[styles.box, {
                transform: [{ translateX: -110 },{translateY:-220}]
            }]}>
                          <Image
              style={styles.image}
              source={require("../assets/karaoke.png")}
              resizeMode="contain" />
              <Text style={{position: 'absolute', fontSize: 20, fontWeight:'bold'}}>Romantic</Text>
          </View>
          <View style={[styles.box, {
                transform: [{ translateY: -330 }]
            }]}>
                          <Image
              style={styles.image}
              source={require("../assets/karaoke.png")}
              resizeMode="contain" />
              <Text style={{position: 'absolute', fontSize: 20, fontWeight:'bold'}}>Bollywood</Text>
          </View>
          <View style={[styles.box, {
                transform: [{ translateY: -440 },{translateX:110}]
            }]}>
                          <Image
              style={styles.image}
              source={require("../assets/karaoke.png")}
              resizeMode="contain" />
              <Text style={{position: 'absolute', fontSize: 20, fontWeight:'bold'}}>Party</Text>
          </View>
          </SafeAreaView>
          <SafeAreaView style={styles.container}>
             <View style={[styles.box, {
                transform: [{ translateX: -110 },{translateY:-440}]
            }]}>
                          <Image
              style={styles.image}
              source={require("../assets/karaoke.png")}
              resizeMode="contain" />
              <Text style={{position: 'absolute', fontSize: 20, fontWeight:'bold'}}>Trip</Text>
          </View>
          <View style={[styles.box, {
                transform: [{ translateY: -110 },{translateY:-440}]
            }]}>
                          <Image
              style={styles.image}
              source={require("../assets/karaoke.png")}
              resizeMode="contain" />
              <Text style={{position: 'absolute', fontSize: 20, fontWeight:'bold'}}>Workout</Text>
          </View>
          <View style={[styles.box, {
                transform: [{ translateY: -660 },{translateX:110}]
            }]}>
                          <Image
              style={styles.image}
              source={require("../assets/karaoke.png")}
              resizeMode="contain" />
              <Text style={{position: 'absolute', fontSize: 20, fontWeight:'bold'}}>Feel Good</Text>
          </View>
          </SafeAreaView>
          <SafeAreaView style={styles.container}>
             <View style={[styles.box, {
                transform: [{ translateX: -110 },{translateY:-660}]
            }]}>
                          <Image
              style={styles.image}
              source={require("../assets/karaoke.png")}
              resizeMode="contain" />
              <Text style={{position: 'absolute', fontSize: 20, fontWeight:'bold'}}>Happy</Text>
          </View>
          <View style={[styles.box, {
                transform: [{ translateY: -770 }]
            }]}>
                          <Image
              style={styles.image}
              source={require("../assets/karaoke.png")}
              resizeMode="contain" />
              <Text style={{position: 'absolute', fontSize: 20, fontWeight:'bold'}}>Chill</Text>
          </View>
          <View style={[styles.box, {
                transform: [{ translateY: -880 },{translateX:110}]
            }]}>
                          <Image
              style={styles.image}
              source={require("../assets/karaoke.png")}
              resizeMode="contain" />
              <Text style={{position: 'absolute', fontSize: 20, fontWeight:'bold'}}>Hits</Text>

          </View>   
          </SafeAreaView>
          <SafeAreaView style={styles.container}>
             <View>
             <TouchableOpacity style={[styles.regButton, {
                transform: [{ translateY: -880 }]
            }]}>
               <Button title="Next" color="#ff33cc" onPress={() => navigation.navigate("SignUp3")}></Button>
            </TouchableOpacity>
               </View>
               </SafeAreaView>
        </ScrollView>
    
    );
}
const styles = StyleSheet.create({
    container: {
      // flex:1,
    },
    image:{
      width:100,
      height:150,
      opacity:0.3,
    },
    scrollContentContainer: {
      flex:1,
      alignItems: "center",
    //   paddingTop:35,
    //   paddingBottom: 60
    },
    box: {
      height: 100,
      width: 100,
      borderRadius: 5,
      marginVertical: 5,
      backgroundColor: "#61dafb",
      alignItems: "center",
      justifyContent: "center"
    },
    text: {
      fontSize: 14,
      fontWeight: "bold",
      margin: 8,
      color: "#000",
      textAlign: "center"
    },
    logo: {
        width: 120,
        height: 120,
        marginTop: 20,
        marginBottom: 10
      },
      loginButton: {
          paddingTop:0,
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ff33cc",
        margin: "1%",
      },
  });

export default SignUp2;