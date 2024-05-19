import GridElementsList from "./GridElementsList";

function GridRow(props) {
    const selectedElementChangeHandler = (selectedElementCoordinates) => {
        props.onSelectedElementChange(selectedElementCoordinates)
    }


    return (
        <div style={{display: 'flex', flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
            <GridElementsList
                onSelectedElementChange={selectedElementChangeHandler}
                rowNumber={props.rowNumber}
            />
        </div>
    )
}

export default GridRow;