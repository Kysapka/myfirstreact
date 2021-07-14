import React, {useEffect, useState} from "react";
import styles from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }

    useEffect( () => {
        setStatus(props.status);
    }, [props.status])

    const deActivateEditMode = ()  => {
        setEditMode(false);
        props.updateStatus(status);
    }

   const onStatusChange = (e) => {
       setStatus(e.currentTarget.value);
    }

    return (
        <div>
            { !editMode &&
            <div>
                <span onDoubleClick={ activateEditMode }>{props.status || "Set your status here"} Yo </span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={ deActivateEditMode }
                       value={status} />
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;