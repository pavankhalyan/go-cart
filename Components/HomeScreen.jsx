import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>SmartCart</Text>

      <View style={styles.card}>
        <Image
          source={require('../assets/categories.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SiteMap')}>
          <Text style={styles.buttonText}>Categories</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Image
          source={require('../assets/sitemap.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Categories')}>
          <Text style={styles.buttonText}>Site-map</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFD52B',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    marginBottom: 30,
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 93,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
