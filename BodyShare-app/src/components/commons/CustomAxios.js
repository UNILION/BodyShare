import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { userAtom } from "recoil/userRecoil";

const API_SERVER = process.env.REACT_APP_API_SERVER;

const CustomAxios = function(){
  const [userNo, setUserNo] = useRecoilState(userAtom);
  const navigate = useNavigate();
  const instance = axios.create({
    baseURL: API_SERVER,
    withCredentials: true
  });

  instance.interceptors.request.use(config => {
    console.log('url', config.url);
    if(userNo || config.url === '/users/signin'){
      return config;
    }else{
      return false;
    }
    
  });

  instance.interceptors.response.use(res => {
    return res;
  }, async err => {
    console.error('interceptors err', err);
    
    const { response } = err;

    console.log(userNo)
    if(response?.status === 401 && userNo > 0){
        console.log('refreshToken 인증 실패.');
       
        if(window.localStorage.getItem('recoil-persist')){
          setUserNo('');
           // alert('로그 필요');
          navigate("/")
        }
        window.localStorage.removeItem('recoil-persist');

        
    }else{
      return Promise.reject(err);
    }
    
  });

  return instance;
}

export default CustomAxios;