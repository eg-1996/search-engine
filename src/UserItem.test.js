import React from 'react';
import renderer from 'react-test-renderer';
import UserItem from './UserItem';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <UserItem />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});