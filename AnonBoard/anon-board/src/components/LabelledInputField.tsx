import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext } from 'react';
import { StringStoreContext } from '../contexts/StringStoreContext';
import { scaleInOutVariants } from '../animations/scaleInVariants';

type LabelledInputFieldProps = {
    id: string;
    labelText: string;
    value: string;
    placeholder?: string;
    required?: boolean | undefined;
    errorMessage?: string;
    onInput: (e: React.FormEvent<HTMLInputElement>) => void;
};
const LabelledInputField = ({
    id,
    labelText,
    value,
    placeholder = '',
    required = true,
    errorMessage = '',
    onInput
}: LabelledInputFieldProps) => {
    const stringStore = useContext(StringStoreContext);

    return (
        <div className="flex flex-col">
            <label className="anon-label" htmlFor={id}>
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
            <AnimatePresence>
                {errorMessage?.length > 0 && (
                    <motion.div
                        className="anon-error"
                        variants={scaleInOutVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {errorMessage}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LabelledInputField;
