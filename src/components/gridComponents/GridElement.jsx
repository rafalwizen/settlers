import classes from './GridElement.module.css';
import RockElement from "./gridElementTypes/RockElement";
import GrassElement from "./gridElementTypes/GrassElement";

function GridElement() {

    const elementToRender = () => {
        const rand = Math.random();
        let elemType = <RockElement/>;
        if (rand < 0.8) {
            elemType = <GrassElement/>;
        }
        return elemType;
    }

    return (
        <div className={classes.item}>
            {elementToRender()}
        </div>
    );
}

export default GridElement;