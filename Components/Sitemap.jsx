import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const sections = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

const sitemap = () => {
  const navigation = useNavigation();

  const handleSectionPress = (section) => {
    navigation.navigate('SectionScreen', { section });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backArrow}>⬅</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>SmartCart</Text>
      </View>

      <Image
        source={require('../assets/sitemap.png')}
        style={styles.mapImage}
        resizeMode="contain"
      />

      <Text style={styles.selectText}>
        Select Your Preferred Section to Start Shopping
      </Text>

      <View style={styles.grid}>
        {sections.map((sec) => (
          <TouchableOpacity
            key={sec}
            style={styles.gridItem}
            onPress={() => handleSectionPress(sec)}
          >
            <Text style={styles.gridText}>{sec}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default sitemap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#FFD52B',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  backButton: {
    marginRight: 10,
  },
  backArrow: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  mapImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 20,
  },
  selectText: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  gridItem: {
    width: 80,
    height: 80,
    backgroundColor: '#000',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 4,
  },
  gridText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
