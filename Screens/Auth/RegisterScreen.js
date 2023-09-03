import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { auth } from "../../constants";

const RegisterScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [emailVerficationCode, setEmailVerificationCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerButtonDisable, setRegisterButtonDisable] = useState(true);
  const [verifyButtonDisable, setVerifyButtonDisable] = useState(false);
  const [verificationSuccess, setVerificationSuccess] = useState(false);

  const register = async () => {
   
    try
    {
          
    }
    catch(e)
    {
      console.log(e);
    }

  };

  const getVerificationCode = () => {
    setVerificationSuccess(true);
    setRegisterButtonDisable(false);
    setVerifyButtonDisable(true);
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 25, marginTop: 100 }}
      >
        <View style={{ alignItems: "center" }}></View>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "500",
            color: "#333",
            marginBottom: 30,
          }}
        >
          Register
        </Text>

        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
          <Ionicons
            name="person-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Full Name"
            style={{ flex: 1, paddingVertical: 0 }}
            onChangeText={(text) => setFullName(text)}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
          <Ionicons
            name="person-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="User Name"
            style={{ flex: 1, paddingVertical: 0 }}
            onChangeText={(text) => setUserName(text)}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
          <MaterialIcons
            name="alternate-email"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Email ID"
            style={{ flex: 1, paddingVertical: 0 }}
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <TouchableOpacity
          onPress={() => getVerificationCode()}
          disabled={verifyButtonDisable}
          style={
            verifyButtonDisable
              ? {
                  backgroundColor: "#b674b8",
                  padding: 5,
                  width: 100,
                  borderRadius: 10,
                  marginBottom: 30,
                }
              : {
                  backgroundColor: "#AD40AF",
                  padding: 5,
                  width: 100,
                  borderRadius: 10,
                  marginBottom: 30,
                }
          }
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "700",
              fontSize: 14,
              color: "#fff",
            }}
          >
            Get Code
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
          <MaterialIcons
            name="alternate-email"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Email Verification Code"
            style={{ flex: 1, paddingVertical: 0 }}
            onChangeText={(text) => setEmailVerificationCode(text)}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
          <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Password"
            style={{ flex: 1, paddingVertical: 0 }}
            inputType="password"
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
          <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Confirm Password"
            style={{ flex: 1, paddingVertical: 0 }}
            inputType="password"
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </View>

        <TouchableOpacity
          onPress={() => register()}
          style={
            registerButtonDisable
              ? {
                  backgroundColor: "#b674b8",
                  padding: 20,
                  borderRadius: 10,
                  marginBottom: 30,
                }
              : {
                  backgroundColor: "#AD40AF",
                  padding: 20,
                  borderRadius: 10,
                  marginBottom: 30,
                }
          }
          disabled={registerButtonDisable}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "700",
              fontSize: 16,
              color: "#fff",
            }}
          >
            Register
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={{ color: "#AD40AF", fontWeight: "700" }}> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
