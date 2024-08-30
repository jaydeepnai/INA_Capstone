import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Text, StatusBar, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Base_Color } from "../../../lib/React Query/variables";
import { getFontSize, responsiveMargin } from "../../../lib/Validation/RelativeValues";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";

const Search = ({ navigation }) => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const ratings = [5, 4, 3, 2, 1];
  const [selectedFilters, setSelectedFilters] = useState([]);

  const onSelectRating = (rating) => {
    setSelectedRating(rating);
  };

  const toggleCategory = (category) => {
    const isSelected = selectedCategories.includes(category);
    if (isSelected) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
      setSelectedFilters(selectedFilters.filter((filter) => filter !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
      setSelectedFilters([...selectedFilters, category]);
    }
  };

  const removeFilter = (filter) => {
    setSelectedFilters(selectedFilters.filter((f) => f !== filter));
    setSelectedCategories(selectedCategories.filter((cat) => cat !== filter));
  };

  const ngos = [
        { id: 1, name: "Animal", image: "https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 2, name: "Education", image: "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 3, name: "Poverty", image: "https://images.pexels.com/photos/8078366/pexels-photo-8078366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 4, name: "Child Warefare", image: "https://images.pexels.com/photos/17756695/pexels-photo-17756695/free-photo-of-boy-with-cotton-candy-in-town.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 5, name: "Human Rights", image: "https://images.pexels.com/photos/5935752/pexels-photo-5935752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 6, name: "Refugee and Migrant", image: "https://images.pexels.com/photos/4959222/pexels-photo-4959222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        // { id: 7, name: "Disability Rights", image: "https://images.pexels.com/photos/19254446/pexels-photo-19254446/free-photo-of-couple-embracing-by-river-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        // { id: 8, name: "Health and Medical", image: "https://images.pexels.com/photos/19254446/pexels-photo-19254446/free-photo-of-couple-embracing-by-river-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        // { id: 9, name: "Rural Development", image: "https://images.pexels.com/photos/19254446/pexels-photo-19254446/free-photo-of-couple-embracing-by-river-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        // { id: 10, name: "Disaster Relief", image: "https://images.pexels.com/photos/19254446/pexels-photo-19254446/free-photo-of-couple-embracing-by-river-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      ];

  return (
    <>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <ScrollView style={{ flex: 1, backgroundColor: "white", paddingTop: 20, paddingBottom: 45, marginTop: 20 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10, marginHorizontal: 21 }}>
            <View style={{ width: "85%", flexDirection: "row", alignItems: "center", backgroundColor: "#F5F5F5", borderRadius: 10, padding: 11 }}>
              <FontAwesome name="search" size={24} color="black" />
              <Text style={{ color: "gray", fontSize: 15, flex: 1, marginLeft: 10 }}>{"Search for Requirements"}</Text>
            </View>
            <View style={{ width: 30 }}>
              <Ionicons name="filter" size={24} color="black" />
              <View style={{ position: "absolute", top: -7, backgroundColor: Base_Color, borderRadius: 50, justifyContent: "center", alignContent: "center", right: -6, width: 18, height: 18 }}>
                <Text style={{ textAlign: "center" }}>{selectedCategories.length}</Text>
              </View>
            </View>
          </View>

          <Text style={{ fontSize: 20, marginBottom: 10, marginHorizontal: 30 }}>{"Select Ratings"}</Text>

          <View style={{ marginBottom: 10, marginHorizontal: 10 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#FFFFFF", paddingVertical: 2, paddingHorizontal: 13 }}>
                {ratings.map((rating, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => onSelectRating(rating)}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      backgroundColor: selectedRating === rating ? Base_Color : "transparent",
                      borderRadius: 15,
                      paddingVertical: 5,
                      paddingHorizontal: 5,
                      marginRight: 10,
                    }}
                  >
                    <AntDesign name="star" size={20} color={selectedRating === rating ? "white" : "black"} />
                    <Text style={{ color: selectedRating === rating ? "white" : "black", fontSize: 20, marginLeft: 5, paddingHorizontal: responsiveMargin(2) }}>{rating}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>

          <Text style={{ fontSize: 20, marginBottom: 10, marginHorizontal: 30 }}>{"Popular Categories"}</Text>
          <View style={{ marginBottom: 10, marginHorizontal: 10 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {ngos.map((ngo) => (
                <TouchableOpacity
                  key={ngo.id}
                  onPress={() => toggleCategory(ngo.name)}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: selectedCategories.includes(ngo.name) ? Base_Color : "#FFFFFF",
                    borderRadius: 15,
                    paddingVertical: 5,
                    paddingHorizontal: responsiveMargin(5),
                    marginBottom: 10,
                    marginRight: 10, // Add marginRight to create space between categories
                  }}
                >
                  <Image source={{ uri: ngo.image }} style={{ width: 50, height: 50, borderRadius: 25, marginRight: responsiveMargin(3) }} />
                  <Text style={{ color: selectedCategories.includes(ngo.name) ? "white" : "black", fontSize: getFontSize(18) }}>{ngo.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </ScrollView>

{/* ************************************************************** CHIP CREATED **************************************************************/}

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 10, paddingLeft: 20, position: "absolute", bottom: 60, zIndex: 1 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {selectedFilters.map((filter, index) => (
              <TouchableOpacity key={index} onPress={() => removeFilter(filter)} style={{ flexDirection: "row", alignItems: "center", backgroundColor: Base_Color, borderRadius: 20, padding: 10, marginRight: 10 }}>
                <Text style={{ color: "white", marginRight: 5 }}>{filter}</Text>
                <AntDesign name="close" size={16} color="white" />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        
        <TouchableOpacity onPress={() => navigation.navigate("NGOResult", {selectedFilters} )} style={{ alignItems: "center", backgroundColor: Base_Color, borderRadius: 30, position: "absolute", width: "95%", padding: 10, marginLeft: 10, justifyContent: "center", bottom: 10 }}>
          <Text style={{ color: "white" }}>Search</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  ngoContainer: {
    flex: 1,
  },
  ngoTile: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
  },
  ngoImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  ngoName: {
    fontSize: 18,
  },
});

export default Search;