import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Blog = ({navigation}) => {
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
      <Text>Blog</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default Blog;
