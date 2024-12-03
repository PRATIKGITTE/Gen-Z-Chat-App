import React from 'react';
import styled from 'styled-components';

const MiniGame = ({ onClose }) => {
  const handleWin = () => {
    alert('You won the game!');
    onClose();
  };

  return (
    <GameContainer>
      <GameHeader>
        <h3>Mini Game</h3>
        <CloseButton onClick={onClose}>X</CloseButton>
      </GameHeader>
      <GameBody>
        <button onClick={handleWin}>Click to Win!</button>
      </GameBody>
    </GameContainer>
  );
};

const GameContainer = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);
  background: #fff;
  border: 2px solid #ccc;
  border-radius: 10px;
  width: 300px;
  padding: 20px;
  z-index: 1000;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const GameHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const GameBody = styled.div`
  text-align: center;

  button {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

export default MiniGame;
