import './App.css';
import FileUpload from './FileUpload';
//import Navbar from './NavBar';
import AuthenticationButton from './AuthenticationButton';
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <header className="app-header">
        <h1>FileUpload</h1>
        <a href="https://github.com/tim-br/file-upload"
          className="github-link"
          target="_blank"
          rel="noopener noreferrer">
          GitHub Repo
        </a>
      </header>
      <AuthenticationButton />
      {/* <FileUpload /> */}
    </div>
  );
}

export default App;
