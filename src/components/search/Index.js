import React, { useState, useEffect } from "react";
import { View, Keyboard, Animated } from "react-native";
import { Searchbar } from "react-native-paper";
import { searchBarStyle } from "../../styles";
import {
  AnimateIcon,
  inputAnimatedWidth,
  inputAnimation,
  animatedTransition,
  animateTranssitionReset,
  arrowLeftAnimation,
  arrowLeftAnimationC0lor,
} from "./AnimationSearch";
import { useNavigation, useRoute } from "@react-navigation/native";
import SearchHistory from "./SearchHistory";
import { updateSearchHistory } from "../../api/search";

const Search = () => {
  const [heightSearch, setHeightSearcch] = useState();
  const [search, setSearch] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const navigation = useNavigation();
  const { name } = useRoute();

  const openSearch = () => {
    setShowHistory(true);
    animatedTransition.start();
  };

  const closeSearch = () => {
    setShowHistory(false);
    animateTranssitionReset.start();
    setSearch("");
    Keyboard.dismiss();
  };

  const onSearch = async (reUseSearch = null) => {
    await updateSearchHistory(
      typeof reUseSearch === "string" ? reUseSearch : search
    );
    setSearch("");
    if (name === "search") {
      navigation.push("search", {
        search: typeof reUseSearch === "string" ? reUseSearch : search,
      });
    } else {
      navigation.navigate("search", {
        search: typeof reUseSearch === "string" ? reUseSearch : search,
      });
    }
  };

  return (
    <Animated.View style={[searchBarStyle.searchContainer]}>
      <View
        style={searchBarStyle.alignLeft}
        onLayout={(e) => {
          setHeightSearcch(e.nativeEvent.layout.height + 10);
        }}
      >
        <AnimateIcon
          name={"arrow-left"}
          size={20}
          style={[searchBarStyle.backArrow, arrowLeftAnimation]}
          onPress={closeSearch}
        />
        <Animated.View style={[inputAnimation, { width: inputAnimatedWidth }]}>
          <Searchbar
            placeholder="Busqueda"
            inputStyle={searchBarStyle.inputStyle}
            style={searchBarStyle.search}
            onFocus={openSearch}
            onSubmitEditing={onSearch}
            onChangeText={(text) => {
              setSearch(text);
            }}
            value={search}
          />
        </Animated.View>
      </View>
      <SearchHistory
        showHistory={showHistory}
        heightSearch={heightSearch}
        onSearch={onSearch}
      />
    </Animated.View>
  );
};

export default Search;
