import { useEffect, useRef, useState } from 'react';
import CusomizedButton from '../button/button';

interface OtpInputProps {
    numInputs?: number;           // Number of OTP input fields (default is 4)
    initialTime?: number;         // Initial countdown time (default is 30 seconds)
    onVerify?: () => void;        // Callback function for when the verify button is clicked
    onResendOtp?: () => void;     // Callback function for when the Resend OTP link is clicked
}

const OtpInput: React.FC<OtpInputProps> = ({
    numInputs = 4,                // Default to 4 input fields if not provided
    initialTime = 30,             // Default to 30 seconds if not provided
    onVerify,
    onResendOtp
}) => {
    const [otp, setOtp] = useState(""); // Keep track of the OTP value
    const inputRefs = useRef([]); 
    const [time, setTime] = useState<number>(initialTime);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (time > 0) {
                setTime(time - 1);
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [time]);

    
    const handleChange = (e:any,index:number) =>{
        const value = e.target.value;
        setOtp((prev)=>{
            const newOtp = prev.split("");
            newOtp[index]= value
            return newOtp.join("")
        })
    }
    useEffect(()=>{
            const filledInputLength  = otp.length;
            if(inputRefs.current[filledInputLength]){
                inputRefs.current[filledInputLength]?.focus();
            }
    },[otp])
    return (
        <div className="flex flex-col gap-2 items-center">
            <div className="w-full h-[5rem] flex gap-4 items-center justify-center">
                {Array(numInputs).fill("").map((_, index) => (
                    <div key={index} className="md:h-full mt-[2rem] md:w-full w-11 h-11 border border-gray-300 rounded-[1.2rem] flex items-center justify-center">
                        <input
                            value={otp[index] || ""}
                            onChange={(e)=> handleChange(e,index)}
                            ref={(el)=> (inputRefs.current[index] = el)}
                            maxLength={1}
                            type="text"
                            className="w-full h-full bg-transparent text-center outline-none text-xl font-semibold text-gray-700"
                        />
                    </div>
                ))}
            </div>
            <div className='mt-[3rem] w-[90%]'>
                <CusomizedButton
                    text="Verify"
                    icon={""}
                    bgColor="bg-primary"
                    borderColor="border-transparent"
                    textColor="#fff"
                    onClick={onVerify}
                />
            </div>
            <div className='mb-[4rem]'>
                {time === 0 ? (
                    <p className="text-sm text-gray-500 text-center mt-4">
                        Didn’t receive the OTP? <span className="text-primary cursor-pointer hover:underline" onClick={onResendOtp || (() => setTime(initialTime))}>Resend OTP</span>
                    </p>
                ) : (
                    <p className="text-sm text-gray-500 text-center mt-4">
                        Resend OTP after <span className="text-primary font-semibold">{time}s</span>
                    </p>
                )}
            </div>
        </div>
    );
}

export default OtpInput;
