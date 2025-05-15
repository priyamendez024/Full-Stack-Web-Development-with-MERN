import React from 'react';

export default function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map(task => <li key={task._id}>{task.title}</li>)}
    </ul>
  );
}