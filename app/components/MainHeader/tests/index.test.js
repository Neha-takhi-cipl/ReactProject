import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import MainHeader from '../index';

describe('<MainHeader />', () => {
  it('should render some link', () => {
    const renderedComponent = shallow(
      <MainHeader />
    );
    expect(renderedComponent.find(Link).length).not.toBe(0);
  });
});
