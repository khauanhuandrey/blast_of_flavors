import { AnimatePresence } from "framer-motion";
import { Navigation } from "./navigation";
import "./styles.sass";

function App() {
  return (
    <AnimatePresence>
      <div className="App">
        <Navigation />
      </div>
    </AnimatePresence>
  );
}

export default App;
