import Head from './components/head/Head';
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/portfolio/contact/Contact';


function App() {
  const rowStyle = {
    border: "3px solid skyblue",
    borderRadius: "20px 0px 20px 0px",
    margin: "10px 20px 10px 20px",
    paddingBottom: "15px"
  };

  return (
    <div style={rowStyle} className="App">
      <Head  /> 
      <Portfolio /> <hr style={{color: 'navyblue'}} />
      <Contact />
    </div>
  );
}

export default App;
