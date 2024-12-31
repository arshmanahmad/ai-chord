import { Link, useNavigate } from 'react-router-dom'
import CustomizedInput from '../../components/input/input'
import CustomizedButton from '../../components/button/button'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';
const login = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className="w-[70%] flex-col  md:gap-[0.8rem] gap-[0.2rem] items-center justify-center">
            <h2 className='font-bold  md:text-[1.7rem] text-[1.4rem]'>Sign in with free trial</h2>
            <h3 className='font-medium mb-[0.7rem] text-[#4a4a4a] text-[0.85rem]'>Empower your experience,sign in for a free account today</h3>
            <CustomizedInput
                label={"Email Address*"}
                placeholder={"ex.email@domain.com"}
                type="text"
            />
            <CustomizedInput
                label={"Password*"}
                placeholder={"Enter password"}
                type={showPassword ? "text" : "password"}
                onIconClick={() => setShowPassword(!showPassword)}
                icon={showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            />
            <div className="flex w-full justify-end">
                <h3 className="text-[#000] text-[0.85rem] mt-[0.5rem]"> Forgot your password? <Link to="/resetPassword" className="text-primary text-[0.85rem] mt-[0.5rem]"> Reset Password</Link></h3>
            </div>
            <div>
                <h3 className='w-full font-medium mb-[0.7rem] text-[#4a4a4a] text-[0.85rem] mt-[1rem]'>By registering for an account, you are consenting to our <Link to={""} className='underline text-primary'>Terms
                    of Service</Link> and confirming that you have reviewed and accepted the <span className='text-primary'>Global Privacy Statement</span>
                </h3>
            </div>
            <CustomizedButton
                text="Get started free"
                icon={""}
                bgColor="bg-primary"
                borderColor="none"
                textColor={"#fff"}
                onClick={() => navigate('/chat')}
            />
            <h3 className='font-bold mb-[0.7rem] text-[#4a4a4a] text-[0.85rem] mt-[1rem]'>Already have an account? <span className='text-primary cursor-pointer' > Login</span> </h3>
            <div className='w-full flex justify-center items-center'>
                <div className='h-[1px] w-[33%] bg-[#e0e0e0]'></div>
                <p className='m-[4px] text-[#bebebe] text-[0.7rem] font-semibold'>Or better yet..</p>
                <div className='h-[1px] w-[33%] bg-[#e0e0e0]'></div>
            </div>
            <CustomizedButton
                text="Continue with Google"
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>}
                bgColor="transparent"
                borderColor="#e0e0e0"
                textColor={"#000"}
                onClick={() => ""}
            />

            <div className="flex w-full justify-end">
                <h3 className='font-bold mb-[0.7rem] text-[#4a4a4a] text-[0.85rem] mt-[1rem]'>
                    Do not have an account?
                    <span className='text-primary cursor-pointer'>
                        <Link to={"/signup"}> Sign up</Link>
                    </span>
                </h3>
            </div>
        </div >
    )
}

export default login