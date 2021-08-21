import Head from './components/Head';
import Portfolio from './components/Portfolio'
import Contact from './components/portfolio/contact/Contact';


function App() {
  const rowStyle = {
    border: "3px solid skyblue",
    borderRadius: "20px 0px 20px 0px",
    margin: "10px 20px 10px 20px",
    paddingBottom: "10px"
  };

  return (
    <div style={rowStyle} className="App">
      <Head /> <hr style={{color: 'navyblue'}} />
      <Portfolio /> <hr style={{color: 'navyblue'}} />
      <Contactt>
    </div>
  );
}

export default App;
