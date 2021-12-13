import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import BottomTabs from "../components/home/BottomTabs";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItems, {
  localRestaurants,
} from "../components/home/RestaurantItems";
import SearchBar from "../components/home/SearchBar";

const YELP_API_KEY =
  "d6g6DswKiznzKVlSChF1-Agb98urLvb6H7XxH_1sVL0M3--kBghkMl2BBq7yidTYPhmNXWEPtG0pZv8vW6hqI2HbJ7-6rL40RdF0Lnl8ip-CysYqbIVrIDGfQiCzYXYx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [activeTab, setActiveTab] = useState("Delivery");
  const [city, setCity] = useState("San Francisco");

  const getRestaurantsFormYelp = () => {
    const yelp_url = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelp_url, apiOptions)
      .then((res) => res.json())
      .then((json) => {
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        );
      });
  };

  useEffect(() => {
    getRestaurantsFormYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <BottomTabs />
    </SafeAreaView>
  );
}
