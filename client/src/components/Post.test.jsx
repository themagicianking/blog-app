import { render, screen } from '@testing-library/react';

import Post from './Post';

describe('Post', () => {
  it('renders post component', () => {
    render(<Post />);

    screen.debug();

    // check if App components renders headline
  });
});