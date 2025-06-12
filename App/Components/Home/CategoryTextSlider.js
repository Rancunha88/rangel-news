import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Color from '../../Shared/Color';

function CategoryTextSlider({ selectCategory }) {
	const [active, setActive] = useState(1);

	const categoryList = [
		{ id: 1, name: 'Latest' },
		{ id: 2, name: 'World' },
		{ id: 3, name: 'Business' },
		{ id: 4, name: 'Sports' },
		{ id: 5, name: 'Life' },
		{ id: 6, name: 'Entertainment' }, // Broadened from "Movie"
		{ id: 7, name: 'Technology' },
		{ id: 8, name: 'Health' },
		{ id: 9, name: 'Politics' },
		{ id: 10, name: 'Environment' },
		{ id: 11, name: 'Education' },
		{ id: 12, name: 'Finance' },
	];

	const onCategoryClick = (id) => {
		setActive(id);
	};

	return (
		<View style={styles.textSliderContainer}>
			<FlatList
				data={categoryList}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => {
							onCategoryClick(item.id);
							selectCategory(item.name);
						}}
					>
						<Text style={item.id === active ? styles.selectedText : styles.unselectedText}>
							{item.name}
						</Text>
					</TouchableOpacity>
				)}
			></FlatList>
		</View>
	);
}

export default CategoryTextSlider;

const styles = {
	textSliderContainer: {
		marginTop: 10,
	},
	unselectedText: {
		marginRight: 20,
		fontSize: 18,
		fontWeight: '800',
		color: Color.secondary,
	},
	selectedText: {
		color: Color.primary,
		marginRight: 20,
		fontSize: 18,
		fontWeight: '900',
	},
};
