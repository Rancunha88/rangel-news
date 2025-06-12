import { View, Text, Image, TouchableOpacity, Share, Linking, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import Color from '../Shared/Color';

function ReadNews() {
	const news = useRoute().params?.news;
	const navigation = useNavigation();

	const shareNews = () => {
		Share.share({
			message: news.title + '\n\nReadMore\n\n' + news.url,
		});
	};

	const openURL = (url) => {
		console.log('Read More Pressed for URL:', url);
		Linking.openURL(url).catch((err) => console.error('An error occurred', err));
	};
	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			style={{ flex: 1, backgroundColor: 'white' }}
		>
			<View style={styles.topHeader}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<MaterialIcons
						name='arrow-back-ios'
						size={26}
						color='black'
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => shareNews()}>
					<Feather
						name='share'
						size={26}
						color='black'
					/>
				</TouchableOpacity>
			</View>
			<Image
				source={{ uri: news.urlToImage }}
				style={styles.newsImage}
			/>
			<Text style={styles.newsTitle}>{news.title}</Text>
			<Text style={styles.newsSource}>{news.source.name}</Text>
			<Text style={styles.newsDescription}>{news.description}</Text>
			<Text style={styles.newsContent}>{news.content}</Text>
			<TouchableOpacity onPress={() => openURL(news.url)}>
				<Text style={styles.readMoreButton}>Read More</Text>
			</TouchableOpacity>
		</ScrollView>
	);
}

export default ReadNews;

const styles = {
	topHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 15,
	},
	newsImage: {
		width: '100%',
		height: 300,
		borderRadius: 10,
		marginBlock: 15,
	},
	newsTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		marginHorizontal: 15,
		color: 'black',
		marginBottom: 15,
	},
	newsDescription: {
		fontSize: 18,
		fontWeight: 'bold',
		marginHorizontal: 15,
		lineHeight: 24,
		color: 'gray',
		marginBottom: 15,
	},
	newsContent: {
		fontSize: 16,
		marginHorizontal: 15,
		lineHeight: 24,
		color: 'gray',
	},
	newsSource: {
		fontSize: 14,
		color: Color.primary,
		marginHorizontal: 15,
		marginBottom: 15,
	},
	readMoreButton: {
		fontSize: 16,
		color: Color.primary,
		fontWeight: 'bold',
		marginHorizontal: 15,
		marginBlock: 15,
	},
};
