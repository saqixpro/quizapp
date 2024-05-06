import React, { FC } from "react";
import { ChildProps } from "../types";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

const UIGradient: FC<ChildProps> = ({ children }) => {
  return (
    <SafeAreaView style={{ padding: 20, flex: 1 }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default UIGradient;
