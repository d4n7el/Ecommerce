import React, { useState, useEffect } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import ListCart from '../../components/cart/ListCart';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ResumeCart from '../../components/cart/ResumeCart';
import Message from '../../components/message';
import colors from '../../styles/colors';
import { layoutStyle } from '../../styles';

const Cart = () => {
  const [heightResume, setHeightResume] = useState(null);
  const [subTotal, setSubTotal] = useState(null);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    if (subTotal) {
      setTotal(subTotal - discount);
    }
  }, [subTotal, discount]);

  return (
    <>
      <SafeAreaView />
      <View>
        <>
          <ResumeCart
            subTotal={subTotal}
            discount={discount}
            setHeightResume={setHeightResume}
            total={total}
          />

          <KeyboardAwareScrollView>
            <ScrollView>
              <ListCart
                heightResume={heightResume}
                setSubTotal={setSubTotal}
                setDiscount={setDiscount}
                setTotal={setTotal}
                total={total}
              />
              {total === 0 && (
                <Message
                  icon="cart-plus"
                  message="No tienes productos en el carro de compras"
                  colorIcon={colors.warning}
                  color={colors.fourth}
                  bgIcon={colors.white}
                  heightAll
                  messageAction={'Regresar a los productos'}
                  nameToNavigate="home"
                  styleButtonAction={layoutStyle.buttonOutlined}
                  colorButtonAction={colors.primary}
                />
              )}
            </ScrollView>
          </KeyboardAwareScrollView>
        </>
      </View>
    </>
  );
};

export default Cart;
