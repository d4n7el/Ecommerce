import React, { useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { layoutStyle, searchBarStyle } from "../../styles";
import { getSearchHistory, deleteSearchHistory } from "../../api/search";
import { useFocusEffect } from "@react-navigation/native";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import colors from "../../styles/colors";

const SearchHistory = ({ showHistory, heightSearch, onSearch }) => {
  const [dataHistory, setDataHistory] = useState([]);

  const getHistory = async () => {
    const response = await getSearchHistory();
    setDataHistory(response);
  };

  const deleteHistory = async (search) => {
    await deleteSearchHistory(search);
    await getHistory();
  };

  useFocusEffect(
    useCallback(() => {
      (async () => {
        getHistory();
      })();
    }, [])
  );

  return (
    <View
      style={[
        !showHistory ? layoutStyle.hidden : searchBarStyle.showHistory,
        { top: heightSearch },
      ]}
    >
      {dataHistory && (
        <View>
          {dataHistory.map((history, index) => {
            return (
              <View
                key={`${history}_${index}`}
                style={[layoutStyle.centerInLineBetWeenBase]}
              >
                <Text
                  style={searchBarStyle.historyItemText}
                  onPress={() => {
                    onSearch(history.search);
                  }}
                >
                  {history.search}
                </Text>
                <Text style={searchBarStyle.historyItemIcon}>
                  <AwesomeIcon
                    name={"trash"}
                    size={20}
                    color={colors.warning}
                    onPress={() => {
                      deleteHistory(history.search);
                    }}
                  />
                </Text>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default SearchHistory;
