import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../components/CustomButton';
const screenWidth = Dimensions.get('window').width;
const Slider = ({data}) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({
          index: (currentIndex + 1) % data.length,
          animated: true,
        });
        setCurrentIndex(prevIndex => (prevIndex + 1) % data.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [data.length, currentIndex]);

  const renderDot = index => {
    return (
      <TouchableOpacity
        key={index}
        style={[
          styles.dot,
          {backgroundColor: index === currentIndex ? 'blue' : 'gray'},
        ]}
        onPress={() => {
          flatListRef.current.scrollToIndex({
            index,
            animated: true,
          });
          setCurrentIndex(index);
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={event => {
          const newIndex = Math.round(
            event.nativeEvent.contentOffset.x / screenWidth,
          );
          setCurrentIndex(newIndex);
        }}
        renderItem={({item}) => (
          <View style={styles.slideContainer}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: '500',
                marginTop: 10,
              }}>
              {item.description}
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: '500',
                marginTop: 10,
              }}>
              {currentIndex + 1}/{data.length}
            </Text>
          </View>
        )}
      />
      {/* <View style={styles.dotsContainer}>
        {data.map((_, index) => renderDot(index))}
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // position: 'relative',
    // paddingHorizontal: 18,
  },
  // ...
  slideContainer: {
    width: screenWidth, // Set width to the screen width
    paddingHorizontal: 18,
    backgroundColor: '#6E77F6',
    elevation: 20,

    height: 40,

    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,

    elevation: 5, // Add elevation for Android shadow
    shadowColor: '#000', // iOS shadow color
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  // ...

  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
});

export default Slider;
