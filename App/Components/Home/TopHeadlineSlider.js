import { View, Text, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import color from '../../Shared/Color';
import { useNavigation } from '@react-navigation/native';

function TopHeadlineSlider({ newsList }) {
	const navigation = useNavigation();

	return (
		<View style={styles.headlineSliderContainer}>
			<FlatList
				data={newsList}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => navigation.navigate('ReadNews', { news: item })}
						style={styles.headlineSlider}
					>
						<Image
							source={{ uri: item.urlToImage }}
							style={styles.headlineSliderImage}
						/>
						<Text
							numberOfLines={3}
							style={styles.headlineSliderTitle}
						>
							{item.title}
						</Text>
						<Text style={styles.headlineSliderSource}>{item?.source.name}</Text>
					</TouchableOpacity>
				)}
			></FlatList>
		</View>
	);
}

export default TopHeadlineSlider;

const styles = {
	headlineSliderContainer: {
		marginTop: 15,
	},
	headlineSlider: {
		width: Dimensions.get('screen').width * 0.8,
	},
	headlineSliderImage: {
		height: Dimensions.get('screen').width * 0.8,
		borderRadius: 10,
		marginRight: 15,
	},
	headlineSliderTitle: {
		marginTop: 10,
		marginRight: 15,
		fontWeight: '800',
		fontSize: 23,
	},
	headlineSliderSource: {
		marginTop: 5,
		fontSize: 14,
		color: color.primary,
	},
};
