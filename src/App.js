import '../src/styles/global.css'


import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layout and pages
import RootLayout from './layout/RootLayout'
import Dashboard from './pages/Dashboard'
// import Taskdetails, { taskLoaderDetails } from './pages/taskdetails/Taskdetails'
import DashboardLayout from './layout/DashboardLayout'
import VerificationPage, {verificationAction} from './pages/VerificationPage'
import SignUp, {signUpAction} from './pages/SignUp'
import AccountVerified from './pages/AccountVerified'
import Login, {logInAction} from './pages/Login'
// import Taskerror from './pages/taskdetails/Taskerror'

// router and routes
const router = createBrowserRouter(


  createRoutesFromElements(

    
    <Route path="/" element={<RootLayout />}>
      <Route path='/dashboard' element={<DashboardLayout />}  >
        <Route index element={<Dashboard />} />
      </Route >
      <Route path='verification' element={<VerificationPage />} action={verificationAction} />
      <Route path='signup' element={<SignUp />} action={signUpAction}/>
      <Route path='login' element={<Login />} action={logInAction}/>
      <Route path="accountverified" element={<AccountVerified />} />

    </Route>
  )
)

function App() {

  return (
    <RouterProvider  router={router} />
  )
}

export default App
