import React, { ReactNode } from 'react';

type IconButtonProps = {
    icon: ReactNode;
    size: string;
    color: string;
    hoverColor: string;
    activeColor: string;
    onClick: () => void;
};
export const IconButton = ({
    icon,
    size,
    color,
    hoverColor,
    activeColor,
    onClick
}: IconButtonProps) => {
    return (
        <div
            className={`${size} transition duration-100 ease-in-out ${color} hover:scale-110 hover:${hoverColor} active:scale-90 active:${activeColor} active:duration-75`}
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClick();
            }}
        >
            {icon}
        </div>
    );
};
