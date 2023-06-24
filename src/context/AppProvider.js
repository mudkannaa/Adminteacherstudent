import { createContext, useContext, useState } from "react"


const AppCtx = createContext()
function AppProvider({children}) {

  const sdataBase = [
    {
      id: 1,
      name: "Karan",
      batch: "B",
      education: "B.E"
    },
    {
      id: 2,
      name: "Ashwini",
      batch: "C",
      education: "B.A"
    },
    
  ]

  const tdataBase = [
    {
      id: 1,
      tname: "Megha Pinate",
      designation: "Principal",
      qualification: "M.Sc,M.Ed",
      experience: "32"
    },
    {
      id: 2,
      tname: "Harshika Bhise",
      designation: "SR.Principal",
      qualification: "M.Sc,M.Ed",
      experience: "48"
    },
    
  ]

  const spages = [
    {
      name: "Student",
      path: "/students/all"
    }
  ]

  const tpages = [
    {
      name: "Teacher",
      path: "/teachers/all"
    }
  ]
  const [crumState, setCrumState] = useState(spages)
  const [tcrumState,setTcrumState] = useState(tpages)

  const [studentData, setData] = useState(sdataBase)
  const [teacherData,setTeacherData] = useState(tdataBase)


  return (
    <AppCtx.Provider
      value = {{
        studentData,
        setData,
        crumState,
        setCrumState,
        teacherData,
        setTeacherData,
        tcrumState,
        setTcrumState
      }}

    >
      {children}
    </AppCtx.Provider>
  )
}

export const Appstate = ()=>{
  return useContext(AppCtx)
}

export default AppProvider
