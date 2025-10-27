"use client"
import ProcessItem from "./ProcessItem"
import { useProcess } from "./context/ProcessContext"
import { useEffect } from "react"
//tipar processList
function ProcessList(){
    const processos = [
  { "name": "001.2025.123.556-78", "key": crypto.randomUUID() },
  { "name": "001.2025.123.556-79", "key": crypto.randomUUID() },
  { "name": "001.2025.123.556-80", "key": crypto.randomUUID() },
  { "name": "001.2025.123.556-81", "key": crypto.randomUUID() },
  { "name": "001.2025.123.556-82", "key": crypto.randomUUID() },
  { "name": "001.2025.123.556-83", "key": crypto.randomUUID() },
  { "name": "001.2025.123.556-84", "key": crypto.randomUUID() },
  { "name": "001.2025.123.556-85", "key": crypto.randomUUID() },
  { "name": "001.2025.123.556-86", "key": crypto.randomUUID() },
  { "name": "001.2025.123.556-87", "key": crypto.randomUUID() }
]
  //utilizando o hook personalizado do ProcessContext
  const {setTotal} = useProcess() 

  // Atualiza o valor global sempre que a lista mudar
    useEffect(()=>{
        setTotal(processos.length)
    },[processos,setTotal])

    return(
        <div className="m-3 flex flex-wrap  gap-4 min-w-[80vw] min-h-[20vh] p-2 ">
        {
            processos.map((p)=>(
                <ProcessItem key={p.key.toString()} name={p.name}/>
            ))
        }
        </div>
    )
}

export default ProcessList