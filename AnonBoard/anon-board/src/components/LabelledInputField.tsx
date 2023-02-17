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
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor={id}
            >
                {labelText}
            </label>
            <input
                id={id}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
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
