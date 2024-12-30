
import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  View,
  Dimensions,
} from "react-native";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignup = () => {
    setErrors({ name: "", email: "", password: "", confirmPassword: "" });

    let isValid = true;

    if (!name) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name is required",
      }));
      isValid = false;
    }

    if (!email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email",
      }));
      isValid = false;
    }

    if (!password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
      isValid = false;
    } else if (password.length < 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 6 characters",
      }));
      isValid = false;
    }

    if (!confirmPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Please confirm your password",
      }));
      isValid = false;
    } else if (confirmPassword !== password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Passwords do not match",
      }));
      isValid = false;
    }

    if (isValid) {
      console.log("SignUp Successful");
      router.push(`/home?username=${name}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.innerContainer}>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Image
              style={styles.Logo}
              source={require("../../assets/images/logo.png")}
            />

            <Text
              style={{
                color: "#4a4a4a",
                fontFamily: "SpaceMono",
                fontSize: 17,
              }}
            >
              Create Your Adventure Account!
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Name"
              style={styles.input}
              value={name}
              onChangeText={(text) => setName(text)}
            />
            {errors.name ? (
              <Text style={styles.errorText}>{errors.name}</Text>
            ) : null}
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            {errors.email ? (
              <Text style={styles.errorText}>{errors.email}</Text>
            ) : null}
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Password"
              style={styles.input}
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
            {errors.password ? (
              <Text style={styles.errorText}>{errors.password}</Text>
            ) : null}
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Confirm Password"
              style={styles.input}
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              secureTextEntry
            />
            {errors.confirmPassword ? (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            ) : null}
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleSignup}>
              <Text style={styles.inputbuttontext}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={{ fontFamily: "SpaceMono", paddingTop: 10 }}>
              Already Have an Account?{" "}
              <Link href={"/signin"}>
                <Text
                  style={{
                    color: "#ff6320",
                    fontWeight: "bold",
                    fontFamily: "SpaceMono",
                  }}
                >
                  Sign In
                </Text>
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


//   container: {
//     flex: 1,
//     backgroundColor: "#f4f4f4",
//     fontFamily: "SpaceMono",
//     marginTop: 10,
//   },
//   scrollContent: {
//     padding: 16,
//     fontFamily: "SpaceMono",
//   },
//   innerContainer: {
//     flex: 1,
//     flexDirection: "column",
//     alignItems: "center",
//     marginTop: 20,
//     fontFamily: "SpaceMono",
//   },
//   inputContainer: {
//     width: "100%",
//     paddingHorizontal: 16,
//     fontFamily: "SpaceMono",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   input: {
//     height: 50,
//     borderWidth: 1,
//     borderBottomColor: "#ff6320",
//     paddingHorizontal: 10,
//     width: "90%",
//     marginTop: 30,
//     fontFamily: "SpaceMono",
//   },
//   buttonContainer: {
//     flex: 1,
//     width: "100%",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 20,
//     fontFamily: "SpaceMono",
//   },
//   button: {
//     backgroundColor: "#ff6320",
//     padding: 10,
//     borderRadius: 40,
//     height: 50,
//     justifyContent: "center",
//     alignItems: "center",
//     width: "70%",
//     fontFamily: "SpaceMono",
//   },
//   inputbuttontext: {
//     fontWeight: "300",
//     color: "white",
//     fontSize: 22,
//   },
//   Logo: {
//     height: 50,
//     width: 50,
//     margin: 20,
//   },
//   errorText: {
//     color: "#ff3333",
//     fontSize: 12,
//     marginTop: 5,
//   },
// });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e0e0",
  },
  scrollContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 15,
    width: "90%",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  inputContainer: {
    width: "100%",
    marginVertical: 10,
  },
  input: {
    height: 48,
    borderBottomWidth: 2, // Only bottom border
    borderBottomColor: "#ff9a00", // Desired color
    paddingHorizontal: 10,
    fontSize: 16,
    fontFamily: "SpaceMono",
  },
  buttonContainer: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#ff9a00",
    paddingVertical: 12,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
    shadowColor: "#ff9a00",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  inputbuttontext: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  Logo: {
    height: 60,
    width: 60,
    marginBottom: 20,
  },
  errorText: {
    color: "#e11d48",
    fontSize: 14,
    marginTop: 5,
  },
});


export default Signup;
