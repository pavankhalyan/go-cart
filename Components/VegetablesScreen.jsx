import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure expo/vector-icons is installed

const vegetables = [
  { name: 'Carrot', img: require('../assets/vegetables/carrot.png') },
  { name: 'Potato', img: require('../assets/vegetables/potato.png') },
  { name: 'Tomato', img: require('../assets/vegetables/tomato.png') },
  { name: 'Cabbage', img: require('../assets/vegetables/cabbage.png') },
  { name: 'Spinach', img: require('../assets/vegetables/spinach.png') },
  { name: 'Onion', img: require('../assets/vegetables/onion.png') },
  { name: 'Garlic', img: require('../assets/vegetables/garlic.png') },
  { name: 'Cauliflower', img: require('../assets/vegetables/cauliflower.png') },
  { name: 'Broccoli', img: require('../assets/vegetables/broccoli.png') },
];

const VegetablesScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.appName}>SmartCart</Text>
        <TextInput style={styles.searchBox} value="search" editable={false} />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Vegetables List</Text>
        <View style={styles.grid}>
          {vegetables.map((veg, index) => (
            <View key={index} style={styles.itemBox}>
              <Image source={veg.img} style={styles.image} />
              <Text style={styles.label}>{veg.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default VegetablesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFD52B',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000000',
    paddingHorizontal: 12,
    paddingVertical: 10,
    justifyContent: 'space-between', 
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  searchBox: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 6,
    width: 120,
    height: 35,
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    paddingBottom: 30,
    paddingTop: 190,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 5,
    width: '90%',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center', 
    padding: 20,
  },
  itemBox: {
    width: 90,
    margin: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 8,
    padding: 5,
    backgroundColor: '#fff',
  },
  image: {
    width: 70,
    height: 70,
    marginBottom: 4,
  },
  label: {
    fontSize: 13,
    textAlign: 'center',
  },
});
