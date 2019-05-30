
import React from 'react';
import TabComponent from '_components/orders/tabComponent';
import {  shallow, ShallowWrapper } from 'enzyme';
import { Text, Badge } from 'native-base';
import BadgeComponent from '_components/badge'

describe("Tab Component", () => {
  describe("Rendering", () => {
    let wrapper: ShallowWrapper;
  
    test("should return a empty <Text> if pass 0", () => {
      wrapper = shallow(<BadgeComponent text= {0}/>);
      expect(wrapper.find(Badge)).toHaveLength(0);
    });

    test("should return a <Badge/> if value if different to zero", () => {
      wrapper = shallow(<BadgeComponent text= {'1'}/>);
      expect(wrapper.find(Badge)).toHaveLength(1);
      expect(wrapper.find(Badge).find(Text)).toHaveLength(1);
    });
  });
});