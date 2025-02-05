import DoneIcon from '@mui/icons-material/Done';
import { IconButton } from '@mui/material';

const CreateGrp = () => {

    return (
        <div className="createGrp-container">
            <div>
              <input type="text" placeholder='Create group name' />
              <IconButton>
                  <DoneIcon />
              </IconButton>
            </div>
        </div>
    );
};

export default CreateGrp;