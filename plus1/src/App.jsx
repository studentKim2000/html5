import { useState } from "react"

function App() {

  const [a, set_a] = useState(0)
  const [z, set_z] = useState(0)


  function plus1()
  {
    let b = a + 1
    set_a(b)    
  }

  function h1()
  {
    alert('홍길동 반가워')
  }

  function h2()
  {
    alert('윤서 사랑해~')
  }

  function plus1_z()
  {    
    set_z(z + 1)    
  }

  return (
    <>  
      <button onClick={plus1}>현재 상태 : {a}</button>
      <br />
      <button onClick={h1}>홍길동</button>
      <br />
      <button onClick={h2}>윤서</button>
      <br />
      <button onClick={plus1_z}>현재 상태 : {z}</button>
    </>
  )
}

export default App
