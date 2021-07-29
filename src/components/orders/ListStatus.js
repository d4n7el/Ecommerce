import React from 'react';
import { View, Text } from 'react-native';
import CommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { layoutStyle, orderStyle } from '../../styles';
import colors from '../../styles/colors';

const ListStatus = ({ status }) => {
  return (
    <View>
      {status &&
        status.map((state) => {
          return (
            <View
              style={[
                layoutStyle.containerInLine,
                layoutStyle.alignItemsCenter,
                orderStyle.containerListStatus,
              ]}
            >
              <CommunityIcons
                style={orderStyle.iconResumeStatus}
                name="source-commit"
                size={50}
                color={colors.fourth}
              />
              <Text style={orderStyle.statusText}>
                {state.order_state.state}
              </Text>
              <Text style={orderStyle.noteText}>{state.order_state.note}</Text>
              <Text style={orderStyle.dateText}>{state.date}</Text>
            </View>
          );
        })}
    </View>
  );
};

export default ListStatus;
