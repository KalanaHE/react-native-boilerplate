import React from 'react';
import FlashMessage from 'react-native-flash-message';

const Message = () => {
  return (
    <FlashMessage
      animated={true}
      // hideStatusBar
      // floating={true}
      position="top"
      style={{zIndex: 1000}}
      duration={3000}
    />
  );
};

export default Message;
