import React, { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import ListCart from "../../components/cart/ListCart";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ResumeCart from "../../components/cart/ResumeCart";

const Cart = () => {
  const [heightResume, setHeightResume] = useState(null);
  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <>
      <SafeAreaView />
      <View>
        <ResumeCart
          subTotal={subTotal}
          discount={discount}
          setHeightResume={setHeightResume}
        />

        <KeyboardAwareScrollView>
          <ScrollView>
            <ListCart
              heightResume={heightResume}
              setSubTotal={setSubTotal}
              setDiscount={setDiscount}
              setTotal={setTotal}
            />
          </ScrollView>
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

export default Cart;
