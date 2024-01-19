import * as React from "react";
import { StyleSheet, Modal, Pressable, Alert } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView, View, ScrollView, Image, Text } from "react-native";

export default MasterAuth = ({ navigation }) => {

  
  const navigateToAuth = (screenName) => {
    navigation.navigate(screenName);
  };

  const [modalVisible, setModalVisible] = React.useState(false);


  return (
    <View style={styles.container}>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
     
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={[styles.centeredView]}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Please Select a Registration Type</Text>
          <View style={{flexDirection:"row",justifyContent:"space-between"}}>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => { setModalVisible(!modalVisible); navigation.navigate("UserRegisterAuth")}}
            >
            <Text style={styles.textStyle}>User</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {setModalVisible(!modalVisible); navigation.navigate("NGORegisterAuth")}}
            // onPress={() =>}
          >
            <Text style={styles.textStyle}>NGO</Text>
          </Pressable>
          </View>
        </View>
      </View>
    </Modal>
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
    >
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        <Image
          source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
          resizeMode={"stretch"}
          style={{
            height: 208,
            marginTop: 105,
            marginHorizontal: 100,
          }}
        />
        <View style={{marginTop:150}}>
        <Text
          style={{
            marginHorizontal: 45,
            fontSize: 25,
            marginBottom:20
          }}
        >
          {"Together \nWe Make a Difference."}
        </Text>
        <Text
          style={{
            marginHorizontal: 45,
            fontSize: 20,
            marginVertical:20,
            textAlign: "center"
          }}
        >
          {"Let's Continue with "}
        </Text>
        <Button
          style={{
            backgroundColor: "#74e3d1",
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          mode="contained"
          onPress={() => navigateToAuth("LoginAuth")}
        >
          Login
        </Button>
        <Text
          style={{
            marginHorizontal: 45,
            fontSize: 20,
            marginVertical:5,
            textAlign: "center"
          }}
        >
          or
        </Text>
        <Button
          style={{
            backgroundColor: "#74e3d1",
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          mode="contained"
            onPress={
              () => setModalVisible(true)
            } 
        >
          Register
        </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  fullWidthButton: {
    flex: 1,
    margin: 8, // Add margin as needed
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    flexDirection:"column",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    backgroundColor:"#c9c9c9",
    width:"100%",
    alignItems: "center",
    flexDirection:"column",
    bottom:-35,
    position:"absolute",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width:"50%",
    marginLeft:10
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
  },
});

// export default MasterAuth;
