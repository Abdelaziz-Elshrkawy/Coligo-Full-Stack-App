import { useState } from 'react';
import './App.css';
import DashBoard from './Components/DashBoard/DashBoard';
import Home from './Components/Home/Home';

function App() {
    const [logged, setLogged] = useState(false);
    const handelToggleLogin = () => {
        setLogged(!logged);
    };
    return (
        <div className="App">
            {logged ? (
                <DashBoard handleToggleLogin={handelToggleLogin} />
            ) : (
                <Home handleToggleLogin={handelToggleLogin} />
            )}
        </div>
    );
}
export default App;
