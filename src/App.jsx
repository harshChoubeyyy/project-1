import { useState } from "react"

const app = () => {

    const [boor , setboor] = useState(0)

    const handleClick  = () => {
      setboor((prev) => prev+1)
    }

  return (
    <>
      <button onClick={handleClick}>{boor}</button>
    </>
  )
}

export default app