import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Add from './Add'
import UsernameForm from './UsernameForm'
import SignupForm from './SignupForm'
import BetterSignupForm from './BetterSignupForm'
const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
];

import SetScores from './SetScores'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Counter /> */}
      {/* <Add /> */}
      {/* <SetScores /> */}
      {/* <UsernameForm /> */}
      {/* <SignupForm /> */}
      <BetterSignupForm />
    </>
  )
}

export default App
