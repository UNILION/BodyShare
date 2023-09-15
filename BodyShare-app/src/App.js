import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./theme/GlobalStyle";
import User from "./pages/user";
import SignIn from "./pages/user/SignIn"
import SignUp from "./pages/user/SignUp"
import Layout from "./components/layout";
import Home from "./pages/home";
import Analysis from "./pages/analysis";
import Community from "./pages/community";
import CommuSearch from "./pages/community/commu/CommuSearch";
import CommuSearchAfter from "./pages/community/commu/CommuSearchAfter";
import CommuIn from "./pages/community/commu/CommuIn";
import CommuAdd from "./pages/community/commu/CommuAdd";
import CommuCategory from "./pages/community/commu/CommuCategory";
import CommuFeedAdd from "./pages/community/commu/CommuFeedAdd";
import CommuFeed from "./pages/community/commu/CommuFeed";
import Mypage from "./pages/mypage";
import Interest from "./pages/user/Interest";
import InterestList from "./pages/user/InterestList";
import UserInfo from "./pages/user/UserInfo";
import SportSearch from "./pages/analysis/SportSearch";
import FoodSearch from "./pages/analysis/FoodtSearch";
import TimeInput from "./pages/analysis/TimeInput";
import MyProfileModify from "./pages/mypage/MyProfileModify";
import Logout from "./pages/mypage/Logout";
import PasswordModify from "./pages/mypage/PasswordModify";
import InterestModify from "./pages/mypage/InterestModify";

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
          </Route>
          <Route path="/community" element={<Layout />}>
            <Route index element={<Community />} />
            <Route path="/community/commuIn" element={<CommuIn />} />
            <Route path="/community/search" element={<CommuSearch />} />
            <Route path="/community/search/after" element={<CommuSearchAfter />} />
            <Route path="/community/communityAdd" element={<CommuAdd />} />
            <Route path="/community/category" element={<CommuCategory />} />
            <Route path="/community/feedAdd" element={<CommuFeedAdd />} />
            <Route path="/community/feed" element={<CommuFeed />} />
          </Route>
          <Route path="/mypage" element={<Layout />}>
            <Route index element={<Mypage />} />
            <Route path="/mypage/modify" element={<MyProfileModify />} />
            <Route path="/mypage/logout" element={<Logout />} />
            <Route path="/mypage/modify/interest" element={<InterestModify />} />
            <Route path="/mypage/modify/password" element={<PasswordModify />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
