import React, { useState } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import { IoMdMicrophone, IoMdSend } from 'react-icons/io';
import { MdOutlineEdit } from 'react-icons/md';
import MiniGame from './MiniGame'; 
import PollWidget from './PollWidget'; 
import VoiceToText from './VoiceToText'; 

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [editableIndex, setEditableIndex] = useState(null);
  const [showGame, setShowGame] = useState(false);
  const [showPoll, setShowPoll] = useState(false);
  const [showVoice, setShowVoice] = useState(false);

  const sendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = { text: inputMessage, sender: 'user' };
      setMessages([...messages, newMessage]);
      setInputMessage('');
    }
  };

  const editMessage = (index) => {
    setEditableIndex(index);
    setInputMessage(messages[index].text);
  };

  const saveEditedMessage = () => {
    const updatedMessages = [...messages];
    updatedMessages[editableIndex].text = inputMessage;
    setMessages(updatedMessages);
    setEditableIndex(null);
    setInputMessage('');
  };

  return (
    <ChatContainer>
      <MessageContainer>
        {messages.map((msg, index) => (
          <Draggable key={index}>
            <MessageBubble sender={msg.sender}>
              {editableIndex === index ? (
                <EditableInput
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onBlur={saveEditedMessage}
                  autoFocus
                />
              ) : (
                <>
                  {msg.text}
                  <EditButton onClick={() => editMessage(index)}>
                    <MdOutlineEdit />
                  </EditButton>
                </>
              )}
            </MessageBubble>
          </Draggable>
        ))}
      </MessageContainer>

      <InputContainer>
        <input
          type="text"
          placeholder="Type a message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={editableIndex !== null ? saveEditedMessage : sendMessage}>
          {editableIndex !== null ? 'Save' : <IoMdSend />}
        </button>
      </InputContainer>

      {/* Floating Voice button */}
      <FloatingButton onClick={() => setShowVoice(!showVoice)} className="voice-button">
        <IoMdMicrophone />
      </FloatingButton>

      {/* Floating Game button */}
      <FloatingButton
        onClick={() => setShowGame(!showGame)}
        className="game-button"
        style={{ bottom: '80px' }}
      >
        Game
      </FloatingButton>

      {/* Poll Button */}
      <FloatingButton onClick={() => setShowPoll(!showPoll)} style={{ bottom: '150px' }}>
        Poll
      </FloatingButton>

      {showGame && <MiniGame onClose={() => setShowGame(false)} />}
      {showPoll && <PollWidget onClose={() => setShowPoll(false)} />}
      {showVoice && <VoiceToText onClose={() => setShowVoice(false)} />}
    </ChatContainer>
  );
};

const ChatContainer = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  position: relative;
`;

const MessageContainer = styled.div`
  height: 320px; /* Reduced height for the message container */
  overflow-y: scroll;
  margin-bottom: 10px; /* Adjusted bottom margin */
`;

const MessageBubble = styled.div`
  background-color: ${({ sender }) => (sender === 'user' ? '#008cba' : '#ff8c00')};
  color: white;
  padding: 10px;
  border-radius: 10px;
  margin: 5px 0;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const EditableInput = styled.input`
  width: calc(100% - 30px);
`;

const EditButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;

  input {
    flex-grow: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    padding: 10px 20px;
    background-color: #008cba;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const FloatingButton = styled.button`
  position: fixed;
  bottom: 10px;
  right: 20px;
  background-color: #008cba;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 9999; /* Ensure it's on top of other elements */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: bottom 0.3s ease; /* Smooth transition for the button movement */
`;

export default ChatWindow;
