import React, { useContext } from 'react';
import { StringStoreContext } from '../contexts/StringStoreContext';

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
    const stringStore = useContext(StringStoreContext);
    return (
        <div>
            <label
                htmlFor={id}
                className="block text-sm font-medium text-neutral-dark"
            >
                {labelText}
            </label>
            <textarea
                inputMode="text"
                id={id}
                rows={numRows}
                className="anon-input-field whitespace-pre-wrap"
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
