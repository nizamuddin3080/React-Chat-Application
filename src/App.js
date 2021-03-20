import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './app.css';

const App = () => {
	return (
		<ChatEngine
            height='100vh'
			projectID='2fe36ca1-dd1d-4c36-8874-c7f658e22b12'
			userName='demo'
			userSecret='123456'
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
}

export default App;