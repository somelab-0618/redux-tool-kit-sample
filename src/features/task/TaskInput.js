import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newTask } from './taskSlice';

const TaskInput = () => {
  const dispatch = useDispatch();
  const [editTitle, setEditTitle] = useState('');
  const handleTitleChange = (e) => {
    setEditTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newTask(editTitle));
    setEditTitle('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={editTitle} onChange={handleTitleChange} />
        <button>追加</button>
      </form>
    </div>
  );
};

export default TaskInput;
