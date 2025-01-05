import { useEffect, useState } from 'react';
import logo from './assets/images/logo-universal.png';
import './App.css';
import { WindowSetSize } from "../wailsjs/runtime/runtime";

function App() {
    const resultText = "Type below to make window bigger or smaller 👇";
    const [text, setText] = useState('');
    const updateText = (e: any) => setText(e.target.value);

    useEffect(() => {
        const updateWindowSize = async () => {
            try {
                if (text.length % 2 === 0) {
                    await WindowSetSize(1024, 768);
                } else {
                    await WindowSetSize(1024, 668);
                }
            } catch (error) {
                console.error('Failed to resize window:', error);
            }
        };
        updateWindowSize();
    }, [text])

    return (
        <div id="App">
            <img src={logo} id="logo" alt="logo" />
            <div id="result" className="result">{resultText}</div>
            <div id="input" className="input-box">
                <input id="text" className="input" onChange={updateText} autoComplete="off" name="input" type="text" />
            </div>
        </div>
    )
}

export default App
