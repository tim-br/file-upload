import logo from './logo.svg';
import './App.css';
import FileUpload from './FileUpload';
import Navbar from './NavBar';
import AuthenticationButton from './AuthenticationButton';
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <AuthenticationButton />
      <FileUpload />
    </div>
  );
}

export default App;
