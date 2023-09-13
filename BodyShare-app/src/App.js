import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./pages/user";
import SignIn from "./pages/user/SignIn"
import SignUp from "./pages/user/SignUp"
import Layout from "./components/layout";
import Home from "./pages/home";
import Analysis from "./pages/analysis";
import Community from "./pages/community";
import Mypage from "./pages/mypage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User />}>
          <Route index element={<SignIn />} />
          <Route path="/signup" element={<SignUp />}/>
        </Route>
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/analysis" element={<Layout />}>
          <Route index element={<Analysis />} />
        </Route>
        <Route path="/community" element={<Layout />}>
          <Route index element={<Community />} />
        </Route>
        <Route path="/mypage" element={<Layout />}>
          <Route index element={<Mypage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
