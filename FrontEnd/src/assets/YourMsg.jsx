
const YourMsg = () => {

    const messages={
        name: "TestName",
        msg: "This is a sample Hii message",
        time: "1:00 pm",
    };

    return (
        <div className="yourMsg-container">
            <div>
              <h3 className="yourMsg-name">{messages.name}</h3>
              <p className="yourMsg-msg">{messages.msg}</p>
              <p className="yourMsg-time">{messages.time}</p>
            </div>
        </div>
    );
};

export default YourMsg;