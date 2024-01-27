import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ShareCard = () => {
  return (
    <View style={styles.shareView}>
      <View style={styles.shareBtn}>
        <Ionicons name="share-outline" style={styles.share} />
        <Text style={styles.shareTxt}>Share Content</Text>
      </View>
    </View>
  );
};

export default ShareCard;

const styles = StyleSheet.create({
  shareView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 45,
  },
  shareBtn: {
    backgroundColor: '#D8D9DA',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  share: {
    fontSize: 20,
    marginHorizontal: 10,
    color: '#4E4FEB',
  },
  shareTxt: {
    fontSize: 14,
    color: '#4E4FEB',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontWeight: '900',
  },
});
