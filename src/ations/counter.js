import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const clickIncreaseCount = () => {
    setCount(count + 1)
  }
  const clickReduce = () => {
    if (count >= 1) {
      setCount(count - 1)
    }
  }
  return (
    <div className="Counter">
      <h4>{count}</h4>
      <button onClick={clickIncreaseCount}> +</button>
      <button onClick={clickReduce}> -</button>
    </div>
  )
}

export default Counter
