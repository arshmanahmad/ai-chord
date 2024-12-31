import React from "react";
import "./modal.css";

interface IModalProps {
    children: React.ReactNode;
    toggleModal: () => void;
    size?: "sm" | "md" | "lg";
}

const modal = ({ children, toggleModal }: IModalProps) => {


    return (
        <>
            <div
                className="fixed inset-0 bg-opacity-50 bg-[grey] z-[9999]"
                onClick={toggleModal}
            ></div>
            <div
                className={`fixed block top-1/2 bg-[white] rounded-[9px] h-[50vh] md:h-[90vh] border border-[#c4c4c4] shadow-lg left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[99999]   md:w-[55%]  w-[80%]`}
            >
                <div className="bg-white shadow-md rounded-lg  h-full  overflow-auto custom-scrollbar">
                    {children}
                </div>
            </div>
        </>
    );
};

export default modal;
