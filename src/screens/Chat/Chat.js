import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import Header from '@components/Headers/Header';
import IMAGES from '@assets/Image';

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: 'Aman!',
      createdAt: new Date(),
      user: {_id: 1, name: 'Aman'},
      quickReplies: {
        type: 'radio',
        keepIt: true,
        values: [
          {
            title: ' Yes',
            value: 'yes',
          },
          {
            title: ' Yes, let me show you with a picture!',
            value: 'yes_picture',
          },
          {
            title: ' Nope. What?',
            value: 'no',
          },
        ],
      },
      image: IMAGES.Chat,
    },
    {
      _id: 2,
      text: 'Sanjay!',
      createdAt: new Date(),
      user: {_id: 2, name: 'sanjay'},
    },
  ]);

  const onSend = newMessages => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages),
    );
  };

  return (
    <View style={{flex: 1}}>
      <Header renderText="(CAN Admin)" showImage={false} />
      <GiftedChat
        messages={messages}
        onSend={newMessages => onSend(newMessages)}
        alwaysShowSend={true}
        user={{_id: 1}}
        isTyping={true}
        // renderAvatarOnTop={true}
        // isCustomViewBottom={true}
        // multiline={true}
        infiniteScroll={true}
        renderMessageImage={props => (
          <Image
            source={props.currentMessage.image}
            style={{width: 200, height: 200}}
          />
        )}
      />
    </View>
  );
};

export default Chat;
