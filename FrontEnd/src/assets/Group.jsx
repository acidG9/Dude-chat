import PropTypes from "prop-types";

const Group = ({props}) => {

    return (
        <div className="group-container">
            <div className="grp-dp">
              <p>{props.name[0].toUpperCase()}</p>
            </div>
            <div className="grp-info">
              <p>{props.name}</p>
            </div>
        </div>
    );
};

Group.propTypes={
    props: PropTypes.object.isRequired,
    name: PropTypes.string,
}

export default Group;