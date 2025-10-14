"use client"
import ProcessItem from "./ProcessItem"
import { useProcess } from "./context/ProcessContext"
import { useEffect } from "react"

function ProcessList(){
    const processos = [
    "001.2025.123.556-78",
    "001.2025.123.556-79",
    "001.2025.123.556-80",
    "001.2025.123.556-81",
    "001.2025.123.556-82",
    "001.2025.123.556-83",
    "001.2025.123.556-84",
    "001.2025.123.556-85",
    "001.2025.123.556-86",
    "001.2025.123.556-87",
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
                <ProcessItem key={p} name={p}/>
            ))
        }
        </div>
    )
}

export default ProcessList