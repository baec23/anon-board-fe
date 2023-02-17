import React from 'react';

type AnimatedVisibilityComponentProps = {
    children?: React.ReactNode;
    visibilityState: 'init' | 'visible' | 'invisible';
};
export const AnimatedVisibilityComponent = ({
    children,
    visibilityState
}: AnimatedVisibilityComponentProps) => {
    let animation = '';
    if (visibilityState === 'visible') animation = 'animate-scaleInY';
    else if (visibilityState === 'invisible') animation = 'animate-scaleOutY';

    return (
        <div className="flex flex-col justify-center items-center">
            <div className={`w-full ${animation}`}>{children}</div>
        </div>
    );
};
