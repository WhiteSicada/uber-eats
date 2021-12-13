import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HeaderTabs({ activeTab, setActiveTab }) {
  return (
    <View style={styles.headerTab}>
      {/* HeaderButton */}
      <HeaderButton
        text="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {/* HeaderButton */}
      <HeaderButton
        text="Pickup"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = ({ text, activeTab, setActiveTab }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setActiveTab(text);
      }}
      style={{
        backgroundColor: activeTab == text ? "black" : "white",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
    >
      <Text
        style={{
          color: activeTab == text ? "white" : "black",
          fontSize: 15,
          fontWeight: "900",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headerTab: {
    flexDirection: "row",
    alignSelf: "center",
  },
});
