import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/slices/loginFormSlice'

function LoggedInView() {
  const { email } = useSelector(state => state.login)
  const dispatch = useDispatch()
  
  const handleLogout = () => {
    dispatch(logout())
  }
  
  return (
    <div className="text-center space-y-4">
      <h1 className="text-2xl font-bold">Велком бич</h1>
      <p className="text-gray-700">Ты зашел через: <span className="font-medium">{email}</span></p>
      <button
        onClick={handleLogout}
        className="w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
      >
        Вышел и зашел нормально
      </button>
    </div>
  )
}

export default LoggedInView