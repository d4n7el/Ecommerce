import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { UseLogin } from "../../context/login";

const Menu = () => {
  const navigation = useNavigation();
  const { logOut } = UseLogin();
  return (
    <>
      <List.Section>
        <List.Subheader>Mi cuenta</List.Subheader>
        <List.Item
          title="Actualizar perfil"
          description="Cambia la informaciòn de tu usuario"
          left={(props) => <List.Icon {...props} icon="face" />}
          onPress={() => {
            navigation.navigate("update_info");
          }}
        ></List.Item>
        <List.Item
          title="Cambiar tu contraseña"
          description="Cambia la contraseña de tu cuenta"
          left={(props) => <List.Icon {...props} icon="key" />}
          onPress={() => {
            navigation.navigate("change_password");
          }}
        ></List.Item>
        <List.Item
          title="Mis direcciones"
          description="Administra tu listado de direcciones"
          left={(props) => <List.Icon {...props} icon="map" />}
          onPress={() => {
            navigation.navigate("address");
          }}
        ></List.Item>
      </List.Section>
      <List.Section>
        <List.Subheader>App</List.Subheader>
        <List.Item
          title="Metodos de pago"
          description="Administra tus metodos de pago"
          left={(props) => (
            <List.Icon {...props} icon="credit-card-check-outline" />
          )}
          onPress={() => {
            navigation.navigate("payment_methods");
          }}
        ></List.Item>
        <List.Item
          title="Carrito de compras"
          description="lista de productos en tu carrito de compras"
          left={(props) => <List.Icon {...props} icon="cart-outline" />}
          onPress={() => {
            navigation.navigate("cart");
          }}
        ></List.Item>
        <List.Item
          title="Pedidos"
          description="Administra tu lista de pedidos"
          left={(props) => <List.Icon {...props} icon="clipboard-list" />}
          onPress={() => navigation.navigate("orders")}
        ></List.Item>
        <List.Item
          title="Favoritos"
          description="Administra tu lista de favoritos"
          left={(props) => <List.Icon {...props} icon="heart" />}
          onPress={() => {
            navigation.navigate("favorites");
          }}
        ></List.Item>
        <List.Item
          title="Cerrar Sesion"
          description="Cierra la sesion actual"
          left={(props) => <List.Icon {...props} icon="logout" />}
          onPress={() => {
            logOut();
          }}
        ></List.Item>
      </List.Section>
    </>
  );
};

export default Menu;
