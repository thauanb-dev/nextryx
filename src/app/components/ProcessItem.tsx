"use client"
import '../layout.css'
import {Trash , Plus } from 'lucide-react'
interface ProcessItemProps{
    name : string
}

//TODO - Criar uma classe?/atalho no tailwindcss para simplificar as classes repetidas

function ProcessItem({name}:ProcessItemProps){
    return(
            <div className="flex h-[50px] w-[250px] border-l-8 border-green-500 bg-emerald-50 text-stone-900 rounded-xl hover:shadow-neutral-300 hover:shadow-md  transition-all duration-300 cursor-pointer items-center p-1 gap-2 ">
                <div className="flex border-slate-300 border-r-2 p-1">
                    <Plus onClick={()=>{alert('Adicionar')}}/>
                    <Trash onClick={()=>{alert('Deletar')}}/>
                </div>
                <p>{name}</p>
            </div>

    )
}

export default ProcessItem