import React, { useContext } from 'react';
import { StringStoreContext } from '../contexts/StringStoreContext';

type LabelledTextAreaProps = {
    className?: string;
    id: string;
    labelText: string;
    value: string;
    placeholder: string;
    numRows?: number;
    required?: boolean | undefined;
    onInput: (e: React.FormEvent<HTMLTextAreaElement>) => void;
};
const LabelledTextArea = ({
    className,
    id,
    labelText,
    value,
    placeholder,
    numRows = 4,
    required = true,
    onInput
}: LabelledTextAreaProps) => {
    const stringStore = useContext(StringStoreContext);
    return (
        <div className={`${className}`}>
            <label
                htmlFor={id}
                className="block text-sm font-medium text-neutral-dark"
            >
                {labelText}
            </label>
            <textarea
                className={`anon-input-field whitespace-pre-wrap resize-none`}
                inputMode="text"
                id={id}
                rows={numRows}
                value={value}
                required={required}
                title={stringStore.tt_requiredForm}
                onInput={onInput}
                placeholder={placeholder}
            />
        </div>
    );
};

export default LabelledTextArea;
