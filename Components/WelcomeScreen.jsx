import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 3000); 
    
    return () => clearTimeout(timer); 
  }, [navigation]);
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.welcomeText}>Welcome To</Text>
        <Text style={styles.appName}>SmartCart</Text>
        
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/splash-icon.png')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: 175,
    padding: 20,
  },
  card: {
    backgroundColor: '#FFD52B',
    borderRadius: 20,
    padding: 20,
    width: '100%',
    height: '150%',
    alignItems: 'center',
    paddingVertical: 30,
  },
  welcomeText: {
    fontSize: 22,
    color: '#000000',
    fontFamily: 'sans-serif',
    marginBottom: 5,
    fontWeight: '500',
    fontStyle: 'normal',
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
  },
  imageContainer: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    overflow: 'hidden',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  }
}); 


export default WelcomeScreen;