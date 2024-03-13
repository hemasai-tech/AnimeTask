import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ButtonComp from './ButtonComp';import { IContentViewProps } from '../../../modals/types';

const ContentView: React.FC<IContentViewProps> = ({content, onRefreshClick, loading}) => {
  return (
    <View style={styles.contentView}>
      <View style={styles.capView}>
        <View style={styles.capImg}>
          <Image source={{uri: content?.logo}} style={styles.logoImg} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.contentTxt}>{content?.title}</Text>
          <View>
            <Text numberOfLines={1} style={styles.subTitle}>
              {content?.subTitle?.slice(0, 20)}
            </Text>
            <Text style={styles.subTitle} numberOfLines={1}>
              {content?.subTitle?.slice(20)}
            </Text>
          </View>
        </View>
      </View>
      <ButtonComp onRefreshClick={onRefreshClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  contentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 20,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  contentTxt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  capImg: {
    marginHorizontal: 10,
  },
  logoImg: {
    height: 40,
    width: 40,
    borderRadius: 5,
  },
  capView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTitle: {
    fontSize: 10,
    margin: 0,
  },
  textContainer: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});
export default ContentView;
