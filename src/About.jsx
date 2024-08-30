import { useState } from 'react'

function About() {
  const [count, setCount] = useState(0)

  const throwError = () => {
    throw new Error('Error is thrown')
  }

  return (
    <>
      <h1>About</h1>
      <input type="text"/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => throwError()}>
          Throw Error
        </button>
        <p>
        </p>
      </div>
    </>
  )
}

export default About
