import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer as NavigatorContainer } from '@react-navigation/native';
import HomeNavigator from './App/Navigations/HomeNavigator';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigatorContainer>
        <HomeNavigator />
      </NavigatorContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    paddingTop: 20,
    padding: 20
  },
});
