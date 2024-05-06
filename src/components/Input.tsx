import React, { FC, useCallback, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface InputProps extends TextInputProps {
  label?: string;
  icon?: string;
}

const Input: FC<InputProps> = ({
  value,
  onChangeText,
  label,
  icon,
  placeholder,
  onFocus,
  onBlur,
  ...props
}) => {
  const [inFocus, setInFocus] = useState<boolean>(false);

  const handleChangeText = useCallback(
    (text: string) => {
      const res = text.toUpperCase();
      onChangeText?.(res);
    },
    [onChangeText],
  );

  const handleFocus = useCallback(() => {
    setInFocus(true);
  }, []);

  const handleBlur = useCallback(() => {
    setInFocus(false);
  }, []);

  return (
    <View style={styles.wrapper}>
      {!!label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.inputContainer, inFocus && styles.inFoucs]}>
        {!!icon && (
          <Ionicons
            name={icon as any}
            size={24}
            color={inFocus ? "#1d89f1" : "#00000088"}
          />
        )}
        <TextInput
          style={styles.input}
          placeholderTextColor="#00000088"
          placeholder={placeholder}
          onChangeText={handleChangeText}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  wrapper: {},
  inputContainer: {
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  inFoucs: {
    shadowColor: "#000000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  label: {
    padding: 5,
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#FFFFFF",
  },
  input: {
    letterSpacing: 12 * 0.15,
  },
});
