import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import ButtonComp from './ButtonComp';
import { generateToken, getContent } from '../../services/api';
import { getCurrentFormattedDate } from '../getLiveDate';
import ContentView from './ContentView';
import Loader from '../Loader';
import { generateRandomNumericCode } from '../getNumericCode';
import { IAnimeCardProps, IAnimeCardContent } from '../../../modals/types';

const AnimeCard: React.FC<IAnimeCardProps> = (props) => {
  const { navigation, route } = props;
  const contentLoad = route?.params?.contentLoad;

  const [content, setContent] = useState<IAnimeCardContent>(contentLoad ?? null);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const generateTokenCall = async () => {
    let params = {
      email: `hema.saik${generateRandomNumericCode()}@yahoo.com`,
    };
    setIsLoading(true);
    try {
      const response = await generateToken(params);
      if (response.status === 200) {
        const getRes = await getContent(response?.data?.token);
        setContent(getRes.content);
      }
    } catch (error) {
      console.error('Error generating token:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    generateTokenCall();
  }, []);

  const openContent = () => {
    navigation.navigate('AnimeContent', {
      contentLoad: content,
    });
  };

  const Header = () => {
    return (
      <View style={styles.headerView}>
        <View style={styles.subHeaderView}>
          <Text style={styles.subHeaderText}>{getCurrentFormattedDate()}</Text>
        </View>
        <View style={styles.vsView}>
          <Text style={styles.vsText}>Vs</Text>
        </View>
      </View>
    );
  };

  const CardContent = () => {
    return (
      <View style={styles.cardMain}>
        <Image
          resizeMode="cover"
          source={{ uri: content?.mainImage }}
          style={styles.img}
        />
        <ContentView content={content} onRefreshClick={generateTokenCall} loading={false} />
      </View>
    );
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

const styles = StyleSheet.create({
  main: {
    borderRadius: 10,
    flex: 1,
    marginTop: 25,
  },
  headerView: {
    marginHorizontal: 20,
    paddingHorizontal: 5,
    paddingVertical: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  subHeaderView: {
    flexDirection: 'column',
  },
  dateHead: {
    paddingVertical: 2,
  },
  subHeaderText: {
    color: 'black',
  },
  tdy: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Roboto-Regular',
  },
  vsView: {
    backgroundColor: '#D8D9DA',
    borderRadius: 50,
    height: 35,
    width: 35,
    overflow: 'hidden',
  },
  vsText: {
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
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
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

export default AnimeCard;
