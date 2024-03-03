import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from "./component/Login"
import Register from "./component/Register"
import "./index.css";

function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* <Route path='/' element={<WelcomPage/>}/>
          <Route path='/main' element={<MainPage/>}/> */}
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          {/* <Route path='/message' element={<MessagesPage/>}/>
          <Route path='/chat-rooms' element={<ChattingRoom/>}/>
          <Route path="/chatting-room/:roomId" element={<ChatRoom/>} /> */}
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
