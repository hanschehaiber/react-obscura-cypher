import { useState } from 'react';

function Message() {
  const [text, setText] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };
  return (
    <div>
      <p> Enter the message you wish to encrypt here...</p>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type message here"
      />
    </div>
  );
}

export default Message;
