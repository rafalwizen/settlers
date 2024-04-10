import GridRow from "./GridRow";

function MainGrid() {
    const gridElements = [];
    for (let i = 0; i < 10; i++) {
        gridElements.push(<GridRow/>);
    }
    return gridElements;
}

export default MainGrid;