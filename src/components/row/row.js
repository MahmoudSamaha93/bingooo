import React from 'react';
import './row.css';

const Row = () => {

    const sentences = ['Child noises in the background.', 'Hello, hello?', 'I need to jump in another call',
                       'Can everyone go on mute?', 'Could you please get closer to the mic?', 'Next slide, please.',
                       '(Load painful echo/feedback.)', 'Can we take this offline?', 'Is ___ on the call?',
                       'Could you share this slides afterwards?', 'Can somebody grant presenter rights?',
                       'Can you email that to everyone?', '', 'Sorry, I had problems logging in.',
                       '(Animal noises in the background)', 'Sorry, I didn\'t find the conference ID',
                       'I was having connection issues.', 'I\'ll get back to you.', 'Who just joined?',
                       'Sorry, something with my calender.', 'Do you see my screen?', 'let\'s wait for ___!',
                       'You will send the minutes.', 'Sorry, I was on mute.', 'Can you repeat, please?'];

    let boxs = () => {
        return (
            sentences.map(sentence => {
                return (
                        <div id="box" className="d-inline-block p-2 rounded-lg
                         box text-center m-0 justify-content-center align-content-center">
                            {sentence}
                        </div>
                );
            })
        )
    }

    return (
        <div className="row text-center m-0">
            {boxs()}
        </div>
    )
}

export default Row;
