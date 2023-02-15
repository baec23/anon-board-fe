import React from 'react';

type DisplaySectionProps = {
    children?: React.ReactNode;
};
const DisplaySection = ({ children }: DisplaySectionProps) => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-3xl rounded shadow p-5 bg-blue-100 my-5 mx-20 flex flex-col justify-center">
                {children}
            </div>
        </div>
    );
};

export default DisplaySection;
