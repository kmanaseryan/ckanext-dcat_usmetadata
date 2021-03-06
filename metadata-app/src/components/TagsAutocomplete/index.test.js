import React from 'react';
import { render } from '@testing-library/react';
import TagsAutocomplete from '.';

// eslint-disable-next-line
test('Renders TagsAutocomplete component', () => {
  const { getByPlaceholderText } = render(
    <TagsAutocomplete name="foo" apiUrl="123" apiKey="123" />
  );
  const text = getByPlaceholderText('Add new tag');
  expect(text).toBeInTheDocument();
});
