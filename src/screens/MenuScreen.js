import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const MenuScreen = () => {
  const data = [
    {key: '1', image: require('../../assets/images/save.png')},
    {key: '2', image: require('../../assets/images/save.png')},
    // Add more items as needed
  ];

  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scrollX, {
      toValue: data.length - 1,
      duration: 5000, // Set the duration for one cycle (5 seconds in this example)
      useNativeDriver: false,
      isInteraction: false,
    }).start(() => {
      scrollX.setValue(0);
    });
  }, [scrollX, data.length]);

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  const dotPosition = Animated.divide(scrollX, Dimensions.get('window').width);

  return (
    <View style={styles.container}>
      <View style={{marginTop: -10}}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.key}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={16}
        />
      </View>

      <View style={styles.dotsContainer}>
        {data.map((_, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          return (
            <TouchableOpacity key={index} onPress={() => {}}>
              <Animated.View style={[styles.dot, {opacity}]} />
            </TouchableOpacity>
          );
        })}
      </View>

      <Text
        style={{
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
          paddingHorizontal: 15,
          marginTop: 20,
        }}>
        Understand Our Process
      </Text>
      <View
        style={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: '#6E77F6',
          elevation: 4,
          width: '100%',
          height: '52%',
          marginTop: 40,
        }}></View>

      {/* <Text>Understand Our Process</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  item: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 280,
    backgroundColor: 'black',
    resizeMode: 'cover',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: 20,
    //top: 280,
    //   position: 'absolute',

    width: '100%',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#6E77F6', // Change color as needed
    margin: 8,
  },
});

export default MenuScreen;
