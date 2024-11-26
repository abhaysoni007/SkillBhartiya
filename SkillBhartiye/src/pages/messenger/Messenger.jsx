import React, { useState } from 'react';
import "./Messenger.scss";
import { FaPaperclip } from 'react-icons/fa'; 

const Messenger = () => {
  const [selectedUser  , setSelectedUser  ] = useState(null);
  const [messages, setMessages] = useState([
    { userId: 1, content: "Hi, I'm excited to work on your project! Could you share the details?...", time: "1 day ago" },
    { userId: 2, content: "Hello! I specialize in this domain and would love to collaborate with you...", time: "2 days ago" },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [file, setFile] = useState(null);

  const users = [
    { id: 1, username: "John Doe", hasNewMessage: true, profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh7s-ikEFdk4yow2pzV0F_c38QDKMXDgrxwA&s" },
    { id: 2, username: "Jane Smith", hasNewMessage: false, profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh7s-ikEFdk4yow2pzV0F_c38QDKMXDgrxwA&s" },
    { id: 3, username: "Alice Johnson", hasNewMessage: true, profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh7s-ikEFdk4yow2pzV0F_c38QDKMXDgrxwA&s" },
  ];

  const handleUserClick = (user) => {
    setSelectedUser (user);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() || file) {
      const messageToSend = {
        userId: 2, 
        content: newMessage,
        time: "just now",
        file: file,
      };
      setMessages(prevMessages => [...prevMessages, messageToSend]);
      setNewMessage('');
      setFile(null);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="messenger">
      <div className="sidebar">
        <h2>Messages</h2>
        <ul>
          {users.map(user => (
            <li
              key={user.id}
              onClick={() => handleUserClick(user)}
              className={selectedUser  ?.id === user.id ? 'active' : ''}
            >
              <img src={user.profilePic} alt={user.username} />
              <span>{user.username}</span>
              {user.hasNewMessage && <span className="new-message-indicator">New</span>}
            </li>
          ))}
        </ul>
      </div>
      <div className="chat-window">
        {selectedUser  ? (
          <>
            <div className="chat-header">
              <img src={selectedUser .profilePic} alt={selectedUser .username} className="profile-pic" />
              <h2>{selectedUser .username}</h2>
            </div>
            <div className="messages">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.userId === selectedUser .id ? 'owner' : ''}`}>
                  <p>{message.content}</p>
                  {message.file && <a href={URL.createObjectURL(message.file)} target="_blank" rel="noopener noreferrer">View File</a>}
                  <span className="timestamp">{message.time}</span>
                </div>
              ))}
            </div>
            <div className="write">
              <textarea 
                placeholder='Write a message...' 
                rows="3" 
                value={newMessage} 
                onChange={(e) => setNewMessage(e.target.value)} 
              />
              <label className="file-upload">
                <input type="file" onChange={handleFileChange} />
                <FaPaperclip className="upload-icon" />
              </label>
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </>
        ) : (
          <div className=" no-chat-selected">Select a user to start chatting...</div>
        )}
      </div>
    </div>
  );
};

export default Messenger;