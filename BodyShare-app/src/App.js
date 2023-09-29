import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import GlobalStyle from "./theme/GlobalStyle";
import User from "pages/user";
import SignIn from "pages/user/signin/SignIn";
import SignUp from "pages/user/signup/SignUp";
import Layout from "./components/layout";
import Home from "./pages/home";
import Analysis from "./pages/analysis";
import Community from "./pages/community";
import CommuSearch from "./pages/community/commu/commuSearch/CommuSearch";
import CommuSearchAfter from "./pages/community/commuSearchAfter/CommuSearchAfter";
import CommuIn from "./pages/community/commu/commuIn/CommuIn";
import CommuAdd from "./pages/community/commu/commuAdd/CommuAdd";
import CommuCategory from "./pages/community/commu/commuCategory/CommuCategory";
import CommuFeedAdd from "./pages/community/commu/commuFeedAdd/CommuFeedAdd";
import CommuFeed from "./pages/community/commu/commuFeed/CommuFeed";
import Mypage from "./pages/mypage";
import InterestList from "pages/user/interestlist/InterestList";
import UserInfo from "pages/user/userinfo/UserInfo";
import SportSearch from "./pages/analysis/sportsearch/SportSearch";
import FoodSearch from "./pages/analysis/foodsearch/FoodtSearch";
import TimeInput from "./pages/analysis/TimeInput";
import MyProfileModify from "./pages/mypage/myprofilemod/MyProfileModify";
import Logout from "./pages/mypage/Logout";
import PasswordModify from "./pages/mypage/PasswordModify";
import InterestModify from "./pages/mypage/intermod/InterestModify";
import SportHome from "./pages/analysis/sportchart/SportChart";
import FoodHome from "./pages/analysis/foodchart/FoodChart";
import LayoutAnalysis from "./pages/analysis/analysislayout";
import { userSelector } from "recoil/userRecoil";
import { useRecoilValue } from "recoil";

function App() {
  const userNo = useRecoilValue(userSelector);

  return (
    <>
      <GlobalStyle />
      <Router>
        {userNo > 0 ? (
          <Routes>
            <Route path="/home" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="/analysis" element={<LayoutAnalysis />}>
              <Route index element={<Analysis />} />
              <Route path="/analysis/sportschart" element={<SportHome />} />
              <Route path="/analysis/foodchart" element={<FoodHome />} />
            </Route>
            <Route path="/analysis/add" element={<Layout />}>
              <Route index element={<SportSearch />} />
              <Route path="/analysis/add/food" element={<FoodSearch />} />
              <Route path="/analysis/add/time" element={<TimeInput />} />
              <Route
                path="/analysis/add"
                element={<Navigate replace to="/" />}
              />
            </Route>
            <Route path="/community" element={<Layout />}>
              <Route index element={<Community />} />
              <Route path="/community/commuIn/:commu" element={<CommuIn />} />
              <Route path="/community/search" element={<CommuSearch />} />
              <Route
                path="/community/search/after"
                element={<CommuSearchAfter />}
              />
              <Route path="/community/communityAdd" element={<CommuAdd />} />
              <Route path="/community/category" element={<CommuCategory />} />
              <Route path="/community/feedAdd/:commu" element={<CommuFeedAdd />} />
              <Route path="/community/feed" element={<CommuFeed />} />
            </Route>
            <Route path="/mypage" element={<Layout />}>
              <Route index element={<Mypage />} />
              <Route path="/mypage/modify" element={<MyProfileModify />} />
              <Route path="/mypage/logout" element={<Logout />} />
              <Route
                path="/mypage/modify/interest"
                element={<InterestModify />}
              />
              <Route
                path="/mypage/modify/password"
                element={<PasswordModify />}
              />
            </Route>
            <Route path="/*" element={<Navigate replace to="/home" />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<User />}>
              <Route index element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signup/interestList" element={<InterestList />} />
              <Route path="/signup/userInfo" element={<UserInfo />} />
              <Route path="/*" element={<Navigate replace to="/" />} />
            </Route>
          </Routes>
        )}
      </Router>
    </>
  );
}

export default App;
