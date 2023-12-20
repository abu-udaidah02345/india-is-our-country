import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {get} from '../api/Api';
import YouTube from 'react-native-youtube';
const Video = ({navigation}) => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    getVideoData();
  }, []);

  const getVideoData = async () => {
    try {
      // Make an API call using the get function
      const result = await get('/video/all');
      setVideoData(result);
      console.log(result, 'resul is there....');
    } catch (error) {
      console.error('API Error:', error.message);
    }
  };

  // Function to extract video ID from YouTube URL
  const getVideoIdFromUrl = url => {
    const videoIdRegex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(videoIdRegex);
    return match ? match[1] : null;
  };

  const renderItem = ({item}) => {
    // Assuming item.video is a base64-encoded string
    const decodedURL = `data:video/mp4;base64,${item.video}`;
    console.log(decodedURL, 'DECODE url is tyjere...........');

    return (
      <TouchableOpacity onPress={() => handleItemPress(item)}>
        <View style={styles.itemContainer}>
          <YouTube
            videoId={getVideoIdFromUrl(decodedURL)}
            play // control playback of video with true/false
            fullscreen // control whether the video should play in fullscreen or inline
            loop // control whether the video should loop when ended
            style={{alignSelf: 'stretch', height: 200}}
          />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: '7%',
          backgroundColor: '#232426',
          //   alignItems: 'center',
          //   justifyContent: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/images/back.png')}
            style={{
              width: 30,
              height: 30,
              tintColor: 'white',
              marginLeft: 15,
              marginVertical: 14,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
            fontSize: 14,
            fontWeight: '500',
            textAlign: 'center',
            tintColor: 'white',
            marginTop: 20,
            letterSpacing: 1,
            marginLeft: 55,
          }}>
          Video
        </Text>
      </View>
      <FlatList
        data={videoData}
        keyExtractor={item => item._id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    //padding: 16,
  },
  itemContainer: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  video: {
    fontSize: 14,
    color: 'blue', // You might want to use a Video component here instead of text
  },
});

export default Video;
