import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../components/CustomButton';

const Slider = ({data}) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const screenWidth = Dimensions.get('window').width;

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
            <Image source={item.image} style={styles.image} />
          </View>
        )}
      />
      <View style={styles.dotsContainer}>
        {data.map((_, index) => renderDot(index))}
      </View>
      <View style={{alignSelf: 'center'}}>
        <CustomButton
          onPress={() => navigation.navigate('Signup')}
          title="DONATE NOW"
          color="#6E77F6"
          width={380}
          height={70}
          marginTop={-20} // Set the marginTop value as needed
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  slideContainer: {
    width: Dimensions.get('window').width,
  },
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
