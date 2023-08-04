import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';

const Editor = () => {
    const [inputValue, setInputValue] = useState('');
    const [response, setResponse] = useState('');

    const handleMockClick = async () => {
        try {
            const url = 'http://localhost:1080/mockserver/expectation';
            const response = await axios.put(url, {
                data: inputValue
            });
            setResponse(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <div>
                <TextField
                    multiline
                    rows={10}
                    variant="outlined"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <TextField
                    multiline
                    rows={10}
                    variant="outlined"
                    value={response}
                    disabled
                />
            </div>
            <Button variant="contained" color="primary" onClick={handleMockClick}>
                Mock
            </Button>
        </div>
    );
};

export default Editor;
