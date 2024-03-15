import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../Redux/slices/todoSlice.js';
import { format } from 'date-fns';

import { MdDelete, MdEdit } from 'react-icons/md';
import TodoModal from './TodoModal.jsx';

const TodoItem = ({ todo }) => {

  const [checked, setChecked] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const dispatch = useDispatch();


  useEffect(() => {
    if (todo.status === 'complete') {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);



  const handleCheck = () => {
    setChecked(!checked)
    dispatch(updateTodo({ ...todo, status: TodoItem.status === 'complete' ? 'incomplete' : 'complete' }));
  };


  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success('Todo Deleted Successfully');
  };


  const handleUpdate = () => {
    setUpdateModalOpen(true);
  }


  return (
    <div className="flex justify-between items-center w-full p-4 border-b">
      <div className="flex items-center justify-between border-b border-gray-200 py-3">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheck}
            className="mr-3"
          />
          <p
            className={`text-lg ${todo.status === 'complete' ? 'line-through' : ''}`}
          >
            {todo.title}
          </p>
          <p className="text-gray-500 text-sm ml-3">
            {format(new Date(todo.time), 'p, MM/dd/yyyy')}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <button onClick={handleDelete} className="text-red-500">
            <MdDelete />
          </button>
          <button onClick={handleUpdate} className="text-blue-500">
            <MdEdit />
          </button>
        </div>
      </div>

      <TodoModal
        type='update'
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
        todo={todo}
      />
    </div>
  )
}

export default TodoItem