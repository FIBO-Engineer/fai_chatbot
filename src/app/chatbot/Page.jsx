'use client';

import React from 'react';
import { useRecordVoice } from '../../hooks/useRecordVoice';
import MessageBubble from '../components/MessageBubble';

export default function ChatbotPage({ goHome }) {
    const { recording, startRecording, stopRecording } = useRecordVoice();

    return (
        <div className="flex flex-col h-screen w-screen bg-grayLight p-4">
            {/* Header */}
            <div className="bg-primary text-white flex items-center justify-between px-6 py-4 w-full rounded-tl-lg rounded-tr-lg">
                <div className="flex items-center">
                    <img src="/assets/images/happy.png" alt="Chatbot Logo" className="w-8 h-8 mr-4" />
                    <span className="text-lg font-bold">FAI Chatbot</span>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-grow bg-white p-4 overflow-y-auto space-y-4 w-full">
                <MessageBubble text="Hello! How can I assist you today?" />
                <div className="flex flex-col items-end space-y-4">
                    <MessageBubble
                        text="I want to know about your services."
                        isUser={true}
                    />
                </div>
                <MessageBubble text="Sure! We offer a variety of services including AI development, web development, and more." />
            </div>

            {/* Input */}
            <div className="bg-white p-4 flex items-center border-t space-x-4 w-full">
                <input
                    type="text"
                    placeholder="Type a message..."
                />
                <button
                    className="circle-button shadow-custom"
                    style={{ width: "48px", height: "48px", "--button-size": "48px" }}
                >
                    <ion-icon name="send" className="circle-icon"></ion-icon>
                </button>
            </div>

            {/* Footer */}
            <footer className="bg-white p-4 rounded-bl-lg rounded-br-lg">
                <div className="flex justify-center items-center gap-6">
                    <button className="circle-button shadow-custom" onClick={goHome}>
                        <ion-icon name="arrow-back" className="circle-icon"></ion-icon>
                    </button>
                    <button className="circle-button shadow-custom">
                        <ion-icon name="mic-off-outline" className="circle-icon"></ion-icon>
                    </button>
                    <button
                        className={`circle-button shadow-custom ${recording ? 'listening' : ''}`}
                        style={{ width: "80px", height: "80px", "--button-size": "80px" }}
                        onClick={recording ? stopRecording : startRecording}
                    >
                        {recording ? (
                            <div className="soundwave">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        ) : (
                            <ion-icon name="mic" className="circle-icon"></ion-icon>
                        )}
                    </button>
                    <button className="circle-button shadow-custom">
                        <ion-icon name="volume-off" className="circle-icon"></ion-icon>
                    </button>
                    <button className="circle-button shadow-custom">
                        <ion-icon name="volume-medium" className="circle-icon"></ion-icon>
                    </button>
                </div>
            </footer>

        </div>
    );
}

// 'use client';

// import React, { useState, useEffect } from 'react';
// import { useRecordVoice } from '../../hooks/useRecordVoice';
// import MessageBubble from '../components/MessageBubble';

// export default function ChatbotPage({ goHome }) {
//     const { recording, startRecording, stopRecording } = useRecordVoice();
//     const [sharedData, setSharedData] = useState(''); 
//     const [messages, setMessages] = useState([ 
//         { text: 'Hello! How can I assist you today?', isUser: false }
//     ]);

//     const handleInputChange = (event) => {
//         setSharedData(event.target.value); 
//     };

//     const sendMessage = () => {
//         if (sharedData.trim() !== '') {
//             setMessages([...messages, { text: sharedData, isUser: true }]); 
//             setSharedData(''); 
//         }
//     };

//     useEffect(() => {
//         console.log('Updated messages:', messages);
//     }, [messages]);

//     return (
//         <div className="flex flex-col h-screen w-screen bg-grayLight p-4">
//             {/* Header */}
//             <div className="bg-primary text-white flex items-center justify-between px-6 py-4 w-full rounded-tl-lg rounded-tr-lg">
//                 <div className="flex items-center">
//                     <img src="/assets/images/happy.png" alt="Chatbot Logo" className="w-8 h-8 mr-4" />
//                     <span className="text-lg font-bold">FAI Chatbot</span>
//                 </div>
//             </div>

//             {/* Messages */}
//             <div className="flex-grow bg-white p-4 overflow-y-auto space-y-4 w-full">
//                 {messages.map((msg, index) => (
//                     <div key={index} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
//                         <MessageBubble text={msg.text} isUser={msg.isUser} />
//                     </div>
//                 ))}
//             </div>

//             {/* Input */}
//             <div className="bg-white p-4 flex items-center border-t space-x-4 w-full">
//                 <input
//                     type="text"
//                     value={sharedData}
//                     placeholder="Type a message..."
//                     onChange={handleInputChange}
//                     className="flex-grow border border-grayLight rounded-lg p-2 focus:outline-none focus:ring focus:ring-primary"
//                 />
//                 <button
//                     onClick={sendMessage}
//                     className="circle-button shadow-custom"
//                     style={{ width: "48px", height: "48px", "--button-size": "48px" }}
//                 >
//                     <ion-icon name="send" className="circle-icon"></ion-icon>
//                 </button>
//             </div>

//             {/* Footer */}
//             <footer className="bg-white p-4 rounded-bl-lg rounded-br-lg">
//                 <div className="flex justify-center items-center gap-6">
//                     <button className="circle-button shadow-custom" onClick={goHome}>
//                         <ion-icon name="arrow-back" className="circle-icon"></ion-icon>
//                     </button>
//                     <button className={`circle-button shadow-custom ${recording ? 'listening' : ''}`}
//                         style={{ width: "80px", height: "80px", "--button-size": "80px" }}
//                         onClick={recording ? stopRecording : startRecording}
//                     >
//                         {recording ? (
//                             <div className="soundwave">
//                                 <span></span>
//                                 <span></span>
//                                 <span></span>
//                                 <span></span>
//                                 <span></span>
//                             </div>
//                         ) : (
//                             <ion-icon name="mic" className="circle-icon"></ion-icon>
//                         )}
//                     </button>
//                 </div>
//             </footer>
//         </div>
//     );
// }
