import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import SuppliesFormPost from './pages/SuppliesFormPost';
import SuppliesFormEdit from "./pages/SuppliesFormEdit"
import SuppliesContainer from "./context/suppliesContext"

function App() {
  return (
    <SuppliesContainer>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<SuppliesFormPost />}/>
          <Route path="editform" element={<SuppliesFormEdit />}/>
        </Route>
      </Routes>
    </SuppliesContainer>
  );
}

export default App;
