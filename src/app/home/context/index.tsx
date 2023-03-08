import { create } from 'zustand'

interface Cite {
  patient: string
  description: string
  date: Date
}

interface CiteState {
  cite: Cite | null
  addCite: (cite: Cite | null) => void
}

export const useCiteStore = create<CiteState>()((set) => ({
  cite: null,
  addCite: (cite: Cite | null) => set({ cite }),
}))
// import AppointmentForm from '../components/AppointmentForm'
// import { createContext, useContext, Context, useState } from 'react'

// type Cite = {
//   patient: string
//   description: string
//   date: string
// }
// type CiteCtx = {
//   cite: Cite
//   setCite: (cite: Cite) => void
// }

// const citeContext = createContext<CiteCtx>(null as any)

// export const useCite = () => useContext(citeContext)

// export const CiteProvider: FC = ({ children }) => {
//   const [cite, setCite] = useState<Cite | null>(null)

//   return (
//     <citeContext.Provider value={{ cite, setCite } as any}>
//       {children}
//       {cite && <AppointmentForm />}
//     </citeContext.Provider>
//   )
// }