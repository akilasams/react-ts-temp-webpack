import './styles.css'
import IMAGE from './react.png'
import LOGO from './sun.svg'
import { Counter } from './ClickCounter'

export const App = () => {
  return (
    <>
      <h1>MMB AKILA - {process.env.NODE_ENV}</h1>
      <h1>NAME - {process.env.name}</h1>
      <img src={IMAGE} alt="React Logo" width="300" />
      <img src={LOGO} alt="React Logo" width="300" />
      <Counter />
    </>
  )
}
