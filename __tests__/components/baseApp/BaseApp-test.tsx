/**
 * @format
 */

import React from 'react';
import App from '_components/baseApp';
import {  shallow, ShallowWrapper } from 'enzyme';
import { View, Text, Button } from 'native-base';
import navigate from '_navigation/NavigationService'
jest.mock('react-navigation', () => ({
  navigate: jest.fn(),
}))
describe("App Component", () => {
  describe("Rendering", () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
      wrapper = shallow(<App/>);
    });
    test('Check if render component correctly', () => {
      expect(wrapper).toMatchSnapshot();
    })
    
    test("Should render a <View />", () => {
      expect(wrapper.find(View)).toHaveLength(1);
    });

    test("Should render a <Text/> inside on <View />", () => {
      expect(wrapper.find(View).find(Text)).toHaveLength(3);
    });

    test("<Text /> Should contain 'Edit src/components/baseApp/index.tsx'", () => {
      expect(wrapper.find(View).find(Text).first().childAt(0).text()).toContain('Edit src/components/baseApp/index.tsx');
    })
    test("Should render a <Button/>", () => {
      expect(wrapper.find(View).find(Button)).toHaveLength(1);
    })
    test('test onPress functionality', () => {
      const button = wrapper.find(View).find(Button).first();
      const navigation = jest.spyOn(navigate, 'navigate');
      button.simulate('press');
      expect(navigation).toHaveBeenCalledTimes(1);
      expect(navigation).toHaveBeenCalledWith('Orders');  
    });
  });
});