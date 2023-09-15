import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./theme/GlobalStyle";
import User from "./pages/user";
import SignIn from "./pages/user/SignIn"
import SignUp from "./pages/user/SignUp"
import Layout from "./components/layout";
import Home from "./pages/home";
import Analysis from "./pages/analysis";
import Community from "./pages/community";
import Mypage from "./pages/mypage";
import Interest from "./pages/user/Interest";
import InterestList from "./pages/user/InterestList";
import UserInfo from "./pages/user/UserInfo";
import SportSearch from "./pages/analysis/SportSearch";
import FoodSearch from "./pages/analysis/FoodtSearch";
import TimeInput from "./pages/analysis/TimeInput";
import SportChart from "./pages/analysis/SportChart";
import FoodChart from "./pages/analysis/FoodChart";


function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<User />}>
            <Route index element={<SignIn />} />
            <Route path="/signup" element={<SignUp />}>
              <Route index element={<Interest />} />
              <Route path="/signup/interestList" element={<InterestList />} />
              <Route path="/signup/userInfo" element={<UserInfo />} />
            </Route>
          </Route>
          <Route path="/home" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/analysis" element={<Layout />}>
            <Route index element={<Analysis />} />
            <Route path="/analysis/sports" element={<SportSearch />} />
            <Route path="/analysis/food" element={<FoodSearch />} />
            <Route path="/analysis/time" element={<TimeInput />} />
            <Route path="/analysis/time" element={<SportChart />} />
            <Route path="/analysis/time" element={<FoodChart />} />
          </Route>
          <Route path="/community" element={<Layout />}>
            <Route index element={<Community />} />
          </Route>
          <Route path="/mypage" element={<Layout />}>
            <Route index element={<Mypage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
