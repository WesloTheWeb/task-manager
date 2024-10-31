import classes from './Header.module.scss';

const { siteHeader } = classes;

const Header = () => {

    return (
        <>
            <div className={siteHeader}>
                <h1>Task Manager</h1>
                <sub>Built with Vite, served with Flask, backed with SQLite</sub>
            </div>
        </>
    )

};

export default Header;
