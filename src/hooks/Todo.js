import React, { useState, useCallback, useEffect } from "react";

import "./todo.css";
const Todo = () => {
 
  const [value, setValue] = useState();
  const [showUpdate, setShowUpdate] = useState(false);

  const [editedIndex, setEditedIndex] = useState();
  const [todoItems, setTodoItems] = useState([
    { todo: "hello there  React how are you " },
    { todo: "lets hang out together" },
    { todo: "hope you like it, being with me" },
  ]);

  const handleClick = () => {
    setTodoItems((todoItems) => [...todoItems, { todo: value }]);

    console.dir('rendering');
  };

  const handleEdit = () => {
    setShowUpdate(false)
    setTodoItems((todoItems)=>[...todoItems,todoItems[editedIndex].todo=value])
    setTodoItems(todoItems)

  };

  const deleteTodo = (id) => {
    const updatedItem = todoItems.filter((item, ind) => {
      return ind !== id;
    });
    setTodoItems(updatedItem);
  };

  const updateTodo = (id) => {
    setShowUpdate(true);
    const editedItem = todoItems[id];

    setValue(editedItem.todo);
    setEditedIndex(id);

  
  };

  return (
    <div className="main">
    <p style={{color:"blue",textAlign:'center',fontSize:'40px',textDecoration:'underLine'}}>Todo</p>
      <input
        value={value}
        type="textArea"
        className="input-1"
        onChange={(e) => {
          e.preventDefault();
          setValue(e.target.value);
        }}
      ></input>
      {!showUpdate ? (
        <button className="myBtn-2" onClick={handleClick}>
          Add Todo
        </button>
      ) : (
        <button className="myBtn-2" onClick={handleEdit}>
          Submit
        </button>
      )}

      {todoItems.map((item, ind) => (
        <div>
          <li>{item.todo}</li>
          <button className="myBtn-1" onClick={() => deleteTodo(ind)}>
            remove
          </button>
          <button className="myBtn-1" onClick={() => updateTodo(ind)}>
            Update
          </button>
        </div>
      ))}

    
    </div>
  );
};

export default Todo;
