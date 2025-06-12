import { View, Text, ActivityIndicator, Dimensions } from 'react-native';
import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import CategoryTextSlider from '../Components/Home/CategoryTextSlider';
import color from '../Shared/Color';
import Ionicons from '@expo/vector-icons/Ionicons';
import TopHeadlineSlider from '../Components/Home/TopHeadlineSlider';
import HeadlineList from '../Components/Home/HeadlineList';

import GlobalAPI from '../Services/GlobalAPI';

function Home() {
	const [newsList, setNewsList] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getNewsByCategory('latest');
	}, []);

	const getNewsByCategory = async (category) => {
		try {
			setLoading(true);
			const result = await GlobalAPI.getByCategory(category); // Await the API call
			setNewsList(result.articles); // Ensure result has an 'articles' array
			setLoading(false);
		} catch (error) {
			console.error('Component Error:', error); // Log errors in the component
		}
	};

	return (
		<ScrollView
			showVerticalScrollIndicator={false}
			style={{ flex: 1, backgroundColor: 'white' }}
		>
					<View style={styles.appContainer}>
						<Text style={styles.appName}>Rangel News</Text>
						<Ionicons
							name='notifications-outline'
							size={25}
							color='black'
						/>
					</View>
					<CategoryTextSlider selectCategory={(category) => getNewsByCategory(category)} />
			{loading ? (
				<ActivityIndicator
					size='large'
					color={color.primary}
					style={{ marginTop:Dimensions.get('screen').height * 0.35 }}
				/>
			) : (
				<View>
					<TopHeadlineSlider newsList={newsList} />
					<HeadlineList newsList={newsList} />
				</View>
			)}
		</ScrollView>
	);
}

export default Home;

const styles = {
	appContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	appName: {
		fontSize: 24,
		fontWeight: 'bold',
		color: color.primary,
		textAlign: 'center',
		marginTop: 10,
		marginBottom: 5,
	},
};
