import React, { useState } from 'react';
import ToDoLists from './ToDoLists';
const App = () => {
    const [itemValue, updatedItemValue] = useState("");
    const [item, setItems] = useState([]);
    const ItemEvent = (e) => {
        updatedItemValue(e.target.value);
    };

    const ListItems = () => {
        setItems((oldItems) => {
            return [...oldItems, itemValue];
        });
        updatedItemValue("");
    };
    const DeleteItem = (id) => {
       console.log('deleted');
       setItems((oldItems) =>{
          return oldItems.filter((arrElement , index)=>{
              return index !==id;
          }); 
       });
    };

    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type='text' placeholder='Add a Items' onChange={ItemEvent}
                        value={itemValue} />
                    <button onClick={ListItems}> +</button>
                    <ol>
                        {item.map((ival , index) => {
                            return <ToDoLists text={ival}
                               id ={index}
                               key ={index}
                               onSelect={DeleteItem} />;
                        })}

                    </ol>
                </div>

            </div>
        </>
    );
}
export default App;