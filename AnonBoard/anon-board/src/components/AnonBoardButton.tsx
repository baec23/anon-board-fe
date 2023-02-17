import React from 'react';

type AnonBoardButtonProps = {
    text: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
    ariaLabel?: string | undefined;
    color?: string;
    activeColor?: string;
    enabled?: boolean;
    onClick?: () => void | undefined;
};
const AnonBoardButton = ({
    text,
    type = undefined,
    ariaLabel = undefined,
    color = 'blue-500',
    activeColor = 'blue-700',
    enabled = true,
    onClick = undefined
}: AnonBoardButtonProps) => {
    return (
        <button
            className={`py-2 px-4 rounded border bg-transparent transition duration-100 border-${color} ease-in-out enabled:active:duration-75 text-${color} hover:bg-${color} hover:border-transparent hover:text-white enabled:active:bg-${activeColor} enabled:active:border-transparent enabled:active:text-white enabled:active:scale-95 disabled:bg-transparent disabled:border-gray-600 disabled:text-gray-600`}
            type={type}
            aria-label={ariaLabel}
            onClick={(e) => {
                if (enabled && onClick) {
                    onClick();
                } else {
                }
            }}
            disabled={!enabled}
        >
            {text}
        </button>
    );
};

export default AnonBoardButton;
