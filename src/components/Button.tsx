import React, { FC } from "react";
import { ButtonProps, StyleSheet, Text, TouchableOpacity } from "react-native";

interface IButton extends ButtonProps {
  title: string;
}

const Button: FC<IButton> = ({ onPress, title, ...props }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button} {...props}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 17,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1d89f1",
  },
  title: {
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#FFFFFF",
  },
});
