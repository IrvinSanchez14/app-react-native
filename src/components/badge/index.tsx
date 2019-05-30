import React from 'react';
import { Badge, Text } from 'native-base';
import { StyleSheet } from 'react-native';
interface IProps {
	text: string | number;
}
export default function BadgeComponent(Props: IProps) {
	return Props.text === '0' || Props.text === 0 ? (
		<Text />
	) : (
		<Badge style={styles.badge}>
			<Text style={styles.text}>{Props.text}</Text>
		</Badge>
	);
}
const styles = StyleSheet.create({
	text: {
		fontSize: 9,
	},
	badge: {
		padding: 6,
		alignSelf: 'center',
	},
});
