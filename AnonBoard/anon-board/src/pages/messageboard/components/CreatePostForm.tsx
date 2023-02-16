import React, { useState } from 'react';
import LabelledTextArea from '../../../components/LabelledTextArea';
import AnonBoardButton from '../../../components/AnonBoardButton';

type CreatePostFormProps = {
    onSubmit: (message: string) => void;
    onCancel: () => void;
    labelText?: string;
    affirmativeButtonText?: string;
};
export const CreatePostForm = ({
    onSubmit,
    onCancel,
    labelText = 'Message',
    affirmativeButtonText = 'Submit'
}: CreatePostFormProps) => {
    const [message, setMessage] = useState('');

    return (
        <div className="w-full flex justify-center">
            <form
                className="w-full rounded shadow p-5 bg-blue-100 flex flex-col"
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit(message);
                }}
            >
                <LabelledTextArea
                    id="message"
                    labelText={labelText}
                    value={message}
                    placeholder="Message..."
                    onInput={(e) => setMessage(e.currentTarget.value)}
                />
                <span className="flex justify-center mt-5 gap-20">
                    <AnonBoardButton
                        text={affirmativeButtonText}
                        type="submit"
                        ariaLabel="Create New Post"
                    />
                    <AnonBoardButton text="Cancel" onClick={() => onCancel()} />
                </span>
            </form>
        </div>
    );
};
