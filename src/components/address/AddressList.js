import React from "react";
import { View, Text } from "react-native";
import { layoutStyle, theme } from "../../styles";
import { Avatar, Card, IconButton } from "react-native-paper";
import colors from "../../styles/colors";
import { useNavigation } from "@react-navigation/native";

const AddressList = ({ addresses }) => {
  const navigation = useNavigation();
  return (
    <View style={layoutStyle.containerCenter}>
      <Text style={layoutStyle.title}>listado de direcciones</Text>
      {addresses && (
        <View style={[layoutStyle.containerCenter, layoutStyle.padding5]}>
          {addresses.map((address) => {
            return (
              <Card.Title
                key={address._id}
                title={address.title}
                subtitle={address.last_name}
                style={layoutStyle.containerCenter}
                left={(props) => (
                  <Avatar.Icon
                    theme={theme}
                    {...props}
                    icon="map-marker-check-outline"
                  />
                )}
                right={(props) => (
                  <IconButton
                    {...props}
                    icon="marker"
                    color={colors.third}
                    onPress={() => {
                      navigation.navigate("addAddress", {
                        idAddress: address._id,
                      });
                    }}
                  />
                )}
              />
            );
          })}
        </View>
      )}
    </View>
  );
};

export default AddressList;
