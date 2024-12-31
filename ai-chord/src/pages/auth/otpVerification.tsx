import { useNavigate } from "react-router-dom";
import OtpInput from "../../components/otpInput/otpInput";

const otpVerification = () => {
    const navigate = useNavigate()
    const handleVerification = () => {
        navigate('/chat')
    }
    return (
        <div className="flex w-[70%] flex-col md:gap-[2rem] gap-[0rem] items-center justify-center bg-white shadow-lg p-8 rounded-md">
            <h2 className="font-bold md:text-[1.7rem] text-[1.4rem] text-primary">Verify Your OTP</h2>
            <h3 className="font-medium mb-4 text-[#4a4a4a] text-[0.9rem] text-center">
                Empower your experience. Enter the OTP sent to your email or phone to sign in for a free account today.
            </h3>

            <OtpInput
                onVerify={handleVerification}
            />


        </div>
    );
}

export default otpVerification;
