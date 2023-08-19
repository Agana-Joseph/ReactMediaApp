import Pages from "./pages/Pages"
import ClassProps from "./ClassProps";
import FuntionProps from "./FuntionProps";
function App() {
  return (
    <div className="App">
      <ClassProps name = "Agana" ><p>Child component</p></ClassProps>
      <ClassProps name = "Onahi" ><button>click</button></ClassProps>
      <ClassProps name = "Ajom"/>
      <FuntionProps name = "Leaner1" location = "PHC"/>
      <Pages />
    </div>
  );
}

export default App;