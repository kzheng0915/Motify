import React from "react";
import {View, FlatList, StyleSheet, Text} from 'react-native';
import ChallengeComponent from "./ChallengeComponent";

function DisplayChallenges({challenges, onClick}){

  function renderItem({item}){
    return <ChallengeComponent challenge={item} onClick={onClick}/>
  }

  return (
    <View style={styles.screen}>
      <FlatList data={challenges}
              renderItem={renderItem}
              style={styles.flatListContainer}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.challengeContentContainer} />
    </View>
  )
}

export default DisplayChallenges;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  flatListContainer: {
    flexGrow: 1,
  },
  challengeContentContainer: {
    flexGrow: 1,
  },
});