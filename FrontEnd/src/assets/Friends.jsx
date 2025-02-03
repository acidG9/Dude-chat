import PropTypes from "prop-types";

const Friends = ({props}) => {

    return (
        <div className="friends-container">
            <div className="dp">
              <p className="friend-dp">{props.name[0].toUpperCase()}</p>
            </div>
            <div className="info">
              <p className="friend-name">{props.name}</p>
              <div>
                 <p className="friend-lastMsg">{props.lastMsg}</p>
                 <p className="friend-timestamp">{props.timestamp}</p>
              </div>
            </div>
        </div>
    );
};

Friends.propTypes={
    props: PropTypes.object.isRequired,
    name: PropTypes.string,
    lastMsg: PropTypes.string,
    timestamp: PropTypes.string,
}

export default Friends;