import React from 'react';
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

// constants
import images from '../components/images';
import {COLORS, FONTS, SIZES} from '../components/theme';
import CustomButton from '../components/CustomButton';
const {onboarding1} = images;

const onBoardings = [
  {
    title: "Let's Travelling",
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    img: onboarding1,
  },
  {
    title: 'Navigation',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    img: onboarding1,
  },
  {
    title: 'Destination',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    img: onboarding1,
  },
];

const OnBoarding = ({navigation}) => {
  const [completed, setCompleted] = React.useState(false);

  const scrollX = new Animated.Value(0);

  React.useEffect(() => {
    scrollX.addListener(({value}) => {
      if (Math.floor(value / SIZES.width) === onBoardings.length - 1) {
        setCompleted(true);
      }
    });

    return () => scrollX.removeListener();
  }, []);

  // Render

  function renderContent() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}>
        {onBoardings.map((item, index) => (
          <View
            //center
            //bottom
            key={`img-${index}`}
            style={styles.imageAndTextContainer}>
            <View
              style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={item.img}
                resizeMode="contain"
                style={{
                  width: '80%',
                  height: '100%',
                  bottom: '3%',
                  //  marginBottom: 100,
                }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                //    bottom: '10%',
                top: '15%',
                left: 40,
                right: 40,
              }}>
              <Text
                style={{
                  ...FONTS.h1,
                  color: COLORS.gray,
                  textAlign: 'center',
                }}>
                {item.title}
              </Text>
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: '20%',
                //  top: '10%',
                left: 40,
                right: 40,
              }}>
              <Text
                style={{
                  ...FONTS.body3,
                  textAlign: 'center',
                  marginTop: SIZES.base,
                  color: COLORS.gray,
                }}>
                {item.description}
              </Text>
            </View>

            {/* Button */}
            {/* <TouchableOpacity
              style={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                width: 150,
                height: 60,
                paddingLeft: 20,
                justifyContent: 'center',
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 0,
                borderTopRightRadius: 0,
                backgroundColor: COLORS.blue,
              }}
              onPress={() => {
                console.log('Button on pressed');
              }}>
              <Text style={{...FONTS.h1, color: COLORS.white}}>
                {completed ? "Let's Go" : 'Skip'}
              </Text>
            </TouchableOpacity> */}
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  function renderDots() {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View style={styles.dotsContainer}>
        {onBoardings.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 12, 10],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={[styles.dot, {width: dotSize, height: dotSize}]}
            />
          );
        })}
      </View>
    );
  }
  const handleButtonPress = () => {
    // Your button press logic here
    console.log('Button Pressed!');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>{renderContent()}</View>
      <View style={styles.dotsRootContainer}>{renderDots()}</View>
      <View style={styles.buttonContainer}>
        <CustomButton
          onPress={() => navigation.navigate('Login')}
          title="Sign In"
          color="#3F3E3E"
          width={152}
          height={58}
        />
        <CustomButton
          onPress={() => navigation.navigate('Signup')}
          title="Register"
          color="#6E77F6"
          width={164}
          height={58}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  imageAndTextContainer: {
    width: SIZES.width,
  },
  dotsRootContainer: {
    position: 'absolute',
    bottom: SIZES.height > 700 ? '8%' : '14%',
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SIZES.padding / 2,
    marginBottom: SIZES.padding * 3,
    height: SIZES.padding,
  },
  dot: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.blue,
    marginHorizontal: SIZES.radius / 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: '20%',
    // marginTop: 20,
  },
});

export default OnBoarding;
