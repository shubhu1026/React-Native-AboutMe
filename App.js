import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> AboutMe</Text>
      <Text style={styles.gap}></Text>
      <Text style={styles.info}>Shubham Patel</Text>
      <Text style={styles.info}>301366205</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    fontSize: 50,
    fontWeight: "bold",
    textDecorationLine: 'underline'
  },

  gap: {
    marginTop: 24,
  },

  info: {
    fontSize: 20,
    fontFamily: "Roboto"
  }
});
