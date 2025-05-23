// Components/SectionScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const SectionScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { section } = route.params;
  const getSectionImage = () => {
    switch (section) {
      case 'A':
        return require('../assets/sectionA.png');
      case 'B':
        return require('../assets/sectionA.png');
      case 'C':
        return require('../assets/sectionA.png');
      case 'D':
        return require('../assets/sectionA.png');
      case 'E':
        return require('../assets/sectionA.png');
      case 'F':
        return require('../assets/sectionA.png');
      case 'G':
        return require('../assets/sectionA.png');
      default:
        return require('../assets/sectionA.png');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.backArrow} onPress={() => navigation.goBack()}>⬅</Text>
        <Text style={styles.title}>SmartCart</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>MAIN MAP</Text>
        <View style={styles.mapRow}>
          <Image source={require('../assets/site.png')} style={styles.mapImage} />
          <View style={styles.sectionBox}>
            <Text style={styles.sectionLetter}>{section}</Text>
          </View>
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>SECTION {section}</Text>
        <View style={styles.fruitsVegetablesHeader}>
          <Text style={styles.subHeader}>FRUITS</Text>
          <Text style={styles.subHeader}>VEGETABLES</Text>
        </View>
        <Image source={getSectionImage()} style={styles.itemsImage} />
      </View>
    </View>
  );
};

export default SectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#FFD52B',
    padding: 26,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backArrow: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchBar: {
    backgroundColor: 'white',
    borderRadius: 6,
    paddingHorizontal: 10,
    width: 100,
    height: 35,
  },
  sectionContainer: {
    marginBottom: 125,
    paddingTop : 50,
  },
  sectionTitle: {
    backgroundColor: '#000000',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 8,
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  mapRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mapImage: {
    width: 300,
    height: 250,
    borderRadius: 8,
  },
  sectionBox: {
    borderWidth: 2,
    borderColor: '#000000',
    padding: 20,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  sectionLetter: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  fruitsVegetablesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: '#000000',
  },
  subHeader: {
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  itemsImage: {
    width: '100%',
    height: 200,
    marginTop: 5,
    borderRadius: 8,
  },
});
