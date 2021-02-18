import { Provider } from "react-redux";
import Routing from "./Routing";
import configureStore from "./store";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}

export default App;

// mapStatetoProps
// mapStatetoDispatch
// connect
