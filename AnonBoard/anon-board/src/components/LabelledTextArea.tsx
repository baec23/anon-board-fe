import React from 'react';

type LabelledTextAreaProps = {
    id: string;
    labelText: string;
    value: string;
    placeholder: string;
    numRows?: number;
    required?: boolean | undefined;
    onInput: (e: React.FormEvent<HTMLTextAreaElement>) => void;
};
const LabelledTextArea = ({
    id,
    labelText,
    value,
    placeholder,
    numRows = 4,
    required = true,
    onInput
}: LabelledTextAreaProps) => {
    return (
        <div>
            <label
                htmlFor={id}
                className="block mb-2 text-sm font-medium text-gray-900"
            >
                {labelText}
            </label>
            <textarea
                inputMode="text"
                id={id}
                rows={numRows}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 whitespace-pre-wrap"
                value={value}
                required={required}
                onInput={onInput}
                placeholder={placeholder}
            />
        </div>
    );
};

export default LabelledTextArea;
