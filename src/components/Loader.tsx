import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Loader:React.FC = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

export default Loader;

export const styles = StyleSheet.create({
  loader: {
    flex: 1,
    marginBottom: 'auto',
    marginTop: 'auto',
  },
});
