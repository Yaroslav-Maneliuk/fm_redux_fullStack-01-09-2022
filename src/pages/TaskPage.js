import React from "react";
import TasksList from '../components/ToDo/TasksList';
import TaskForm from '../components/ToDo/TaskForm';

const TaskPage = () => {
  return (
    <div>
      <TaskForm />
      <TasksList />
    </div>
  );
};

export default TaskPage;
