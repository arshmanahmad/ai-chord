import { Link, useNavigate } from 'react-router-dom';
import CustomizedInput from '../../components/input/input';
import CustomizedButton from '../../components/button/button';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState<number>(0)
    const navigate = useNavigate()
    const handleSubmit = () => {
        // Handle form submission here
        console.log('Form submitted');
        setLoading(3)
    };

    useEffect(() => {
        if (loading > 0) {
            new Promise<void>((resolve) => {
                setTimeout(() => {
                    setLoading(loading - 1);
                    resolve();
                }, 1000);
            }).then(() => {
                navigate("/otpVerification")
            });
        }
    }, [loading]);


    return (
        <div className=" w-[70%] flex-col md:gap-[0.5rem] gap-[0rem] items-center justify-center overflow-y-auto">
            <h2 className='font-bold md:text-[1.7rem] text-[1.4rem]'>Sign up for a free trial</h2>
            <h3 className='font-medium mb-[0.7rem] text-[#4a4a4a] text-[0.85rem]'>
                Empower your experience, sign up for a free account today
            </h3>
            <CustomizedInput
                label={"Full Name*"}
                placeholder={"John Doe"}
                type="text"
            />
            <CustomizedInput
                label={"Email Address*"}
                placeholder={"ex.email@domain.com"}
                type="email"
            />
            <CustomizedInput
                label={"Phone Number*"}
                placeholder={"+92 300 1234567"}
                type="tel"
            />
            <CustomizedInput
                label={"Password*"}
                placeholder={"Enter password"}
                type={showPassword ? "text" : "password"}
                onIconClick={() => setShowPassword(!showPassword)}
                icon={showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            />

            <h3 className='font-medium mb-[0.7rem] text-[#4a4a4a] text-[0.85rem] mt-[1rem]'>
                By registering for an account, you are consenting to our
                <Link to={"/terms-of-service"} className='underline text-primary'> Terms of Service</Link> and confirming that you have reviewed and accepted the
                <span className='text-primary'> Global Privacy Statement</span>
            </h3>
            <CustomizedButton
                text={loading == 0 ? "Get started free" : <ClipLoader color={"#fff"} loading={true} size={20} />}
                icon={""}
                bgColor="bg-primary"
                borderColor="none"
                textColor={"#fff"}
                onClick={handleSubmit}
            />
            <h3 className='font-bold w-full flex justify-end mb-[0.7rem] text-[#4a4a4a] text-[0.85rem] mt-[0.5rem]'>
                Already have an account?  <span className='text-primary cursor-pointer'> <Link to={"/"}>   Login</Link></span>
            </h3>


        </div>
    );
}

export default Signup;
