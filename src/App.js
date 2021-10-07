import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./components/Header";
import UserListPage from "./pages/UserListPage";
import UserPage from "./pages/UserPage";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={UserListPage} exact />
          <Route path="/users/:id" component={UserPage} />
        </Container>
      </main>
    </Router>
  );
};

export default App;
