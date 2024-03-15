
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux'
import { addTodo, updateTodo } from '../Redux/slices/todoSlice.js'

import { format } from 'date-fns';
import Button from './Button.jsx';

import { v4 as uuid } from 'uuid';
import { MdOutlineClose } from 'react-icons/md';

const TodoModal = ({ type, modalOpen, setModalOpen, todo }) => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');

  useEffect(() => {
    if (type === 'update' && todo) {
       setTitle(todo.title);
       setStatus(todo.status);
    } else {
      setTitle('');
      setStatus('incomplete');
    }
  }, [modalOpen]);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === '') {
      toast.error('Please enter a title');
      return;
    }

    if (title && status) {
       if (type === 'add') {
          dispatch(
              addTodo({
                id: uuid(),
                title,
                status,
                time: format(new Date(), 'p, MM/dd/yyyy'),
              })
          );

          toast.success('Task added successfully');
       }

       if (type === 'update') {
        if (todo.title !== title || todo.status !== status) {
          dispatch(updateTodo({ ...todo, title, status }));
          toast.success('Task Updated successfully');
        } else {
          toast.error('No changes made');
          return;
        }
       }

       setModalOpen(false);
    }
  };


  return (
    // <div>
    //   {modalOpen && (
    //     <form className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onSubmit={(e) => e.handleSubmit(e)}>
    //       <div className="bg-white p-8 rounded-md shadow-lg w-80">
    //         <h1 className="text-lg font-bold mb-4">{type === 'add' ? 'Add' : 'Update'} Todo</h1>
    //         <label className="block mb-4">
    //           Title
    //           <input
    //             className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    //             type="text"
    //             id="title"
    //             value={title}
    //             onChange={(e) => setTitle(e.target.value)}
    //           />
    //         </label>
    //         <label className="block mb-4">
    //           Status
    //           <select
    //             className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    //             value={status}
    //             onChange={(e) => setStatus(e.target.value)}
    //           >
    //             <option value="incomplete">Incomplete</option>
    //             <option value="complete">Completed</option>
    //           </select>
    //         </label>
    //         <div className="flex justify-end">
    //           <button
    //             className="mr-2 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
    //             onClick={() => setModalOpen(false)}
    //           >
    //             Cancel
    //           </button>
    //           <button
    //             className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
    //             onClick={() => {
    //               // Handle form submission here
    //               setModalOpen(false);
    //             }}
    //           >
    //             {type === 'add' ? 'Add Task' : 'Update Task'}
    //           </button>
    //         </div>
    //       </div>
    //     </form>
    //   )}
    // </div>


    <>
      {modalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-end">
              <button onClick={() => setModalOpen(false)}>
                <MdOutlineClose />
              </button>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <h1 className="text-xl mb-4">
                {type === 'add' ? 'Add' : 'Update'} TODO
              </h1>
              <label htmlFor="title" className="block mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
              />
              <label htmlFor="type" className="block mb-2">
                Status
              </label>
              <select
                id="type"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
              >
                <option value="incomplete">Incomplete</option>
                <option value="complete">Completed</option>
              </select>
              <div className="flex justify-end">
                <Button type="submit" variant="primary">
                  {type === 'add' ? 'Add Task' : 'Update Task'}
                </Button>
                <Button
                  onClick={() => setModalOpen(false)}
                  variant="secondary"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default TodoModal