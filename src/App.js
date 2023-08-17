import Pages from "./pages/Pages"
import FuntionalComp from "./pages/Components/FunctionCom";
import {ClassComponent, ClassComponent1} from "./pages/Components/ClassComp";
import Click from "./pages/Components/Click";
function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Pages />
      <ClassComponent />
      <ClassComponent1 />
      <FuntionalComp />
      <Click />
    </div>
  );
}

export default App;