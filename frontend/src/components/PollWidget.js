import React, { useState } from 'react';
import styled from 'styled-components';

const PollWidget = ({ onClose }) => {
  const [pollOptions] = useState(['Option 1', 'Option 2']);
  const [votes, setVotes] = useState([0, 0]);

  const vote = (index) => {
    const newVotes = [...votes];
    newVotes[index]++;
    setVotes(newVotes);
  };

  return (
    <PollContainer>
      <PollHeader>
        <h3>Poll</h3>
        <CloseButton onClick={onClose}>X</CloseButton>
      </PollHeader>
      <PollBody>
        {pollOptions.map((option, index) => (
          <PollOption key={index} onClick={() => vote(index)}>
            {option} ({votes[index]} votes)
          </PollOption>
        ))}
      </PollBody>
    </PollContainer>
  );
};

const PollContainer = styled.div`
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

const PollHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const PollBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PollOption = styled.button`
  padding: 10px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

export default PollWidget;
