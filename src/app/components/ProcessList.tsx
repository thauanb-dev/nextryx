import ProcessItem from "./ProcessItem"

function ProcessList(){
    return(
        <div className="m-3 flex flex-wrap  gap-4 min-w-[80vw] min-h-[20vh] p-2 ">
            <ProcessItem name="001.2025.123.556-78"/>
            <ProcessItem name="001.2025.123.556-79"/>
            <ProcessItem name="001.2025.123.556-80"/>
            <ProcessItem name="001.2025.123.556-81"/>
            <ProcessItem name="001.2025.123.556-82"/>
            <ProcessItem name="001.2025.123.556-83"/>
            <ProcessItem name="001.2025.123.556-84"/>
            <ProcessItem name="001.2025.123.556-85"/>
        </div>
    )
}

export default ProcessList