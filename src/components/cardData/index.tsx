import React, { useState } from 'react';
import { Card, Text, Icon } from 'native-base';
import { StyleSheet, View } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';

const styles = StyleSheet.create({
	cardFather: {
		marginTop: 0,
	},
	baseCard: {
		height: 82,
		borderBottomWidth: 1,
		borderColor: '#EFEFEF',
	},
	contentView: {
		marginLeft: 14,
		marginTop: 10,
		height: 100,
	},
	numberOrder: {
		color: '#548B6F',
		fontWeight: 'bold',
		marginTop: 10,
	},
	fileIcon: {
		marginTop: -35,
		marginRight: 140,
		fontSize: 20,
		textAlign: 'right',
	},
	truckIcon: {
		marginTop: -20,
		marginRight: 93,
		fontSize: 20,
		textAlign: 'right',
	},
	shoopingIcon: {
		marginTop: -23,
		marginRight: 55,
		fontSize: 20,
		color: '#548B6F',
		textAlign: 'right',
	},
	chevronIcon: {
		marginTop: -23,
		marginRight: 21,
		fontSize: 20,
		color: '#B7CBC3',
		textAlign: 'right',
	},
	baseOrderPlace: {
		marginTop: 15,
	},
	clockOrderPlace: {
		marginTop: 13,
		marginLeft: 15,
		fontSize: 20,
		color: '#548B6F',
	},
	titleOrderPlace: {
		marginLeft: 45,
		marginTop: -22,
		color: '#548B6F',
		fontWeight: 'bold',
	},
	timeOrderPlace: {
		marginLeft: 45,
	},
	baseSpecial: {
		height: 150,
	},
	fileIconSpecial: {
		marginTop: 13,
		marginLeft: 15,
		fontSize: 20,
		color: '#548B6F',
	},
	titleSpecial: {
		marginLeft: 45,
		marginTop: -22,
		color: '#548B6F',
		fontWeight: 'bold',
	},
	textSpecial: {
		marginLeft: 45,
	},
});

export default function CardData(Props: any) {
	const [isCollapsed, setIsCollapsed] = useState(false);

	function changeCollapsed(collapsed: boolean) {
		if (collapsed) {
			setIsCollapsed(true);
		} else {
			setIsCollapsed(false);
		}
	}
	return (
		<Card style={styles.cardFather}>
			<Collapse
				id="collapseID"
				isCollapsed={isCollapsed}
				onToggle={(isCollapsed: boolean) => changeCollapsed(isCollapsed)}
			>
				<CollapseHeader style={styles.baseCard}>
					<View style={styles.contentView}>
						<Text style={styles.numberOrder}>94378331</Text>
						<Text>JOE LOCKWOOD</Text>
						<Icon type="FontAwesome" name="file-text" style={styles.fileIcon} />
						<Icon type="FontAwesome5" name="truck" style={styles.truckIcon} />
						<Icon type="FontAwesome5" name="shopping-cart" style={styles.shoopingIcon} />
						{!isCollapsed ? (
							<Icon type="FontAwesome5" name="chevron-down" style={styles.chevronIcon} />
						) : (
							<Icon type="FontAwesome5" name="chevron-up" style={styles.chevronIcon} />
						)}
					</View>
				</CollapseHeader>
				<CollapseBody>
					<View style={styles.baseOrderPlace}>
						<Icon type="AntDesign" name="clockcircle" style={styles.clockOrderPlace} />
						<Text style={styles.titleOrderPlace}>Order placed</Text>
						<Text style={styles.timeOrderPlace}>4 hours ago</Text>
					</View>
					<View style={styles.baseSpecial}>
						<Icon type="FontAwesome" name="file-text" style={styles.fileIconSpecial} />
						<Text style={styles.titleSpecial}>Special instructions</Text>
						<Text style={styles.textSpecial}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed varius nisi, id tincidunt
							ligula. Suspendisse vestibulum erat molestie elit suscipit, volutpat pellentesque dui
							euismod.
						</Text>
					</View>
				</CollapseBody>
			</Collapse>
		</Card>
	);
}
