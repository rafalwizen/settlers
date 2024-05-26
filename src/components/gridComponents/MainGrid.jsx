import GridRow from "./GridRow";

function MainGrid() {
    const gridElements = [];

    for (let i = 0; i < 10; i++) {
        gridElements.push(
            <GridRow
                rowNumber={i}
                key={i}/>
        );
    }
    return gridElements;
}

export default MainGrid;