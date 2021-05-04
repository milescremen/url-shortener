import Header from './components/Header/Header.js';
import Landing from './components/Landing/Landing.js';
import Input from './components/Input/Input.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />

      <Landing />
      <Input />
      <Main />

      {
        /*
        <Input />
        <Main />
        <Footer />
        */
      }
    </div>
  );
}

export default App;
