import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  margin: 10rem, 0, 10rem;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 100px;
  justify-content: center;
  ul {
    list-style: none;
    margin: 10rem, 0, 10rem;
  }
  li {
    display: inline;
  }
`;

export default function Nav() {
  return (
    <ul>
      <NavStyles>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </NavStyles>
    </ul>
  );
}
