import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import ButtonComp from './ButtonComp';

const Footer = ({content, onRefreshClick}) => {
  return (
    <View style={styles.footView}>
      <View>
        <Image style={styles.footImg} source={{uri: content.logo}} />
      </View>
      <View style={styles.caption}>
        <Text style={styles.captionTxt}>{content?.title}</Text>
        <Text style={styles.captionTxt}>{content?.subTitle}</Text>
      </View>
      <View style={styles.button}>
        <ButtonComp onRefreshClick={onRefreshClick} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    paddingVertical: 15,
    backgroundColor: '#D8D9DA',
  },
  footImg: {
    height: 70,
    width: 70,
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  caption: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  captionTxt: {
    textAlign: 'center',
  },
  button: {
    marginVertical: 20,
  },
});

export default Footer;
