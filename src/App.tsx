import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.scss";
import { routes } from "./constants";
import Layout from "./components/layout";
import { Home } from "./pages/Home";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path={routes.INDEX} element={<Home />} />
                    <Route path="*" element={<Navigate to={routes.INDEX} replace />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
