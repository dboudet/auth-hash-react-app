import bcrypt from "bcryptjs"
import { Layout, Form, Input, Button } from "antd"

const mySalt = "$2b$10$ibXdpDiUvdVne89h2QdtKe"

export default function Signup({ setToken, setReturningUser }) {
  const { Content } = Layout

  function handleSignup({ email, password }) {
    const hashedPassword = bcrypt.hashSync(password, mySalt)
    fetch("https://auth-hash-api-db.web.app/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password: hashedPassword }),
    })
      .then((response) => response.json())
      .then((data) => {
        setToken(data.token)
      })
      .catch((err) => alert(err))
  }

  return (
    <Content style={{ height: "70vh" }}>
      <div className="signup-form">
        <h2>Sign Up</h2>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={handleSignup}
          size={"large"}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email." }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter a password." }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
            &nbsp;&nbsp;
            <Button type="ghost" onClick={() => setReturningUser(true)} htmlType="button">Go to Login</Button>
          </Form.Item>
        </Form>
      </div>
    </Content>
  )
}
