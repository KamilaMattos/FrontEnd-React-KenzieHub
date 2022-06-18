import { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom"
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"

export const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("@Kenziehub:token")

    if (token) {
      return setAuthenticated(true)
    }
  }, [authenticated])
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/login'>
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path='/register'>
        <Register authenticated={authenticated} />
      </Route>
      <Route path='/dashboard'>
        <Dashboard
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
    </Switch>
  )
}
