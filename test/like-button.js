import test from 'blue-tape';
import React from 'react/addons';
import LikeButton from '../lib/like-button';

const TestUtils = React.addons.TestUtils;

const createComponent = (component, props, ...children) => {
  const shallowRenderer = TestUtils.createRenderer();
  const reactElement = React.createElement(
    component,
    props,
    children.length > 1 ? children : children[0]
  );

  shallowRenderer.render(reactElement);
  return shallowRenderer.getRenderOutput();
};

test('LikeButton component type', t => {
  t.equal(createComponent(LikeButton, {liked: false}).type, 'button');
  t.end();
});

test('LikeButton component "unlike" text', t => {
  const component = createComponent(LikeButton, {liked: false})
  t.equal(component.props.children.join(''), 'You unlike this.');
  t.end();
});

test('LikeButton component "like" text', t => {
  const component = createComponent(LikeButton, {liked: true})
  t.equal(component.props.children.join(''), 'You like this.');
  t.end();
});
