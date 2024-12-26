export const goHome = (setShowChatbot, recording, stopRecording) => {
    try {
        if (recording) {
            stopRecording(); 
            console.log("Stopped recording...");
        }
        setShowChatbot(false); 
        console.log("Returning to Home...");
    } catch (error) {
        console.error("An error occurred in goHome:", error);
    }
};