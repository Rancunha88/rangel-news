import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import color from '../../Shared/Color';

function HeadlineList({ newsList }) {
	const navigation = useNavigation();

	return (
		<View style={styles.headlineListContainer}>
			<FlatList
				data={newsList.slice(-14).reverse()} // Display only the first 5 headlines
				showsVerticalScrollIndicator={false}
				scrollEnabled={false}
				renderItem={({ item }) => (
					<View>
						<View style={styles.bar}></View>
						<TouchableOpacity
							onPress={() => navigation.navigate('ReadNews', { news: item })}
							style={styles.HeadlineList}
						>
							<Image
								source={{ uri: item.urlToImage }}
								style={styles.headlineListImage}
							/>
							<View style={styles.headlineListTextContainer}>
								<Text
									numberOfLines={5}
									style={styles.headlineListTitle}
								>
									{item.title}
								</Text>
								<Text style={styles.headlineListSource}>{item?.source.name}</Text>
							</View>
						</TouchableOpacity>
					</View>
				)}
			></FlatList>
		</View>
	);
}

export default HeadlineList;

const styles = {
	headlineListContainer: {
		marginTop: 15,
	},
	HeadlineList: {
		display: 'flex',
		flexDirection: 'row',
	},
	headlineListImage: {
		height: 150,
		width: 150,
		borderRadius: 10,
		marginRight: 15,
		marginTop: 10,
	},
	headlineListTextContainer: {
		flex: 1,
	},
	headlineListTitle: {
		marginTop: 10,
		marginRight: 15,
		fontWeight: 'bold',
		fontSize: 16,
	},
	headlineListSource: {
		marginTop: 5,
		fontSize: 14,
		color: color.primary,
	},
	bar: {
		height: 1,
		backgroundColor: color.lightGray,
		marginTop: 10,
	},
};
