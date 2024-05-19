import GridRow from "./GridRow";
import { useState, useEffect} from "react";

function MainGrid() {
    const [selectedGridElementCoordinates, setSelectedGridElementCoordinates] = useState(null);
    const gridElements = [];

    useEffect(() => {

        console.log(selectedGridElementCoordinates)

    },[selectedGridElementCoordinates])

    const selectedElementChangeHandler = (selectedElementCoordinates) => {
        setSelectedGridElementCoordinates(selectedElementCoordinates)
    }

    for (let i = 0; i < 10; i++) {
        gridElements.push(
            <GridRow
                onSelectedElementChange={selectedElementChangeHandler}
                rowNumber={i}
                key={i}/>
        );
    }
    return gridElements;
}

export default MainGrid;