import React from 'react';
import renderer from 'react-test-renderer';
import UserCard from './UserCard';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <UserCard />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});