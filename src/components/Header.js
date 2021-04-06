import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '../modules/photos-slice';

function Header() {
	const dispatch = useDispatch();
	const { category } = useSelector((state) => ({
		category: state.photos.category
	}));

	return (
		<HeaderWrap>
			<Nav>
				<NavList>
					<NavItem
						active={category === ''}
						onClick={() => {
							dispatch(changeCategory(''));
						}}
					>
						<span>All</span>
					</NavItem>
					<NavItem
						active={category === 'random'}
						onClick={() => {
							dispatch(changeCategory('random'));
						}}
					>
						<span>Random</span>
					</NavItem>
					<NavItem
						active={category === 'animals'}
						onClick={() => {
							dispatch(changeCategory('animals'));
						}}
					>
						<span>Animals</span>
					</NavItem>
					<NavItem
						active={category === 'food'}
						onClick={() => {
							dispatch(changeCategory('food'));
						}}
					>
						<span>Food</span>
					</NavItem>
					<NavItem
						active={category === 'fashion'}
						onClick={() => {
							dispatch(changeCategory('fashion'));
						}}
					>
						<span>Fashion</span>
					</NavItem>
					<NavItem
						active={category === 'travel'}
						onClick={() => {
							dispatch(changeCategory('travel'));
						}}
					>
						<span>Travel</span>
					</NavItem>
				</NavList>
			</Nav>
		</HeaderWrap>
	);
}

const HeaderWrap = styled.header`border-bottom: 1px solid #e9e9e9;`;

const Nav = styled.nav`height: 64px;`;
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
		color: ${({ active }) => (active ? '#000' : '#999')};
		cursor: pointer;
	}

	span:hover {
		color: #000;
	}
`;

export default Header;
