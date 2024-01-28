import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import ButtonComp from './ButtonComp';
import axios from 'axios';
import {generateToken, getContent} from '../../services/api';
import {getCurrentFormattedDate} from '../getLiveDate';
import ContentView from './ContentView';
import Loader from '../Loader';
import {generateRandomNumericCode} from '../getNumericCode';

const AnimeCard = props => {
  const {navigation} = props;
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * The function `generateTokenCall` generates a token using the email 'hema.saik@yahoo.com', and then
   * retrieves content using the generated token.
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

  useEffect(() => {
    generateTokenCall();
  }, []);
  /**
   * The Header function returns a view with two subviews, one displaying the date and the other
   * displaying the text "Vs".
   * @returns The Header component is returning a View component with nested View and Text components.
   */
  const Header = () => {
    return (
      <View style={styles.hederView}>
        <View style={styles.subHead1}>
          <View style={styles.dateHead}>
            <Text style={styles.subHeadTxt}>{getCurrentFormattedDate()}</Text>
          </View>
          <View style={styles.dateHead}>
            <Text style={styles.tdy}>TODAY</Text>
          </View>
        </View>
        <View style={styles.vs}>
          <Text style={styles.vsTxt}>Vs</Text>
        </View>
      </View>
    );
  };

  /**
   * The `CardContent` function returns a view with an image, caption, and a refresh button.
   * @returns The CardContent component is returning a View component that contains an Image component, a
   * View component, and a TouchableOpacity component.
   */
  const CardContent = () => {
    return (
      <View style={styles.cardMain}>
        <Image
          resizeMode="cover"
          source={{uri: content?.mainImage}}
          style={styles.img}
        />
        <ContentView content={content} onRefreshClick={generateTokenCall} />
      </View>
    );
  };

  /**
   * The openContent function navigates to the 'AnimeContent' screen.
   */
  const openContent = () => {
    navigation.navigate('AnimeContent', {
      contentLoad: content,
    });
  };

  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={openContent}>
        <Header />
        {!isLoading ? <CardContent /> : <Loader />}
      </TouchableOpacity>
    </View>
  );
};

export default AnimeCard;

const styles = StyleSheet.create({
  main: {
    borderRadius: 10,
    flex: 1,
    marginTop: 25,
  },
  hederView: {
    marginHorizontal: 20,
    paddingHorizontal: 5,
    paddingVertical: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  subHead1: {
    flexDirection: 'column',
  },
  dateHead: {
    paddingVertical: 2,
  },
  subHeadTxt: {
    color: 'black',
  },
  tdy: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Roboto-Regular',
  },
  vs: {
    backgroundColor: '#D8D9DA',
    borderRadius: 50,
    height: 35,
    width: 35,
    overflow: 'hidden',
  },
  vsTxt: {
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Regular',
  },
  contentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 'auto',
    marginBottom: 20,
    marginHorizontal: 10,
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
    height: 45,
    width: 45,
    borderRadius: 10,
  },
  capView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  cardMain: {
    backgroundColor: '#fff',
    marginHorizontal: 25,
    borderRadius: 25,
    height: '70%',
    overflow: 'hidden', // Clip the content inside the card
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginVertical: 10,
  },
  textContainer: {
    flex: 1,
  },
  subtitleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  subTitle: {
    fontSize: 10,
    margin: 0,
  },
});
