import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
 import { useAuth } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  // const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      console.log("before redirte");
      window.location = "/login";
      // history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
      <div className="flex h-screen justify-center items-center bg-gradient-to-t from-blue-200 to-indigo-900 ">
        {/* <Card.Body> */}
        <div className="bg-gradient-to-t from-blue-200 to-indigo-900  drop-shadow-md rounded-md flex-col space-y-4  max-w-md box-border">
          <h2 className="text-center mb-4 text-white text-xl font-bold mt-5 mb-10 text-[25px]">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email" className="max-w-xl mx-10">
            <Form.Label className="text-white text-center font-bold text-md ml-[4rem] mr-[0.5rem]">Email</Form.Label>
            <Form.Control className="mr-[4.5rem]" type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group className="mt-6 max-w-xl mx-3" id="password">
            <Form.Label className="text-white font-bold text-md ml-[4rem] mr-[0.5rem]">Password</Form.Label>
              <Form.Control className="mr-[4.5rem]" type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group className="mt-6 max-w-xl mx-3" id="password-confirm">
              <Form.Label className="text-white font-bold text-md">Confirm Password</Form.Label>
              <Form.Control className="mx-[0.5rem]" type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="text-indigo-900 text-center font-bold text-md mt-5 ml-[12rem] text-[25px]" type="submit">
              Sign Up
            </Button>
          </Form>
        {/* </Card.Body> */}
      <div className="w-100 text-center mt-30 text-indigo-900 text-center font-bold text-md">
        Already have an account? <a href="/login">Log In</a> 
      </div>
      </div>
      </div>
    </>
  )
}