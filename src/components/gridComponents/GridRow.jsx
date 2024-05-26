import GridElementsList from "./GridElementsList";

function GridRow(props) {
    return (
        <div style={{display: 'flex', flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
            <GridElementsList
                rowNumber={props.rowNumber}
            />
        </div>
    )
}

export default GridRow;