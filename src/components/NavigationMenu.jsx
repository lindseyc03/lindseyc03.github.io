import React, { useState } from 'react';
import styled from 'styled-components';

export const NavMenu = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContainer>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon>☰</MenuIcon>
        Navigate
      </MenuButton>

      {isOpen && (
        <MenuDropdown>
          <MenuItem onClick={() => {
            onNavigate('home');
            setIsOpen(false);
          }}>
            Main Home
          </MenuItem>
          <MenuItem onClick={() => {
            onNavigate('santeria');
            setIsOpen(false);
          }}>
            Santeria Overview
          </MenuItem>
          <MenuItem onClick={() => {
            onNavigate('music');
            setIsOpen(false);
          }}>
            Explore Music
          </MenuItem>
        </MenuDropdown>
      )}
    </NavContainer>
  );
};

const NavContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
`;

const MenuButton = styled.button`
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

const MenuIcon = styled.span`
  font-size: 1.2rem;
`;

const MenuDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  min-width: 200px;
`;

const MenuItem = styled.button`
  width: 100%;
  padding: 12px 20px;
  background: none;
  border: none;
  color: white;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 215, 0, 0.2);
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export default NavMenu;
