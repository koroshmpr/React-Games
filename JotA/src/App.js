import './App.css';
import {Routes ,Route} from 'react-router-dom';
import MenuPage from './pages/menu-page/MenuPage';
import Stage01 from './pages/stage01/Stage01';
import Setting from './pages/setting/Setting';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<MenuPage/>}/>
            <Route path='/lvl01' element={<Stage01/>}/>
            <Route path='/setting' element={<Setting/>}/>
        </Routes>
    </div>
  );
}

export default App;
