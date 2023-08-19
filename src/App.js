import Pages from "./pages/Pages"
import ClassProps from "./ClassProps";
function App() {
  return (
    <div className="App">
      <ClassProps name = "Agana" />
      <ClassProps name = "Onahi" />
      <ClassProps name = "Ajom"> <p>Child component</p></ClassProps>
      <Pages />
    </div>
  );
}

export default App;