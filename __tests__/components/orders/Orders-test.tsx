/**
 * @format
 */

import React from 'react';
import Order from '_components/orders';
import { shallow, ShallowWrapper } from 'enzyme';
import TabComponent from '_components/orders/tabComponent';
jest.mock('react-navigation', () => ({
  navigate: jest.fn(),
}))
describe("Order Component", () => {
  describe("Rendering", () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
      wrapper = shallow(<Order/>);
    });

    test("Should render a <TabComponent />", () => {
      expect(wrapper.find(TabComponent)).toHaveLength(1);
    });
  });
});