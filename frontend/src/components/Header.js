import React, { useState } from 'react';
import styled from 'styled-components';

const Header = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    document.body.style.backgroundColor = theme === 'light' ? '#121212' : '#ffffff';
    document.body.style.color = theme === 'light' ? '#ffffff' : '#121212';
  };

  return (
    <HeaderContainer>
      <h1>Gen Z Chat App</h1>
      <ThemeButton onClick={toggleTheme}>
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </ThemeButton>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: #ff8c00;
  color: white;
  text-align: center;
  padding: 10px;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ThemeButton = styled.button`
  background-color: white;
  color: #ff8c00;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #ff8c00;
    color: white;
  }
`;

export default Header;
