import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
      <div className="flex h-screen justify-center items-center bg-gradient-to-t from-blue-200 to-indigo-900 ">
        {/* <Card.Body> */}
        <div className="bg-gradient-to-t from-blue-200 to-indigo-900  drop-shadow-md rounded-md flex-col space-y-4  max-w-md box-border">
          <h2 className="text-center mb-4 text-white text-xl font-bold mt-5 mb-10">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email" className="max-w-md mx-10">
              <Form.Label className="text-white text-center font-bold text-md ml-[0rem] mr-[0.5rem]">Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} type="submit" className="text-indigo-900 text-center font-bold text-md mt-5 ml-[5.9rem]">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-30 text-indigo-900 text-center font-bold text-md">
            <a href="/login">Login</a>
          </div>
        {/* </Card.Body> */}
      <div className="w-100 text-center mt-30 text-indigo-900 text-center font-bold text-md">
        Need an account? <a href="/signup">Sign Up</a>
      </div>
      </div>
      </div>
    </>
  )
}