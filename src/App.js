import Pages from "./pages/Pages"
import FuntionalComp from "./pages/Components/FunctionCom";
import {ClassComponent, ClassComponent1} from "./pages/Components/ClassComp";
import Click from "./pages/Components/Click";
import Counter from "./pages/Components/Counter";
import ParentComp from "./pages/Components/ParentComp";
function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Pages />
      <ClassComponent />
      <ClassComponent1 />
      <FuntionalComp />
      <Click />
      <Counter />
      <ParentComp />
    </div>
  );
}

export default App;