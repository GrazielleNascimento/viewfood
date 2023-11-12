import { SafeAreaView, StyleSheet, Text } from 'react-native';

// navigation
import NavigationStack from './src/stack/NavigationStack.js';

export default function App() {
  return (
    <SafeAreaView style={styles.container} >
      <NavigationStack />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    textAlign: 'center',
    justifyContent: 'center'
  },
});
