import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../../contexts/AuthContext"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  // const history = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      console.log("before redire");
      window.location = "/Home";
    } catch { 
      setError("Failed to log in")
      console.log('error')
    }

    setLoading(false)
  }

  return (
    <>
      <div className="flex h-screen justify-center items-center bg-gradient-to-t from-blue-200 to-indigo-900 ">
        {/* <Card.Body> */}
        <div className="bg-gradient-to-t from-blue-200 to-indigo-900  drop-shadow-md rounded-md flex-col space-y-4  max-w-md box-border">
          <h2 className="text-center mb-4 text-white text-[25px] font-bold mt-5 mb-10">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email" className="max-w-md mx-10">
              <Form.Label className="text-white font-bold text-md ">Email</Form.Label>
              <Form.Control className="mx-5" type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group className="mt-6 max-w-md mx-3" id="password"  >
              <Form.Label className="text-white font-bold text-md ">Password</Form.Label>
              <Form.Control className="mx-5"type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading}  className="text-indigo-900 text-center font-bold text-md mt-5 ml-[8rem] text-[25px] " type="submit">
              Log In
            </Button>
          </Form>
      <div className="w-100 text-center mt-30 text-indigo-900 text-center font-bold text-[15px]">
         Need an account? <a href="/signup">Sign Up</a> 
      </div>
          <div className="w-100 text-center font-bold text-[10px]">
            <a className="text-indigo-900" href="/forgot-password">Forgot Password?</a>
          </div>
          </div>
        {/* </Card.Body> */}
      </div>
      {error}
    </>
  )
}