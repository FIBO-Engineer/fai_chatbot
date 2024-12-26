export const startChatbot = (setShowChatbot) => {
    try {
        setShowChatbot(true);
        console.log("Navigating to Chatbot...");
    } catch (error) {
        console.error("An error occurred in startChatbot:", error);
    }
};
