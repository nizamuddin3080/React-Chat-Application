import { useState } from "react";

const MessageForm = () => {
    const [value, setValue] = useState('')

    const handleChange = () => {

    }
    const handleSubmit = () => {

    }
    return (
        <form className='message-form' onSubmit={handleSubmit}>
            <input
                className='message-input'
                placeholder='Seend a message...'
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />

        </form>
    )
}

export default MessageForm;