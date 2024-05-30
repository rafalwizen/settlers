import classes from './Rock.module.css';

function Rock(props) {

    return (
        <div className={classes.rock} style={{width: props.size, height: props.size}}>
            <img src="/images/rock.png" style={{width: props.size}}/>
        </div>
    );
}

export default Rock;