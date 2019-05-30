/**
 * @format
 */

import React from 'react';
import CardData from '_components/cardData';
import { View } from 'react-native';
import { Card, Text, Icon } from 'native-base';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('react-navigation', () => {
	return {
		createAppContainer: jest.fn().mockReturnValue(function NavigationContainer() {
			return null;
		}),
		createDrawerNavigator: jest.fn(),
		createMaterialTopTabNavigator: jest.fn(),
		createStackNavigator: jest.fn(),
		StackActions: {
			push: jest.fn().mockImplementation(x => ({ ...x, type: 'Navigation/PUSH' })),
			replace: jest.fn().mockImplementation(x => ({ ...x, type: 'Navigation/REPLACE' })),
		},
		NavigationActions: {
			navigate: jest.fn().mockImplementation(x => x),
		},
	};
});

describe('CardData Component', () => {
	describe('Rendering', () => {
		let wrapper: ShallowWrapper;
		beforeEach(() => {
			wrapper = shallow(<CardData />);
		});
		test('Check if render component correctly', () => {
			expect(wrapper).toMatchSnapshot();
		});
		test('Should render a <Card />', () => {
			expect(wrapper.find(Card)).toHaveLength(1);
		});
		test('Should render a <Collapse />', () => {
			expect(wrapper.find(Card).find(Collapse)).toHaveLength(1);
		});
		test('Should render a 3 <View />', () => {
			expect(
				wrapper
					.find(Card)
					.find(Collapse)
					.find(View)
			).toHaveLength(3);
		});
		test('Should render a 6 <Icon />', () => {
			expect(
				wrapper
					.find(Card)
					.find(Collapse)
					.find(View)
					.find(Icon)
			).toHaveLength(6);
		});
		test('Should render a 6 <Text />', () => {
			expect(
				wrapper
					.find(Card)
					.find(Collapse)
					.find(View)
					.find(Text)
			).toHaveLength(6);
		});
		test('collapse return false when state change onToggle', () => {
			// Arrange
			//const mockOnPress = jest.fn(); // 1. mock function
			//wrapper.find('#collapseID').simulate('onPress', mockOnPress(true));
			//console.log(wrapper.find('#collapseID').prop('isCollapsed'));
			expect(wrapper.find('#collapseID').prop('isCollapsed')).toBe(false);
		});
	});
});
