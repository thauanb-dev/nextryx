"use client"
import React, { createContext, useContext, useState } from "react"

// 1️⃣ Define o formato dos dados que o contexto vai guardar
interface ProcessContextType {
  total: number
  setTotal: React.Dispatch<React.SetStateAction<number>>
}

// 2️⃣ Cria o contexto com valor inicial vazio (usando asserção de tipo)
const ProcessContext = createContext<ProcessContextType>({} as ProcessContextType)

// 3️⃣ Cria o provider (envolve toda a aplicação ou parte dela)
export function ProcessProvider({ children }: { children: React.ReactNode }) {
  const [total, setTotal] = useState(0)

  return (
    <ProcessContext.Provider value={{ total, setTotal }}>
      {children}
    </ProcessContext.Provider>
  )
}

// 4️⃣ Função para facilitar o uso do contexto em outros componentes
export function useProcess() {
  return useContext(ProcessContext)
}
