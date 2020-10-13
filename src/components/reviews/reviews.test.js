import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Reviews from './reviews';

import { restaurants } from '../../fixtures';

const { reviews } = restaurants[3];

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  it('should render', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(
      wrapper.find('[data-reviews="main-content"]').childElementCount
    ).toBe(2);
  });
  /*  it('should init from 0 amount', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="product-amount"]').text()).toBe('0');
  });
  it('should increment amount', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    wrapper.find('[data-id="product-increment"]').simulate('click');
    expect(wrapper.find('[data-id="product-amount"]').text()).toBe('1');
  }); */
});
