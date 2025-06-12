import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import ReadNews from '../Screens/ReadNews';

const Stack = createStackNavigator();

function HomeNavigator() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}		
		>
			<Stack.Screen
				name='Home'
				component={Home}
			/>
            <Stack.Screen
				name='ReadNews'
				component={ReadNews}
			/>
		</Stack.Navigator>
	);
}

export default HomeNavigator;
