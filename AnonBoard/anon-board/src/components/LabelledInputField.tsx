import React, { useContext } from 'react';
import { StringStoreContext } from '../contexts/StringStoreContext';

type LabelledInputFieldProps = {
    id: string;
    labelText: string;
    value: string;
    placeholder: string;
    required?: boolean | undefined;
    onInput: (e: React.FormEvent<HTMLInputElement>) => void;
};
const LabelledInputField = ({
    id,
    labelText,
    value,
    placeholder,
    required = true,
    onInput
}: LabelledInputFieldProps) => {
    const stringStore = useContext(StringStoreContext);
    return (
        <div>
            <label
                className="block text-sm font-medium text-neutral-dark"
                htmlFor={id}
            >
                {labelText}
            </label>
            <input
                id={id}
                className="anon-input-field"
                type="text"
                required={required}
                title={stringStore.tt_requiredForm}
                placeholder={placeholder}
                value={value}
                onInput={onInput}
            />
        </div>
    );
};

export default LabelledInputField;
