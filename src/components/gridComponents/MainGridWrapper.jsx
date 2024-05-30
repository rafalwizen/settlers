import MainGrid from "./MainGrid";
import classes from './MainGridWrapper.module.css';

function MainGridWrapper() {
    return (
        <div className={classes.grid} style={{display: 'inline-block'}}>
            <MainGrid/>
        </div>
    )
}

export default MainGridWrapper;