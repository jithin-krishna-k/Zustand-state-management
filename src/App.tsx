import './index.css';
import UserDetails from './component/UserDetails';
import Counter from './component/Counter';

const App = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen space-y-4">
        <h1>ZUSTAND STATE MANAGEMENT</h1>
        <Counter />
        <UserDetails />
      </div>
    </div>
  )
}

export default App
