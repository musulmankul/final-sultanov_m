import { useSelector } from 'react-redux'
import LoginForm from './components/LoginForm'
import LoggedInView from './components/LoggedInView'

function App() {
  const { isLoggedIn } = useSelector(state => state.login)
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {isLoggedIn ? <LoggedInView /> : <LoginForm />}
      </div>
    </div>
  )
}

export default App