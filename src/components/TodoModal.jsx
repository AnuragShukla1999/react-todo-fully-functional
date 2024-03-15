
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux'

const TodoModal = ({ modalOpen, setModalOpen }) => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');

  useEffect(() => {
    if (type === 'update' && todo) {

    }
  });


  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === '') {
      toast.error('Please enter a title');
      return;
    }

    if (title && status) {
       
    }
  }


  return (
    <div>
      {modalOpen && (
        <form className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onSubmit={(e) => e.preventDefault()}>
          <div className="bg-white p-8 rounded-md shadow-lg w-80">
            <h1 className="text-lg font-bold mb-4">Todo</h1>
            <label className="block mb-4">
              Title
              <input
                className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label className="block mb-4">
              Status
              <select
                className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="incomplete">Incomplete</option>
                <option value="complete">Completed</option>
              </select>
            </label>
            <div className="flex justify-end">
              <button
                className="mr-2 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
                onClick={() => {
                  // Handle form submission here
                  setModalOpen(false);
                }}
              >
                Save
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  )
}

export default TodoModal