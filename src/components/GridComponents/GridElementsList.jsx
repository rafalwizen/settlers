import GridElement from "./GridElement";

function GridElementsList() {
    const gridElements = [];
    for (let i = 0; i < 10; i++) {
        gridElements.push(<GridElement/>);
    }
    return gridElements;
}

export default GridElementsList;