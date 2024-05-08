import classes from './GrassElement.module.css';

function GrassElement(props) {

    return (
        <div className={classes.grass} style={{width: props.size, height: props.size}}></div>
    );
}

export default GrassElement;