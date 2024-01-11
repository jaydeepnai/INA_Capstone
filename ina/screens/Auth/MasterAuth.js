import * as React from "react";
import { View, StyleSheet, Modal, Text, Pressable, Alert } from "react-native";
import { Button } from "react-native-paper";

const MasterAuth = ({ navigation }) => {

  
  const navigateToAuth = (screenName) => {
    navigation.navigate(screenName);
  };

  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    // <BottomSheetModalProvider>
    <>
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
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
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
        </Modal>
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            onPress={() => navigateToAuth("LoginAuth")}
            style={styles.fullWidthButton}
          >
            Login
          </Button>
          <Button
            mode="contained"
            onPress={
              () => setModalVisible(true)
            }
            style={styles.fullWidthButton}
          >
            Register
          </Button>
        </View>
      </View>
    </>
    // </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
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
    alignItems: "center",
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
  },
});

export default MasterAuth;
