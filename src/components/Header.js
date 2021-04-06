import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/category';

function Header() {
  const dispatch = useDispatch();
  const { category } = useSelector(state => ({
    category: state.category.category,
  }));

  return (
    <HeaderWrap>
      <Nav>
        <NavList>
          <NavItem
            active={category === 'all'}
            onClick={() => {
              dispatch(setCategory('all'));
            }}
          >
            <span>All</span>
          </NavItem>
          <NavItem
            active={category === 'random'}
            onClick={() => {
              dispatch(setCategory('random'));
            }}
          >
            <span>Random</span>
          </NavItem>
          <NavItem
            active={category === 'animals'}
            onClick={() => {
              dispatch(setCategory('animals'));
            }}
          >
            <span>Animals</span>
          </NavItem>
          <NavItem
            active={category === 'food'}
            onClick={() => {
              dispatch(setCategory('food'));
            }}
          >
            <span>Food</span>
          </NavItem>
          <NavItem
            active={category === 'fashion'}
            onClick={() => {
              dispatch(setCategory('fashion'));
            }}
          >
            <span>Fashion</span>
          </NavItem>
          <NavItem
            active={category === 'travel'}
            onClick={() => {
              dispatch(setCategory('travel'));
            }}
          >
            <span>Travel</span>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  border-bottom: 1px solid #666;
`;

const Nav = styled.nav`
  height: 64px;
`;
const NavList = styled.ul`
  display: flex;
  height: 64px;
  align-items: center;
  justify-content: center;
`;
const NavItem = styled.li`
  span {
    padding: 0 2rem;
    font-size: 1.5em;
    font-weight: 700;
    color: ${({ active }) => (active ? '#fff' : '#999')};
    cursor: pointer;
  }

  span:hover {
    color: #fff;
  }
`;

export default Header;
