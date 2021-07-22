import * as React from "react";
import { Animated, Dimensions, Image, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import colors from "../../styles/colors";
import { layoutStyle } from "../../styles";

const { width } = Dimensions.get("screen");
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 0.8;

const CarouselCard = ({ cards }) => {
  const data = cards.map((card, index) => ({
    key: String(index),
    view: card.view,
  }));
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={[styles.container, layoutStyle.center]}>
      <Animated.FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        keyExtractor={(item) => item.key}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: width,
                justifyContent: "center",
                alignItems: "center",
                padding: 0,
                paddingBottom: 10,
                paddingTop: 10,
              }}
            >
              <View
                style={{
                  borderRadius: 18,
                  shadowColor: colors.applicationBackground,
                  shadowOpacity: 0.9,
                  shadowRadius: 30,
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  borderRadius: 18,
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    borderRadius: 14,
                  }}
                >
                  {item.view}
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CarouselCard;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: colors.applicationBackground,
    alignItems: "center",
    justifyContent: "center",
  },
});
