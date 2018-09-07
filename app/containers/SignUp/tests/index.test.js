import React from 'react';
import { shallow } from 'enzyme';

import { SignUp } from '../index';
import MainHeader from '../../../components/MainHeader';

describe('<SignUp />', () => {
  it('should render MainHeader to be one', () => {
    const renderComponent = shallow(
      <SignUp />
    );
    expect(renderComponent.find(MainHeader).length).toBe(1);
  });
});
