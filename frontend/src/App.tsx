import { ChangeEvent, useEffect, useState } from 'react'
import './App.css'
function App() {
  const [user, setUser] = useState<object>()

  const fetchData = async(param: string)=> {
    const fetched = await fetch(`http://localhost:4516/api/${param}`)
    const foundUser = await fetched.json()
    setUser(foundUser?.message?.email)
   }
  const inputChangeHandler = async (e: ChangeEvent<HTMLInputElement>)=>{
     fetchData(e.target.value as string)
  }


  useEffect(()=> {fetchData(`kauanAg `)}, [])

  return (
    <>
    <input type="text" onChange={inputChangeHandler}/>
   {user}
    </>
  )
}

export default App
