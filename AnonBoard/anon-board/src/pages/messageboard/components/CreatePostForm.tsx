import React, { useState } from 'react';
import LabelledTextArea from '../../../components/LabelledTextArea';
import { AnonButton } from '../../../components/AnonButton';

type CreatePostFormProps = {
    className?: string;
    onSubmit: (message: string) => void;
    onCancel: () => void;
    labelText: string;
    placeholderText: string;
    affirmativeButtonText: string;
    cancelButtonText: string;
};
export const CreatePostForm = ({
    className = '',
    onSubmit,
    onCancel,
    labelText,
    placeholderText,
    affirmativeButtonText,
    cancelButtonText
}: CreatePostFormProps) => {
    const [message, setMessage] = useState('');

    return (
        <div className={`${className} flex flex-col justify-center p-5`}>
            <LabelledTextArea
                className="w-full"
                id="message"
                labelText={labelText}
                value={message}
                placeholder={placeholderText}
                onInput={(e) => setMessage(e.currentTarget.value)}
            />
            <span className="flex w-full justify-evenly mt-5">
                <AnonButton
                    text={affirmativeButtonText}
                    onClick={() => onSubmit(message)}
                />
                <AnonButton text={cancelButtonText} onClick={onCancel} />
            </span>
        </div>
    );
};
