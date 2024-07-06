import { useState } from "react"

const app = () => {

    const [counter , setcounter] = useState(0)

    const handleClick  = () => {
      setcounter((prev) => prev+1)
    }

  return (
    <>
      <button onClick={handleClick}>{counter}</button>
    </>
  )
}

export default app