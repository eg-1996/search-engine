import React from 'react';
import renderer from 'react-test-renderer';
import ResultBox from './ResultBox';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <ResultBox />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});