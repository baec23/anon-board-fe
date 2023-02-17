import React, { useState } from 'react';
import LabelledTextArea from '../../../components/LabelledTextArea';

type CreatePostFormProps = {
    onSubmit: (message: string) => void;
    onCancel: () => void;
    labelText: string;
    placeholderText: string;
    affirmativeButtonText: string;
    cancelButtonText: string;
};
export const CreatePostForm = ({
    onSubmit,
    onCancel,
    labelText,
    placeholderText,
    affirmativeButtonText,
    cancelButtonText
}: CreatePostFormProps) => {
    const [message, setMessage] = useState('');

    return (
        <div className="flex justify-center">
            <form
                className="p-5 flex flex-col"
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit(message);
                }}
            >
                <LabelledTextArea
                    id="message"
                    labelText={labelText}
                    value={message}
                    placeholder={placeholderText}
                    onInput={(e) => setMessage(e.currentTarget.value)}
                />
                <span className="flex justify-center mt-5 gap-20">
                    <button
                        className="anon-button-animated"
                        type="submit"
                        aria-label="Create New Post"
                    >
                        {affirmativeButtonText}
                    </button>
                    <button className="anon-button-animated" onClick={onCancel}>
                        {cancelButtonText}
                    </button>
                </span>
            </form>
        </div>
    );
};
