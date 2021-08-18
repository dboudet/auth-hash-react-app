import { useState } from "react"
import { Layout } from "antd"
import "antd/dist/antd.css"
import "./App.css"
import Signup from "./components/Signup"
import Login from "./components/Login"
import ProtectedForm from "./components/ProtectedForm"

export default function App() {
  const [token, setToken] = useState()
  const [returningUser, setReturningUser] = useState(false)
  const { Header, Footer } = Layout

  if (!token) {
    return (
      <Layout>
        <Header>
          <h1>Header</h1>
        </Header>
        {!returningUser ? (
          <Signup setToken={setToken} setReturningUser={setReturningUser} />
        ) : (
          <Login setToken={setToken} setReturningUser={setReturningUser} />
        )}
        <Footer>Footer</Footer>
      </Layout>
    )
  }
  return (
    <Layout>
      <Header>
        <h1>Header</h1>
      </Header>
      <ProtectedForm token={token} />
      <Footer>Footer</Footer>
    </Layout>
  )
}
