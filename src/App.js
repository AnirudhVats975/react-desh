import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import RightSection from './components/Rightsection/RightSection';

function App() {
  return (
  <>
  <div className="deshboard">
  <Sidebar/>
  <RightSection/>
  </div>
  </>
  );
}

export default App;
