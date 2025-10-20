"use client"
import {Package , FolderOpen , Tag } from 'lucide-react'
import { useProcess } from './context/ProcessContext'
function ProcessBar(){
    const {total} = useProcess()
    return(
    <div className="w-full  flex 
    shadow-sm border border-stone-700 ">
            <div className='flex p-2 mx-0.5 border-stone-700  border-r-1 text-xl'>
                <Package className='size-7 text-emerald-600 '/>
                <p className='text-emerald-600'>{total}</p>
            </div>
            <div className='flex p-2 mx-0.5 border-stone-700  border-r-1 gap-1'>
                <FolderOpen aria-label='Criar Processo' className='size-7 text-stone-600  transition-colors duration-200 hover:text-emerald-600 hover:scale-110 '/>

            </div>
            <div className='flex p-2 mx-0.5 border-stone-700  border-r-1 gap-1'>
                            <Tag className='size-7 text-stone-600  transition-colors duration-200 hover:text-emerald-600 hover:scale-110'/>
            </div>




    </div>
    )
}

export default ProcessBar