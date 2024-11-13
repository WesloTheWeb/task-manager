import { useEffect, useState } from 'react';
import classes from './TasksList.module.scss';

const {
  container,
  title,
  message,
  error,
  empty,
  loading,
  tasksList,
  taskItem,
  taskCompleted
} = classes;

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const TasksList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/tasks', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }
        
        // ? Common of grabbing the JSON and plugging that into local state to iterate over.
        const data = await response.json() as Task[];
        setTasks(data);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (isLoading) {
    return (
      <section className={container}>
        <p className={`${message} ${loading}`}>Loading tasks...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={container}>
        <p className={`${message} ${error}`}>Error: {error}</p>
      </section>
    );
  }

  return (
    <section className={container}>
      <h2 className={title}>Tasks</h2>
      {tasks.length === 0 ? (
        <p className={`${message} ${empty}`}>No tasks available</p>
      ) : (
        <ul className={tasksList}>
          {tasks.map((task) => (
            <li 
              key={task.id}
              className={taskItem}
            >
              <input
                type="checkbox"
                checked={task.completed}
                readOnly
              />
              <span className={task.completed ? taskCompleted : ''}>
                {task.title}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default TasksList;