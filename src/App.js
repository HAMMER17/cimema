import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header";
import HomePages from "./pages/HomePages";
import { store } from "./redax";
import GamePages from "./pages/GamePages";
import Order from "./pages/Order";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path={'/'} element={<HomePages />} />
            <Route path={'/app/:title'} element={<GamePages />} />
            <Route path={'/order'} element={<Order />} />
          </Routes>

        </div>
      </Router>
    </Provider>
  );
}

export default App;
