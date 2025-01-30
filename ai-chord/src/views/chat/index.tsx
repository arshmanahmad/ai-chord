import Siidebar from "../../components/sidebar/sidebar"
import ProfilePhoto from '../../assets/images/client3.png'
import { AiOutlineSend, AiOutlineUser } from "react-icons/ai"
import { SetStateAction, useEffect, useRef, useState } from "react"
import Modal from '../../components/modal/modal'
import avatar from '../../assets/avatarNewVideo.mp4'
import { FaCamera, FaPause, FaPlay, FaTimes, FaVolumeUp } from 'react-icons/fa';
import './styles.css'
import { useTransition, animated } from '@react-spring/web';
import Button from "../../components/button/button"

const chats = [
    { "title": "Explore HTML Game Development Tips" },
    { "title": "Emergency Live Streaming Essentials" },
    { "title": "Understanding UI/UX Design Principles" },
    { "title": "A Comprehensive UX Audit Guide" },
    { "title": "Creating Advanced Chatbots with GPT" },
    { "title": "How GPT Models Power Conversational AI" },
    { "title": "Weekly Trends: Last 7 Days Overview" },
    { "title": "Minimizing States for Binary DFA" }
]

const index = () => {
    const [inputValue, setInputValue] = useState('');
    const [modal, setModal] = useState(false)
    const [play, setPlay] = useState(true)
    const [promptMsg, setPromptMsg] = useState<string[] | undefined>([])

    const videoRef = useRef<HTMLVideoElement>(null);
    const textareaRef = useRef(null);

    const handleInputChange = (e: { target: { value: SetStateAction<string> } }) => {
        setInputValue(e.target.value);
    };

    const handleSendMessage = () => {
        setPromptMsg(prevMsg => {
            if (prevMsg === undefined) {
                return [inputValue];
            }
            return [...prevMsg, inputValue];
        })
        setInputValue("")
    }
    const handleAudioResponse = () => {
        setPromptMsg(prevMsg => {
            if (prevMsg === undefined) {
                return [inputValue];
            }
            return [...prevMsg, inputValue];
        })
        setInputValue("")
        toggleModal()

    }
    const response = "Thank you for using Nurse AI Hub! We deeply appreciate your trust in our services. Our team is dedicated to providing you with the most accurate and helpful assistance possible. If you have any questions or need support, please don’t hesitate to reach out. We are here to assist you with any inquiries or issues you may encounter. Your satisfaction is our top priority, and we are committed to ensuring a seamless and supportive experience. Thank you for choosing us, and we look forward to serving you!"
    const toggleModal = () => {
        setModal(!modal)
    }

    const togglePlay = () => {
        setPlay(!play)
    }

    const transitions = useTransition(promptMsg, {
        from: { opacity: 0, transform: 'translateY(-20px)', filter: 'blur(10px)' },
        enter: { opacity: 1, transform: 'translateY(0px)', filter: 'blur(0px)' },
        leave: { opacity: 0, transform: 'translateY(-20px)', filter: 'blur(10px)' },
        trail: 8000, // Delay between each item's animation
        keys: promptMsg?.map((_, index) => index), // Provide unique keys for transitions
    });
    

    useEffect(() => {
        if (play && videoRef.current) {
            videoRef.current.play();
        } else if (!play && videoRef.current) {
            videoRef.current.pause();
        }
    }, [play]);

    useEffect(() => {
        if (textareaRef.current) {
            const textarea = textareaRef.current as HTMLTextAreaElement; // Type assertion

            const scrollTop = textarea.scrollTop;

            textarea.style.height = 'auto';

            textarea.style.height = `${textarea.scrollHeight}px`;

            const lineHeight = parseFloat(getComputedStyle(textarea).lineHeight);
            const maxHeight = lineHeight * 9;
            if (textarea.scrollHeight > maxHeight) {
                textarea.style.height = `${maxHeight}px`;
                textarea.style.overflowY = 'auto'; 
            } else {
                textarea.style.overflowY = 'hidden'; 
            }
            textarea.scrollTop = scrollTop;
        }
    }, [inputValue]);

    return (
        <>
            {modal && (
                <Modal toggleModal={toggleModal}>
                    <div className="w-full h-full flex flex-col items-center bg-gray-900 text-white">

                        <div className="flex w-full h-[10%] justify-between items-center p-4 bg-gray-800">
                            <span className="text-sm">Listening...</span>
                            <FaTimes onClick={toggleModal} className="text-red-500 cursor-pointer" />
                        </div>

                        <div className="flex-grow w-[80%] h-[78%] flex flex-col justify-center items-center bg-gray-900">

                            <div className="relative w-full h-full  overflow-hidden ">
                                <video
                                    ref={videoRef}
                                    src={avatar}
                                    autoPlay
                                    loop
                                    muted
                                    preload="auto"
                                    className="w-full h-full object-contain slow-motion-video"
                                ></video>

                            </div>

                        </div>

                        <div className="w-full h-[12%] py-4 flex justify-center items-center gap-10 bg-gray-800">
                            {play ?
                                    <button onClick={togglePlay} className="flex justify-center items-center bg-gray-700 rounded-full md:p-4 p-2">
                                        <FaPause className="text-white text-xl" />
                                    </button>
                                :
                                    <button onClick={togglePlay} className="flex justify-center items-center bg-primary rounded-full md:p-4 p-2">
                                        <FaPlay className="text-white text-xl" />
                                    </button>
                            }
                            <button className="flex justify-center items-center bg-gray-700 rounded-full md:p-4 p-2">
                                <FaVolumeUp className="text-white text-xl" />
                            </button>
                        </div>
                    </div>
                </Modal>
            )}

            <div className='w-full h-[100vh] bg-[#f3f6fb] flex items-center'>
                <Siidebar
                    profileName="Andrew Noilson"
                    previousChats={chats}
                    profileImage={ProfilePhoto}
                />
                <div className="lg:w-[80%] h-[100%] w-[100%]  flex flex-col justify-between p-10 lg:p-20 items-center ">
                    <div className="w-full flex items-end justify-end">
                    <div  className="w-[18rem]">
                         <Button
                                 text="Chat with support"
                                 icon=""
                                 bgColor="bg-primary"
                                 borderColor="none"
                                 textColor="#ffff"
                             />
                             
                    </div>
                    </div>
                    <div className="w-full h-[90%] pt-[1.2rem] md:h-[80%] bg- overflow-y-auto scrollbar-custom">
                    {transitions((styles, item, { key }) => (
                <animated.div key={key} style={styles}>
                    <div className="flex text-[0.9rem] items-center mb-[0.5rem]">
                        <img
                            src={ProfilePhoto}
                            className="h-[2rem] w-[2rem] mr-[0.5rem]"
                            alt="profile"
                        />
                        <p>{item}</p>
                    </div>
                    <div className="text-[0.9rem] font-semibold items-center mb-[1.5rem] ml-[2rem]">
                        {response}
                    </div>
                    <div className="h-[1px] bg-[#eaedf3] mb-[2rem]"></div>
                </animated.div>
            ))}
                    </div>
                    <div className=" w-full mb-[1.3rem] md:mb-[0rem]  max-w-xl bg-white border rounded-[2rem] p-1 shadow-lg flex items-center ">
                        <button className="p-2 text-gray-500">
                            <AiOutlineUser size={24} />
                        </button>
                        <textarea
                            onChange={handleInputChange}
                            ref={textareaRef}
                            value={inputValue}
                            placeholder="Type here.."
                            className="flex-1 p-2 outline-none  border-none resize-none overflow-hidden scrollbar-custom"
                            rows={1}
                        />
                        <button
                            className="p-2 text-blue-500"
                            onClick={handleSendMessage}
                        >
                            <AiOutlineSend size={24} />
                        </button>
                        <button
                            className="p-2 text-blue-500"
                            onClick={handleAudioResponse}
                        >
                            <FaCamera size={24} color="black" />

                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index
