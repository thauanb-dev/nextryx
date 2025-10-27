"use client"
import '../layout.css'
import {Trash , Copy } from 'lucide-react'

export interface  ProcessItemProps{
    name : string
    onDelete: () => void //evento personalizado para deletar
    onCopy: () => void //evento personalizado para copiar  
}

//TODO - Criar uma classe?/atalho no tailwindcss para simplificar as classes repetidas
//TODO - Lógica para Deletar Processo
//TODO - Modal para adicionar  Processo
//TODO - Modal para abrir processo e ver/editar o conteudo
//TODO - TAGS 
//TODO - Tornar os processo arrastaveis
//TODO - Melhorar a experiencia UI

function ProcessItem({ name, onDelete, onCopy }: ProcessItemProps) {
  return (
    <div
      className="flex h-[50px] w-[250px] border-l-8 border-green-500 bg-emerald-50 text-stone-900 rounded-xl hover:shadow-neutral-300 hover:shadow-md  transition-all duration-300 cursor-pointer items-center p-1 gap-2 "
      onClick={(e) => {
        console.log(e);
      }}
    >
      <div className="flex border-slate-300 border-r-2 p-1">
        <Trash
          size={16}
          height={16}
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        />
        <Copy
          size={16}
          height={16}
          onClick={(e) => {
            e.stopPropagation();
            onCopy();
          }}
        />
      </div>
      <p>{name}</p>
    </div>
  );
}

export default ProcessItem