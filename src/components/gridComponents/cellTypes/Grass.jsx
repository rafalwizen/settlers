import classes from './Grass.module.css';

function Grass(props) {

    return (
        <div className={classes.grass} style={{width: props.size, height: props.size}}></div>
    );
}

export default Grass;