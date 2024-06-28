import {browserRouter, Routes,  Route, Navigate, Router } from
"react-router-dom";
import {taskspage} from "./pages/taskspages";
import { taskformpage } from "./pages/taskformpage"; 


function App() {
return (
  <browserRouter>
  <Routes>
    <Route path="/" element={<Navigate to="/tasks" />} />
    <Route path="/tasks" element={<taskspage />}  />
    <Route path="/tasks-create" element={<taskformpage />} />  
  </Routes>
  </browserRouter>
)

}
export default App