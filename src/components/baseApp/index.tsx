/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { useStatePersist } from '_modules/store/UseAsyncStorage';
import { View, Container, Text, Button } from 'native-base';
import navigate from '_navigation/NavigationService';

export default function App(Props: any) {
	const user = {
		firstName: 'Jhon',
		lastName: 'Doe',
	};
	const user2 = {
		firstName: 'Jhon2',
		lastName: 'Doe2',
	};
	const [val, setVal] = useStatePersist('genericData', 'user', user);
	// setVal('genericData', 'user', user2);
	return (
		<Container>
			<View style={styles.container}>
				<Text>Edit src/components/baseApp/index.tsx</Text>
				<Text>
					{val.user.firstName} {val.user.lastName}
				</Text>
				<Button onPress={() => navigate.navigate('Orders')}>
					<Text>Go to orders</Text>
				</Button>
				<Button onPress={() => navigate.navigate('Detail')}>
					<Text>Go to detail Order</Text>
				</Button>
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
