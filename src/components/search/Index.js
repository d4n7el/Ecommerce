import React from 'react';
import { View, Text } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { searchBarStyle } from '../../styles';

const Search = () => {
  return (
    <View style={searchBarStyle.searchContainer}>
      <Searchbar placeholder="Busqueda" />
    </View>
  );
};

export default Search;
