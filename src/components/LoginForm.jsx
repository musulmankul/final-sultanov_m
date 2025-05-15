import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../store/slices/loginFormSlice'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateEmail(email)) {
      dispatch(login(email))
      setError('')
    } else {
      setError('Чувааак напиши норм почту')
    }
  }
  
  const handleChange = (e) => {
    const value = e.target.value
    setEmail(value)
    if (value && !validateEmail(value)) {
      setError('Чувааак напиши норм почту')
    } else {
      setError('')
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-2xl font-bold text-center">Заходи</h1>
      <div>
        <label className="block text-gray-700 mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="email@example.com"
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
      <button 
        type="submit"
        disabled={!email || error}
        className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Login
      </button>
    </form>
  )
}

export default LoginForm