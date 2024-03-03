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
  { image: "https://images.unsplash.com/photo-1535090042247-30387644aec5?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", logo: "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", ngoName: "Agriation Drive", eventName: "" },
  { image: "https://plus.unsplash.com/premium_photo-1683135024497-dc3398592783?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", logo: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", ngoName: "Food-Feastival", eventName: "" },
  { image: "https://plus.unsplash.com/premium_photo-1683140516842-74c378a43d76?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", logo: "https://images.unsplash.com/photo-1584473457406-6240486418e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", ngoName: "Irving Cares", eventName: "Irving Cares" },
  { image: "https://images.unsplash.com/photo-1555096462-c1c5eb4e4d64?w=800&q=80", logo: "https://images.unsplash.com/photo-1555169062-013468b47731?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", ngoName: "Animal Wellfare", eventName: "" },
  { image: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", logo: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", ngoName: "MediAid Fest", eventName: "" },
  { image: "https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", logo: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", ngoName: "Books-Bash", eventName: "" },
]

const data = images.map((image, index) => ({
  key: String(index),
  photo: image.image,
  logo: image.logo,
  ngoName: image.ngoName,
  eventName: image.eventName,
  // avatar_url: `https://randomuser.me/api/portraits/women/${Math.floor(
  //   Math.random() * 40
  // )}.jpg`,
}));

export const Events = ({ }) => {
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
              borderColor: "white",
              borderWidth: 2,
            }}
            source={{ uri: item.logo }}
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
            {item.ngoName}
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
            {/* Hare Krishna */}
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
