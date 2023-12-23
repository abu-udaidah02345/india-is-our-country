import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {get} from '../../api/Api';
const Blog = ({navigation}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogData();
  }, []);

  const getBlogData = async () => {
    try {
      // Make an API call using the get function
      const result = await get('/blog');
      setBlogs(result);
      console.log('result data is there', result);
    } catch (error) {
      console.error('API Error:', error.message);
    }
  };

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

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
            source={require('../../../assets/images/back.png')}
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
          Blog
        </Text>
      </View>
      <FlatList
        data={blogs}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  itemContainer: {
    marginHorizontal: 14,
    marginVertical: 10,
    backgroundColor: 'black',
    elevation: 20,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10, // Assuming the image is a circle
    //  marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
    //  marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: 'white',
    marginTop: 2,
  },
});

export default Blog;
