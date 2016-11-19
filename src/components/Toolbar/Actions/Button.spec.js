import React from 'react';
import { mount } from 'enzyme';

import Button from './Button';


describe('Button', () => {
  let button;

  beforeEach(() => {
    button = mount(<Button onClick={() => {}} />);
  });

  it('invoke onClick when click in button', () => {
    let clicked;
    button.setProps({ onClick: () => clicked = true });
    button.simulate('click');
    expect(clicked).toEqual(true);
  });

  it('should render fontawesome icon when props.icon', () => {
    button.setProps({ icon: 'check' });
    expect(button.find('i.fa.fa-check').length).toEqual(1);
  });
});
