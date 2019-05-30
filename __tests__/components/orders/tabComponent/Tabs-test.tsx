
import React from 'react';
import TabComponent from '_components/orders/tabComponent';
import {  shallow, ShallowWrapper } from 'enzyme';
import { getOrders } from '__mocks__/orderMock';
import { sort, gBy } from '_modules/helpers/array'
import { Tab, Tabs } from 'native-base';

jest.mock('react-navigation', () => ({
  navigate: jest.fn(),
}))
const orders = getOrders.map((obj, idx)=> ({ ...obj, status:  idx % 5 == 0 ? 'Imcompleted' : idx % 3 == 0 ? "Pending Pickup" : "Completed" }))
const sortOrders = sort(orders, 'status');
const grouped = gBy(sortOrders, 'status')
const renderCompoments = {
  orders: grouped,
  sort: ["Imcompleted", "Pending Pickup", "Completed"],
};

describe("Tab Component", () => {
  describe("Rendering", () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
      wrapper = shallow(<TabComponent {...renderCompoments}/>);
    });

    test("Should render a <Tabs />", () => {
      expect(wrapper.find(Tabs)).toHaveLength(1);
    });
    test("Should render one <Tab />", () => {
      expect(wrapper.find(Tab)).toHaveLength(3);
    });
  });
});