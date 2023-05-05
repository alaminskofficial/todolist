import React, { useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import CancelIcon from '@material-ui/icons/Cancel';
const ToDoLists = (props) => {
    return (
        <><div className='todo_style'>
        <Tooltip title="Delete Item">
        <CancelIcon className= "fa-times" onClick={()=>{
            props.onSelect(props.id);
        }}/></Tooltip>
            <li>{props.text}</li>
        </div>

        </>

    );
}
export default ToDoLists;