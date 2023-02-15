import React from 'react';

type AnonBoardButtonProps = {
    text: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
    ariaLabel?: string | undefined;
    onClick?: () => void | undefined;
};
const AnonBoardButton = ({
    text,
    type = undefined,
    ariaLabel = undefined,
    onClick = undefined
}: AnonBoardButtonProps) => {
    return (
        <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            type={type}
            aria-label={ariaLabel}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default AnonBoardButton;
