import GridRow from "./GridRow";

function MainGrid() {
    const gridElements = [];
    const gridSize = 11;

    for (let i = 0; i < gridSize; i++) {
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