import classes from './GridElement.module.css';
import RockElement from "./gridElementTypes/RockElement";
import GrassElement from "./gridElementTypes/GrassElement";
import TreeElement from "./gridElementTypes/TreeElement";

function GridElement() {

    const size = 60;

    const elementToRender = () => {
        const rand = Math.random();
        if (rand > 0.9) {
            return <RockElement size={size}/>;
        } else if (rand > 0.6) {
            return <TreeElement size={size}/>;
        } else {
            return <GrassElement size={size}/>;
        }
    }

    return (
        <div className={classes.item} style={{width: size, height: size}}>
            {elementToRender()}
        </div>
    );
}

export default GridElement;