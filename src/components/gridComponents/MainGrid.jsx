import GridRow from "./GridRow";

function MainGrid() {
    const gridElements = [];
    const gridSize = 11;

    for (let i = -1 * Math.floor(gridSize/2); i <= Math.floor(gridSize/2); i++) {
        gridElements.push(
            <GridRow
                gridSize={gridSize}
                rowNumber={i}
                key={i}/>
        );
    }
    return gridElements;
}

export default MainGrid;