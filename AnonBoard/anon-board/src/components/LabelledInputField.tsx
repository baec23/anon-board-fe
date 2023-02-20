import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext } from 'react';
import { StringStoreContext } from '../contexts/StringStoreContext';

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

    const errorVariants = {
        hidden: {
            opacity: 0,
            scaleY: 0,
            height: 0
        },
        visible: {
            opacity: 1,
            scaleY: 1,
            height: 'auto',
            transition: {
                duration: 0.25
            }
        },
        exit: {
            opacity: 0,
            scaleY: 0,
            height: 0,
            transition: {
                duration: 0.15
            }
        }
    };

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
                        variants={errorVariants}
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
