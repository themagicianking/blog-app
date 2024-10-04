import { render, screen } from '@testing-library/react';

import Post from './Post';

describe('Post', () => {
  // check if post component is rendering
  it('renders post component', () => {
    render(<Post />);

    screen.debug();
  });
});