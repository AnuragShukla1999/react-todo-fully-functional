import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TodoModal from './TodoModal';
import Button, { SelectButton } from './Button';

const AppHeader = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const initialFilterStatus = useSelector((state) => state.todo.filterStatus);

  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);

  const dispatch = useDispatch();

  const updateFilter = (e) => {
    setFilterStatus(e.target.value);
    dispatch(updateFilterStatus(e.target.value));
  }


  return (
    <div className="flex justify-between items-center w-full py-4 px-8">
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add Task
      </Button>
      <SelectButton id="status" onChange={(e) => updateFilter(e)} value={filterStatus}>
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Completed</option>
      </SelectButton>
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  )
}

export default AppHeader