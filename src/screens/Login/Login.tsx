import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, Input, UIGradient } from "../../components";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <UIGradient>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: "space-evenly" }}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
              textAlign: "center",
              textTransform: "uppercase",
              color: "#000000AA",
            }}
          >
            Quiz App
          </Text>
          <View style={{ gap: 15 }}>
            <Input
              placeholder="Email"
              label="Email"
              onChangeText={(text) => setEmail(text)}
              value={email}
              icon="mail"
            />
            <Input
              placeholder="Password"
              label="Password"
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry
              icon="lock-closed"
            />
          </View>
          <Button title="Login" />
        </View>
        <View style={{ flex: 0.5 }}>
          <View style={{ flexDirection: "row", gap: 5, alignSelf: "center" }}>
            <Text style={styles.bottomText}>Don't have an Account?</Text>
            <TouchableOpacity>
              <Text
                style={[
                  styles.bottomText,
                  {
                    color: "#1d89f1",
                  },
                ]}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
            <Text style={styles.bottomText}>here</Text>
          </View>
        </View>
      </View>
    </UIGradient>
  );
};

export default Login;

const styles = StyleSheet.create({
  bottomText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
