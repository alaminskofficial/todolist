import React, { useState } from 'react';

import CancelIcon from '@material-ui/icons/Cancel';
const ToDoLists = (props) => {
    return (
        <><div className='todo_style'>
        <CancelIcon className= "fa-times" onClick={()=>{
            props.onSelect(props.id);
        }}/>
            <li>{props.text}</li>
        </div>

        </>

    );
}
export default ToDoLists;