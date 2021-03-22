import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-Id': "2fe36ca1-dd1d-4c36-8874-c7f658e22b12", 'User-Name': username, 'User-Secret': password }
        try {
            //this the request from chat engine to get username & password
            await axios.get('https://api.chatengine.io/chats', { headers: authObject })
            //if the request successfull we are going to store user credentials into
            //local storage once you looged in when you come to the page you are already
            //to be logged in, not in this case to logged in again.
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload();



        } catch (error) {
            setError('Wrong credentials found...')

        }


    }

    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='input'
                        placeholder='Username'
                        required
                    />

                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='input'
                        placeholder='Password'
                        required
                    />
                    <div align='center'>
                        <button className='button' type='submit'>
                            <span>Start Chatting</span>

                        </button>
                        <h2 className="error">{error}</h2>

                    </div>
                </form>

            </div>

        </div>
    )
}

export default LoginForm;