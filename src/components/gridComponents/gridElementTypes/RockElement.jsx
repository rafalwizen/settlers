import classes from './RockElement.module.css';

function RockElement(props) {

    return (
        <div className={classes.rock}>
            <img src="/images/rock.png" style={{width: 30}}/>
        </div>
    );
}

export default RockElement;