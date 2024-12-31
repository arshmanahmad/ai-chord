import { Link, useNavigate } from 'react-router-dom';
import CustomizedInput from '../../components/input/input';
import CustomizedButton from '../../components/button/button';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const ResetPassword = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex w-[70%] flex-col md:gap-[0.8rem] gap-[0.2rem] items-center justify-center">
            <h2 className='font-bold md:text-[1.7rem] text-[1.4rem]'>Reset Your Password</h2>
            <h3 className='font-medium mb-[0.7rem] text-[#4a4a4a] text-[0.85rem]'>
                Enter your email and new password to reset your account
            </h3>

            <CustomizedInput
                label={"Email Address*"}
                placeholder={"ex.email@domain.com"}
                type="text"
            />

            <CustomizedInput
                label={"New Password*"}
                placeholder={"Enter new password"}
                type={showPassword ? "text" : "password"}
                onIconClick={() => setShowPassword(!showPassword)}
                icon={showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            />

            <CustomizedInput
                label={"Confirm New Password*"}
                placeholder={"Confirm new password"}
                type={showPassword ? "text" : "password"}
                onIconClick={() => setShowPassword(!showPassword)}
                icon={showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            />

            <div className='mt-[2rem] w-full'>
                <CustomizedButton
                    text="Reset Password"
                    icon={""}
                    bgColor="bg-primary"
                    borderColor="none"
                    textColor={"#fff"}
                    onClick={() => {
                        navigate("/otpVerification")
                    }}
                />
            </div>

            <h3 className='font-medium mb-[0.7rem] text-[#4a4a4a] text-[0.85rem] mt-[1rem]'>
                Remembered your password?
                <Link to="/" className='text-primary underline ml-1'>Sign In</Link>
            </h3>
        </div>
    );
}

export default ResetPassword;
