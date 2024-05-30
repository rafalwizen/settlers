import classes from './Tree.module.css';

function Tree(props) {

    return (
        <div className={classes.tree} style={{width: props.size, height: props.size}}>
            <img src="/images/tree1.png" style={{width: props.size}}/>
        </div>
    );
}

export default Tree;