import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import {
  Animated,
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Touchable,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableRipple } from "react-native-paper";

const { width, height } = Dimensions.get("screen");
const ITEM_WIDTH = width * 0.90;
const ITEM_HEIGHT = ITEM_WIDTH * 1.2;

const images = [
  "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=800&q=80",
  "https://images.unsplash.com/photo-1562569633-622303bafef5?w=800&q=80",
  "https://images.unsplash.com/photo-1503656142023-618e7d1f435a?w=800&q=80",
  "https://images.unsplash.com/photo-1555096462-c1c5eb4e4d64?w=800&q=80",
  "https://images.unsplash.com/photo-1517957754642-2870518e16f8?w=800&q=80",
  "https://images.unsplash.com/photo-1546484959-f9a381d1330d?w=800&q=80",
  "https://images.unsplash.com/photo-1548761208-b7896a6ff225?w=800&q=80",
  "https://images.unsplash.com/photo-1511208687438-2c5a5abb810c?w=800&q=80",
  "https://images.unsplash.com/photo-1548614606-52b4451f994b?w=800&q=80",
  "https://images.unsplash.com/photo-1548600916-dc8492f8e845?w=800&q=80",
];
const data = images.map((image, index) => ({
  key: String(index),
  photo: image,
  avatar_url: `https://randomuser.me/api/portraits/women/${Math.floor(
    Math.random() * 40
  )}.jpg`,
}));

export const Events = ({}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  return (
    <>
      <Text style={{ fontSize: 23, marginHorizontal: 20, marginTop: 5 }}>
        Top Events of the Week
      </Text>
      <View style={styles.container}>
        <Animated.FlatList
          data={data}
          keyExtractor={(item) => item.key}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          renderItem={({ item, index }) => {
            const inputRange = [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ];
            const translateX = scrollX.interpolate({
              inputRange,
              outputRange: [-width * 0.9, 0, width * 0.9],
            });
            return (
              <EventCard
                scrollX={scrollX}
                navigation={navigation}
                item={item}
                translateX={translateX}
              />
            );
          }}
        />
      </View>
    </>
  );
};

const NavigateEvent = (navigation) => {
  navigation.navigate("EventDetails");
};

export const EventCard = ({ scrollX, item, translateX, navigation }) => {
  return (
    <Pressable
      onPress={() => NavigateEvent(navigation)}
      style={{ width, justifyContent: "center", alignItems: "center" }}
      rippleColor="rgba(0, 0, 0, .32)"
    >
      <View
        style={{
          width: ITEM_WIDTH,
          height: ITEM_HEIGHT,
          overflow: "hidden",
          borderRadius: 10,
          margin: 10,
        //   marginLeft:50
        }}
      >
        
        <Animated.Image
          style={{
            width: ITEM_WIDTH * 1.4,
            height: ITEM_HEIGHT,
            resizeMode: "cover",
            transform: [{ translateX }],
          }}
          source={{ uri: item.photo }}
        ></Animated.Image>
        <LinearGradient
          colors={["transparent", "transparent", "rgba(0,0,0,0.8)"]}
          style={{ height: "100%", width: "100%", position: "absolute" }}
        >
          {/* <View> */}
          <Image
            style={{
              width: 100,
              height: 100,
              resizeMode: "cover",
              borderRadius: 100,
              position: "absolute",
              bottom: 60,
              left: "35%",
              alignItems: "center",
              justifyContent: "center",
              borderColor:"white",
              borderWidth:2,
            }}
            source={{ uri: item.photo }}
          ></Image>
          <Text
            style={{
              position: "absolute",
              bottom: 25,
              left: "33%",
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
            }}
          >
            Hare Krishna
          </Text>
          <Text
            style={{
              position: "absolute",
              bottom: 10,
              left: "33%",
              fontWeight: "bold",
              fontSize: 15,
              color: "white",
            }}
          >
            Hare Krishna
          </Text>
          {/* </View> */}
        </LinearGradient>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
