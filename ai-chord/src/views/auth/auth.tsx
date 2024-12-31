import { Route, Routes } from 'react-router-dom';
import Signup from '../../pages/auth/signup';
import Login from '../../pages/auth/login';
import LetsChatImage from '../../assets/images/LetsChat.png';
import OtpVerification from '../../pages/auth/otpVerification';
import ResetPassword from '../../pages/auth/resetPassword';

const Auth = () => {
    return (
        <div className='w-full h-[100vh] bg-[#45344] flex'>
            <div
                className='w-[50%] hidden md:block h-[100vh] flex items-center justify-center'
            >
                <img
                    src={LetsChatImage}
                    className='w-full h-full object-cover'
                    style={{
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                    alt="LetsChat"
                />
            </div>
            <div className='md:w-[50%] md:pt-[1rem] h-[100vh] md:pb-[1rem] overflow-y-hidden pt-[1rem] pb-[1rem] w-full flex items-center justify-center'>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/otpVerification" element={<OtpVerification />} />
                    <Route path="/resetPassword" element={<ResetPassword />} />
                </Routes>
            </div>
        </div>
    );
};

export default Auth;
