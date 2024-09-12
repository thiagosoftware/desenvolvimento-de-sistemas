import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';
import Prime from './src/Telas/Prime';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Prime />
    </View>
  );
}