import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const categories = [
  { label: 'Vegetables', img: require('../assets/vegetables.png'), screen: 'Vegetables' },
  { label: 'Fruits', img: require('../assets/fruits.png'), screen: 'Fruits' },
  { label: 'Diary', img: require('../assets/diary.png'), screen: 'Diary' },
  { label: 'Bakery', img: require('../assets/bakery.png'), screen: 'Bakery' },
  { label: 'Groceries & Staples', img: require('../assets/groceries.png'), screen: 'Groceries' },
  { label: 'Snacks', img: require('../assets/snacks.png'), screen: 'Snacks' },
  { label: 'Meats', img: require('../assets/meats.png'), screen: 'Meats' },
  { label: 'HouseHold', img: require('../assets/household.png'), screen: 'HouseHold' },
  { label: 'Personal Products', img: require('../assets/personal.png'), screen: 'Personal' },
];

const CategoriesMainScreen = () => {
  const navigation = useNavigation();

  const handleCategoryPress = (screen) => {
    if (screen) {
      navigation.navigate(screen);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backArrow}>⬅</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>SmartCart</Text>
        <View style={styles.searchBox}>
          <Text style={styles.searchText}>Search</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Offers')}>
        <View style={styles.offerCard}>
          <Text style={styles.sectionTitle}>Offers & Discounts</Text>
          <Image source={require('../assets/tomato.png')} style={styles.offerImage} />
          <Text>
            <Text style={{ fontWeight: 'bold' }}>Rating:</Text> ⭐⭐⭐⭐☆ <Text style={{ color: 'red' }}>(4.2/5)</Text>
          </Text>
          <Text>Price: ₹28/kg</Text>
          <Text>Offer: Buy 2kg & Get ₹5 Off</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.grid}>
        {categories.map((cat, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.categoryBox}
            onPress={() => handleCategoryPress(cat.screen)}
          >
            <Image source={cat.img} style={styles.catImage} />
            <Text style={styles.catLabel}>{cat.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default CategoriesMainScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFD52B',
    padding: 16,
    paddingTop: 55,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 24,
  },
  backButton: {
    marginRight: 8,
  },
  backArrow: {
    fontSize: 24,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    flex: 1,
  },
  searchBox: {
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  searchText: {
    color: '#000',
  },
  offerCard: {
    backgroundColor: '#fff',
    width: '200%',
    padding: 42,
    borderRadius: 8,
    marginBottom: 24,
    borderWidth: 2,
    borderColor: '#0047AB',
    alignItems: 'center',
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: '#000',
    color: '#fff',
    width: '100%',
    textAlign: 'center',
    paddingVertical: 8,
    marginBottom: 12,
    borderRadius: 5,
  },
  offerImage: {
    width: 120,
    height: 100,
    marginVertical: 10,
    resizeMode: 'contain',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    
    padding: 5,
  },
  categoryBox: {
    width: 190,
    margin: 8,
    alignItems: 'center',
  },
  catImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginBottom: 6,
    resizeMode: 'contain',
  },
  catLabel: {
    textAlign: 'center',
    fontSize: 12,
  },
});
