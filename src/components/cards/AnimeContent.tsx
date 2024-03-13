import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Footer from './Footer';
import DetailsView from './DetailsView';
import ContentView from './ContentView';
import {generateToken, getContent} from '../../services/api';
import Loader from '../Loader';
import ShareCard from '../ShareCard';
import {generateRandomNumericCode} from '../getNumericCode';
import { IAnimeContentProps } from '../../../modals/types';

const AnimeContent:React.FC<IAnimeContentProps> = ({navigation, route}) => {
  const {
    params: {contentLoad},
  } = route;

  const [content, setContent] = useState(contentLoad);
  const [isLoading, setIsLoading] = useState(false);
  const {width} = useWindowDimensions();

  /**
   * The function `generateTokenCall` generates a token using the email 'hema.saik@yahoo.com', retrieves
   * content using the generated token, logs the content, and sets the content.
   * @returns The response from the generateTokenCall function is being returned.
   */
  const generateTokenCall = async () => {
    let params = {
      email: `hema.saik${generateRandomNumericCode()}@yahoo.com`,
    };
    setIsLoading(true);
    let response = await generateToken(params);
    if (response.status == 200) {
      let getRes = await getContent(response?.data?.token);
      setContent(getRes.content);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
    return response;
  };

  return (
    <View style={styles.container}>
      {!isLoading ? (
        <ScrollView>
          <ImageBackground
            resizeMethod="resize"
            style={styles.backgroundImage}
            source={{
              uri: content.mainImage,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AnimeCard')}
              style={styles.closeView}>
              <Ionicons name="close" style={styles.close} />
            </TouchableOpacity>
            <View style={styles.overlay}>
              <View>
                <View style={styles.closeHead}>
                  <Text style={styles.update}>MAJOR UPDATE</Text>
                </View>
                <Text style={styles.text}>Only I can Call my dream stupid</Text>
              </View>
            </View>
          </ImageBackground>
          <ContentView
            loading={isLoading}
            content={content}
            onRefreshClick={generateTokenCall}
          />
          <View
            style={[
              styles.divider,
              Platform.OS === 'android'
                ? styles.androidShadow
                : styles.iosShadow,
            ]}
          />
          <DetailsView content={content} width={width} />
          <Footer content={content} onRefreshClick={generateTokenCall} />
          <ShareCard />
        </ScrollView>
      ) : (
        <Loader />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
    resizeMode: 'center',
  },
  overlay: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 35,
    marginHorizontal: 15,
  },
  logoImg: {
    height: 40,
    width: 40,
    borderRadius: 5,
  },
  update: {
    color: '#D8D9DA',
    marginHorizontal: 15,
    opacity: 0.8,
  },

  close: {
    marginRight: 'auto',
    marginLeft: 'auto',
    fontWeight: 'bold',
    color: '#423F3E',
    fontFamily: 'Roboto-Regular',
    fontSize: 23,
  },
  closeHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  closeView: {
    borderRadius: 50,
    height: 23,
    width: 23,
    overflow: 'hidden',
    marginLeft: 'auto',
    top: 10,
    right: 10,
    backgroundColor: '#B2B2B2',
  },
  detailView: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  divider: {
    borderBottomWidth: 0.17,
  },
  androidShadow: {
    elevation: 3,
  },
  iosShadow: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  detailHead: {
    fontWeight: '900',
    fontSize: 16,
    color: 'black',
  },
  info: {
    color: '#444444',
  },
});

export default AnimeContent;
