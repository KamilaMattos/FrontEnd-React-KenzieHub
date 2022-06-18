import { GlobalStyle } from "./styles/global.js"
import { Routes } from "./routes"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
      <ToastContainer />
      <ToastContainer />
      <GlobalStyle />
      <Routes />
    </>
  )
}

export default App
