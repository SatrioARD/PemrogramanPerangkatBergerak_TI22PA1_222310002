import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyProfile from './component/MyProfile';

export default function App() {
  return (
    <View style={styles.container}>
      <MyProfile />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDC500',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
