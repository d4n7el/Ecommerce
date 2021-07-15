import React, { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import ListCart from "../../components/cart/ListCart";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Cart = () => {
  return (
    <>
      <SafeAreaView />
      <View>
        <KeyboardAwareScrollView>
          <ScrollView>
            <ListCart />
          </ScrollView>
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

export default Cart;
