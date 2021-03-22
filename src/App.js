import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './app.css';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />
	return (
		<ChatEngine
            height='100vh'
			projectID='2fe36ca1-dd1d-4c36-8874-c7f658e22b12'
			userName='demo'
			userSecret='123456'
			userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
}

export default App;


