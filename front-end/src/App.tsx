import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Employeeprofile from './Components/Employee/employee-profile';
function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Route>
            <Employeeprofile />
          </Route>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
