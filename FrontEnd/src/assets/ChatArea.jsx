import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import MyMsg from './MyMsg';
import YourMsg from './YourMsg';

const ChatArea = () => {

    return (
        <div className="chatArea-container">
            <div className="chat-head">
                <div>
                    <div className='dp-chat-head'>
                        <p>T</p>
                    </div>
                    <div className='info-chat-head'>
                        <h3>TestName</h3>
                        <p>today</p>
                    </div>
                </div>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
            </div>
            <div className="chat-space">
                <YourMsg />
                <MyMsg />
                <YourMsg />
                <MyMsg />
                <YourMsg />
                <MyMsg />
                <YourMsg />
                <MyMsg />
                <YourMsg />
                <YourMsg />
                <MyMsg />
                <YourMsg />
                <MyMsg />
                <YourMsg />
                <MyMsg />
                <MyMsg />
                <YourMsg />
                <MyMsg />
            </div>
            <div className="chat-send">
                <input type="text" placeholder='Send a Hello!'/>
                <IconButton>
                    <SendIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default ChatArea;