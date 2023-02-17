import React, { useEffect, useState } from 'react';

type AnimatedVisibilityComponentProps = {
    children?: React.ReactNode;
    isVisible: boolean;
};
export const AnimatedVisibilityComponent = ({
    children,
    isVisible
}: AnimatedVisibilityComponentProps) => {
    const animation = isVisible ? 'animate-scaleInY' : 'animate-scaleOutY';
    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        setIsFirstRender(false);
    }, []);

    useEffect(() => {
        console.log('First render? ' + isFirstRender);
    }, [isFirstRender]);

    return (
        <div className="flex flex-col justify-center items-center">
            {isFirstRender && <div className={`w-full`}>{children}</div>}
            {!isFirstRender && (
                <div className={`w-full ${animation}`}>{children}</div>
            )}
        </div>
    );
};
