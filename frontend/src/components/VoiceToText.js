import React, { useState } from 'react';
import styled from 'styled-components';

const VoiceToText = ({ onClose }) => {
  const [transcribedText, setTranscribedText] = useState('');

  const handleVoiceInput = () => {
  
  };

  return (
    <VoiceContainer>
      <VoiceHeader>
        <h3>Voice-to-Text</h3>
        <CloseButton onClick={onClose}>X</CloseButton>
      </VoiceHeader>
      <VoiceBody>
        <button onClick={handleVoiceInput}>Start Voice Input</button>
        <TextArea value={transcribedText} onChange={(e) => setTranscribedText(e.target.value)} />
      </VoiceBody>
    </VoiceContainer>
  );
};

const VoiceContainer = styled.div`
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

const VoiceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const VoiceBody = styled.div`
  text-align: center;

  button {
    padding: 10px 20px;
    background-color: #ff9800;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

export default VoiceToText;
