import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ButtonComp = props => {
  const {onRefreshClick} = props;
  return (
    <View>
      <TouchableOpacity onPress={onRefreshClick} style={styles.btnView}>
        <Text style={styles.btnTxt}>REFRESH</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  btnView: {
    backgroundColor: '#BFCFE7',
    borderRadius: 10,
  },
  btnTxt: {
    color: '#525CEB',
    fontWeight: 'bold',
    marginTop: 'auto',
    marginBottom: 'auto',
    padding: 3,
    paddingHorizontal: 10,
    fontSize: 10,
  },
});
