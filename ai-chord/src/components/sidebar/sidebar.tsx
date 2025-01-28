import React, { useState } from 'react';
import { HiOutlineChatAlt, HiOutlineMenuAlt4 } from 'react-icons/hi';
import CustomizedButton from '../button/button';
import './style.css';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { BsFillCircleFill } from 'react-icons/bs';
interface chats {
    [key: string]: string;
}

interface sidebarProps {
    previousChats: chats[];
    profileName: string;
    profileImage: string;
}

const Sidebar: React.FC<sidebarProps> = ({
    previousChats,
    profileImage,
    profileName,
}) => {
    const [selectedChat, setSelectedChat] = useState<number>();
    const [chats, setChats] = useState<chats[]>(previousChats);
    const [show, setShow] = useState<boolean>(false);

    const handleChatClick = (index: number) => {
        setSelectedChat(index);
    };

    const handleAddChat = (newChat: chats) => {
        setChats((prevChats) => [...prevChats, newChat]);
    };

    const handleRemoveChat = () => {
        setChats([]);
    };

    const handleSidebarAppearance = () => {
        setShow(!show);
    };

    return (
        <>
            <div className={`sidebar-container ${show ? 'sidebar-open' : 'sidebar-closed'} h-full lg:w-[20%] md:w-[40%] bg-[transparent] p-4 lg:relative absolute z-[1000]`}>
                <HiOutlineMenuAlt4 className={`lg:hidden ${show ? 'hidden' : 'block'}`} onClick={handleSidebarAppearance} />
                <div className={`sidebar-content h-[98%] w-full lg:block ${show ? 'block' : 'hidden'} bg-[#ffffff] rounded-[1.2rem] shadow-md flex flex-col`}>
                    <div className="w-full p-4 h-[8%] flex flex-row justify-between">
                        <h3 className="text-[1.4rem] font-bold">CHAT A.I+</h3>
                        <HiOutlineMenuAlt4 className={`lg:hidden ${show ? 'block' : 'hidden'}`} onClick={handleSidebarAppearance} />
                    </div>
                    <div className="w-full p-4 h-[9%]">
                        <CustomizedButton
                            text="+  New chat"
                            icon=""
                            bgColor="bg-primary"
                            borderColor="none"
                            textColor="#fff"
                            onClick={() => handleAddChat({ newChatKey: "New Chat" })}
                        />
                     
                    </div>
                    <div className="w-full flex flex-col justify-between h-[6%] mt-[1.5rem]">
                        <div className="w-full h-[1px] bg-[#f6f6f6]" />
                        <div className="w-full pl-3 pr-3 flex justify-between h-full items-center">
                            <h5 className="text-[#979797] font-semibold text-[0.8rem]">Your conversations</h5>
                            <h5 className="text-primary font-semibold text-[0.8rem] cursor-pointer" onClick={handleRemoveChat}>Clear All</h5>
                        </div>
                        <div className="w-full h-[1px] bg-[#f6f6f6]" />
                    </div>
                    <div className="w-[100%] h-[62%] relative flex-1 flex flex-col gap-[1.1rem] p-3 overflow-y-auto scrollbar-custom">
                        {chats.length > 0 ? (
                            chats.map((chat, index) => {
                                let bcgColor = "transparent";
                                let iconColor = "#000";
                                let textColor = "#4b4b4b";
                                if (index === selectedChat) {
                                    bcgColor = "#f7f6ff";
                                    iconColor = "#898dbe";
                                    textColor = "#898dbe";
                                }
                                return (
                                    <div
                                        key={index}
                                        className="p-2 rounded-[2rem] cursor-pointer "
                                        style={{ backgroundColor: bcgColor }}
                                        onClick={() => handleChatClick(index)}
                                    >
                                        {Object.keys(chat).map((key) => (
                                            <div key={key} className="flex items-center ">
                                                <HiOutlineChatAlt color={iconColor} />
                                                <p
                                                    className="ml-2 text-[0.75rem] font-bold truncate"
                                                    style={{ color: textColor }}
                                                >
                                                    {chat[key]}
                                                </p>
                                                {index === selectedChat && (
                                                    <div
                                                        style={{
                                                            borderTopLeftRadius: '2rem',
                                                            borderBottomLeftRadius: '2rem',
                                                            borderTopRightRadius: '-2rem',
                                                            borderBottomRightRadius: '-2rem',

                                                        }}
                                                        className="flex items-center absolute h-[2rem]  right-0 rounded-left-2rem    gap-1 bg-[#eef0ff]">
                                                        <AiOutlineDelete size={15} color="#000" />
                                                        <AiOutlineEdit size={15} color="#000" />
                                                        <BsFillCircleFill size={14} color="#5a5ec6" />
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                );
                            })
                        ) : (
                            <div className="flex items-center justify-center h-full w-full ">
                                <h3 className="text-gray-500 text-lg font-semibold">No Chats Found</h3>
                            </div>
                        )}
                    </div>
                    <div className="p-5 h-[13%] flex items-center justify-center">
                        <button
                            className="flex items-center w-full h-[2.5rem] rounded-[2rem] p-2 bg-[transparent] border"
                        >
                            <img src={profileImage} className="h-[2rem] w-[2rem]" alt="profile" />
                            <span className="font-bold text-[0.8rem] ml-[0.5rem]">{profileName}</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
