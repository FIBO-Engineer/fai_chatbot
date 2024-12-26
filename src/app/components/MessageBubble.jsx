const MessageBubble = ({ text, isUser = false }) => {
    return (
      <div
        className={`${
          isUser
            ? "bg-grayLight text-grayDark text-right items-end"
            : "bg-secondary text-white self-start items-start"
        } rounded-lg p-2 min-w-fit inline-block break-words`}
      >
        {text}
      </div>
    );
  };
  
  export default MessageBubble;
  