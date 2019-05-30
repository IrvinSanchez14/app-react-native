import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Header, Left, Button, Icon, Body, Title, Right, Container, Tabs, Tab } from 'native-base';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';

import { getOrders } from '__mocks__/orderMock';
import { sort, gBy } from '_modules/helpers/array';

const styles = {
	iconBack: {
		color: '#A8BCA5',
		fontWeight: 'bold',
	},
	titleOrder: {
		color: '#548B6F',
		fontWeight: 'bold',
	},
	headerSpecial: {
		backgroundColor: '#F4F8F7',
		borderBottomWidth: 2,
		borderColor: '#EFEFEF',
		height: 37,
	},
	textSpecial: {
		color: '#548B6F',
		fontWeight: 'bold',
		marginTop: -18,
		marginLeft: 40,
	},
	fileIcon: {
		fontSize: 14,
		color: '#548B6F',
		marginLeft: 15,
		marginTop: 12,
	},
	chevronIcon: {
		marginTop: -23,
		marginRight: 10,
		fontSize: 20,
		color: '#B7CBC3',
		textAlign: 'right',
	},
	baseSpecial: {
		height: 55,
		borderBottomWidth: 1,
		borderColor: '#EFEFEF',
		backgroundColor: '#FFFFFF',
	},
	cardFather: {
		backgroundColor: '#F4F8F7',
	},
	textDescription: {
		marginLeft: 15,
		marginTop: 15,
	},
	bannerSecond: {
		backgroundColor: '#F4F8F7',
		height: 37,
		borderBottomWidth: 1,
		borderColor: '#EFEFEF',
	},
	textItem: {
		marginLeft: 30,
		marginTop: 10,
		fontWeight: 'bold',
	},
	quantity: {
		textAlign: 'right',
		marginRight: 143,
		marginTop: -18,
		fontWeight: 'bold',
	},
	location: {
		textAlign: 'right',
		marginRight: 51,
		marginTop: -19,
		fontWeight: 'bold',
	},
	containerData: {
		backgroundColor: '#FFFFFF',
		height: 54,
		borderBottomWidth: 2,
		borderColor: '#EFEFEF',
	},
	itemContainer: {
		marginLeft: 15,
		marginTop: 15,
	},
	quantityItem: {
		textAlign: 'right',
		marginRight: 155,
		marginTop: -19,
	},
	locationNumber: {
		textAlign: 'right',
		marginRight: 75,
		marginTop: -19,
	},
	shoopingIcon: {
		textAlign: 'right',
		marginRight: 55,
		marginTop: -17,
		fontSize: 14,
		color: '#548B6F',
	},
	chevronIconContainer: {
		marginTop: -17,
		marginRight: 10,
		fontSize: 20,
		color: '#B7CBC3',
		textAlign: 'right',
	},
	tabMenu: {
		borderColor: 'red',
	},
	arrowDown: {
		color: '#505050',
		fontSize: 14,
		marginTop: -17,
		marginLeft: 15,
	},
};

function DetailOrder(Props: any) {
	const [isCollapsed, setIsCollapsed] = useState(false);

	function changeCollapsed(collapsed: boolean) {
		if (collapsed) {
			setIsCollapsed(true);
		} else {
			setIsCollapsed(false);
		}
	}
	return (
		<Container>
			<Header style={{ backgroundColor: '#F4F8F7' }} androidStatusBarColor="#D8E5E0" iosBarStyle="light-content">
				<Left>
					<Button transparent onPress={() => Props.navigation.goBack()}>
						<Icon name="arrow-back" style={styles.iconBack} />
						<Text>Back</Text>
					</Button>
				</Left>
				<Body>
					<Title style={styles.titleOrder}>Order 98012009</Title>
				</Body>
				<Right />
			</Header>
			<Tabs style={styles.tabMenu}>
				<Tab heading="All Items">
					<Collapse
						id="collapseID"
						isCollapsed={isCollapsed}
						onToggle={(isCollapsed: boolean) => changeCollapsed(isCollapsed)}
						style={styles.cardFather}
					>
						<CollapseHeader style={styles.headerSpecial}>
							<View>
								<Icon type="FontAwesome" name="file-text" style={styles.fileIcon} />
								<Text style={styles.textSpecial}>Special Instruction</Text>
								{!isCollapsed ? (
									<Icon type="FontAwesome5" name="chevron-down" style={styles.chevronIcon} />
								) : (
									<Icon type="FontAwesome5" name="chevron-up" style={styles.chevronIcon} />
								)}
							</View>
						</CollapseHeader>
						<CollapseBody>
							<View style={styles.baseSpecial}>
								<Text style={styles.textDescription}>Cut all sheets of plywood down to 4x4 pieces</Text>
							</View>
						</CollapseBody>
					</Collapse>
					<View style={styles.bannerSecond}>
						<Text style={styles.textItem}>Item</Text>
						<Text style={styles.quantity}>Quantity</Text>
						<Text style={styles.location}>Location</Text>
						<Icon type="FontAwesome" name="arrow-down" style={styles.arrowDown} />
					</View>
					<View style={styles.containerData}>
						<Text style={styles.itemContainer}>RIP HAMMER 16oz</Text>
						<Text style={styles.quantityItem}>1 BOX</Text>
						<Text style={styles.locationNumber}>531</Text>
						<Icon type="FontAwesome5" name="shopping-cart" style={styles.shoopingIcon} />
						<Icon type="FontAwesome5" name="chevron-down" style={styles.chevronIconContainer} />
					</View>
					<View style={styles.containerData}>
						<Text style={styles.itemContainer}>RIP HAMMER 16oz</Text>
						<Text style={styles.quantityItem}>1 BOX</Text>
						<Text style={styles.locationNumber}>531</Text>
						<Icon type="FontAwesome5" name="shopping-cart" style={styles.shoopingIcon} />
						<Icon type="FontAwesome5" name="chevron-down" style={styles.chevronIconContainer} />
					</View>
					<View style={styles.containerData}>
						<Text style={styles.itemContainer}>RIP HAMMER 16oz</Text>
						<Text style={styles.quantityItem}>1 BOX</Text>
						<Text style={styles.locationNumber}>531</Text>
						<Icon type="FontAwesome5" name="shopping-cart" style={styles.shoopingIcon} />
						<Icon type="FontAwesome5" name="chevron-down" style={styles.chevronIconContainer} />
					</View>
					<View style={styles.containerData}>
						<Text style={styles.itemContainer}>RIP HAMMER 16oz</Text>
						<Text style={styles.quantityItem}>1 BOX</Text>
						<Text style={styles.locationNumber}>531</Text>
						<Icon type="FontAwesome5" name="shopping-cart" style={styles.shoopingIcon} />
						<Icon type="FontAwesome5" name="chevron-down" style={styles.chevronIconContainer} />
					</View>
				</Tab>
				<Tab heading="In-Store Items" />
				<Tab heading="Yard Items" />
			</Tabs>
		</Container>
	);
}

export default DetailOrder;
