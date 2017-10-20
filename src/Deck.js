import React from 'react';
import { View, Text } from 'react-native';

class Deck extends React.Component {
	componentWillMount() {
	}

	renderCards() {
		return this.props.data.map(item => {
			return this.props.renderCard(item);
		});
	}

	render() {
		return (
			<View>
				{this.renderCards()}
			</View>
		)
	}
}

export default Deck
