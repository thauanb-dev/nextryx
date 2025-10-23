"use client"
import { useProcess } from "./context/ProcessContext"
import { useEffect, useState } from "react"
import { columns, DefProcess } from "./data/columns"
import { DataTable } from "./data/data-table"
//tipar processList
const uuid = ()=> crypto.randomUUID()
async function getData(): Promise<DefProcess[]> {
  // Fetch data from your API here.
  const data: DefProcess[] = [
    {
    id:uuid(),
    tag: "Consulta Propriedade",
    process_number: "001.2025.123.556-78",
    status: "pendente"
    },
    {
    id:uuid(),
    tag: "Georreferenciamento",
    process_number: "001.2025.123.556-79",
    status: "concluido"
    },
    {
    id:uuid(),
    tag: "Análise de Documentos",
    process_number: "001.2025.123.556-80",
    status: "em atendimento"
    }
  ]
  console.log(data)
  return data
}


function ProcessList(){
    const [data, setData] = useState<DefProcess[]>([])
  //utilizando o hook personalizado do ProcessContext
  const {setTotal} = useProcess() 
  //puxando os dados
  useEffect(() => {
    getData().then(setData)
  }, [])
  // Atualiza o valor global sempre que a lista mudar
    useEffect(()=>{
        setTotal(data.length)
    },[data,setTotal])

    return(
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
    )
}

export default ProcessList
