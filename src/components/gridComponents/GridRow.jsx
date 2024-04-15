import GridElementsList from "./GridElementsList";

function GridRow() {
    return (
        <div style={{display: 'flex', flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
            <GridElementsList/>
        </div>
    )
}

export default GridRow;