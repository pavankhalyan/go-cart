import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; 

const OffersScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Offers & Discounts</Text>
        <View style={{ width: 30 }} /> 
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.subTitle}>Vegetables & Fruits</Text>
        <View style={styles.card}>
          <Image source={require('../assets/onion.png')} style={styles.image} />
          <Text style={styles.rating}>Rating: ⭐ (4.2/5)</Text>
          <Text>Price: ₹28/kg</Text>
          <Text>Offer: Buy 2kg & Get ₹5 Off</Text>
        </View>

        <View style={styles.card}>
          <Image source={require('../assets/apple.png')} style={styles.image} />
          <Text style={styles.rating}>Rating: ⭐ (4.3/5)</Text>
          <Text>Price: ₹120/kg</Text>
          <Text>Offer: Buy 1.5kg & Get ₹10 Off</Text>
        </View>

        <Text style={styles.subTitle}>Household & Personal Products</Text>
        <View style={styles.card}>
          <Image source={require('../assets/cleaning.png')} style={styles.image} />
          <Text style={styles.rating}>Rating: ⭐ (4.3/5)</Text>
          <Text>Price: ₹599</Text>
          <Text>Offer: Save ₹100 + Free Scrubber</Text>
        </View>

        <View style={styles.card}>
          <Image source={require('../assets/bath.png')} style={styles.image} />
          <Text style={styles.rating}>Rating: ⭐ (4.4/5)</Text>
          <Text>Price: ₹349</Text>
          <Text>Offer: Save ₹80 + Free Face Towel</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default OffersScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFD52B',
    padding: 16,
    paddingBottom: 40,
    paddingTop: 100,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: '#FFD52B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 40,
    borderBottomWidth: 1,
    borderColor: '#000',
    zIndex: 1,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    fontWeight: 'bold',
    backgroundColor: '#000',
    color: '#fff',
    padding: 6,
    marginTop: 16,
    marginBottom: 6,
    borderRadius: 4,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 6,
  },
  rating: {
    color: 'red',
    fontWeight: 'bold',
  },
});
