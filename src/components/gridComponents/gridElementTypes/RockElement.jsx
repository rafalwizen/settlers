import classes from './RockElement.module.css';

function RockElement(props) {

    return (
        <div className={classes.rock} style={{width: props.size, height: props.size}}>
            <img src="/images/rock.png" style={{width: props.size}}/>
        </div>
    );
}

export default RockElement;