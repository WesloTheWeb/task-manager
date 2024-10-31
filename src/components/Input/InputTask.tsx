import { useState } from 'react';
import classes from './InputTask.module.scss';

const {
    taskContainer,
    formTitle,
    importanceSection,
    radioGroup,
    submitButton
} = classes;

const InputTask = () => {
    const [taskData, setTaskData] = useState({
        name: '',
        description: '',
        importance: 'medium'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTaskData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Task Data:', taskData);
        // TODO Handle form submission here
    };

    return (
        <form onSubmit={handleSubmit}>
            <section className={taskContainer}>
                <h3 className={formTitle}>Enter a new task below</h3>
                <div>
                    <label>Task name:</label>
                    <input
                        type="text"
                        name="name"
                        value={taskData.name}
                        onChange={handleChange}
                        placeholder='Enter task'
                    />
                </div>

                <div>
                    <label>Description:</label>
                    <input
                        type="text"
                        name="description"
                        value={taskData.description}
                        onChange={handleChange}
                        placeholder='Enter description'
                    />
                </div>

                <section className={importanceSection}>
                    <p>Importance</p>
                    <div className={radioGroup}>
                        {['low', 'medium', 'heavy'].map((level) => (
                            <label key={level}>
                                <input
                                    type="radio"
                                    name="importance"
                                    value={level}
                                    checked={taskData.importance === level}
                                    onChange={handleChange}
                                />
                                {level}
                            </label>
                        ))}
                    </div>
                </section>

                <button type="submit" className={submitButton}>
                    Add Task
                </button>
            </section>
        </form>
    );
};

export default InputTask;