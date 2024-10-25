import classes from './Task.module.scss';

interface TaskProps {
    title: string;
    description: string | null;
};

const Task = ({title, description}: TaskProps) => {

    return (
        <div>
            <section>
                {title}
            </section>
            <section>
                {description}
            </section>
        </div>
    )
};

export default Task