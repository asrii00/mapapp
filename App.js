import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import Map from './screens/Map';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Map/>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20 //en saanut Constantsia toimimaan
  },
});
