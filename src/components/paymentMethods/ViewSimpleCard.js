import React from 'react';
import { View, Text, Image } from 'react-native';
import { IMAGES_CARDS } from '../../utils/const';
import { cardStyle, layoutStyle } from '../../styles';

const ViewSimpleCard = ({ last4, name, brand }) => {
  const nameFile = brand.toLowerCase().replace(' ', '');
  return (
    <View style={[cardStyle.viewcardSimple, layoutStyle.shadowDefault]}>
      <View>
        <Image
          source={IMAGES_CARDS[nameFile]}
          resizeMode="contain"
          style={cardStyle.imageCardSimple}
        ></Image>
      </View>

      <View style={[cardStyle.infoSelectCard, layoutStyle.containerInLine]}>
        <Text style={cardStyle.textInfo}>Metodo de pago: </Text>
        <Text
          style={[cardStyle.textInfo, cardStyle.textLast4, layoutStyle.bold]}
        >
          {last4}-{name}
        </Text>
      </View>
    </View>
  );
};

export default ViewSimpleCard;
