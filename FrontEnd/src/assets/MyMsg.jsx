
const MyMsg = () => {

    const messages={
        msg: "This is a sample reply message",
        time: "1:00 pm",
    };

    return (
        <div className="myMsg-container">
            <div>
              <p className="myMsg-msg">{messages.msg}</p>
              <p className="myMsg-time">{messages.time}</p>
            </div>
        </div>
    );
};

export default MyMsg;