import React, { useContext, useEffect, useState } from 'react';
import { StringStoreContext } from '../../contexts/StringStoreContext';
import { isStringAlphaNumeric } from '../../util/InputFilter';

export const useLogin = () => {
    const [username, setUsername] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [hasError, setHasError] = useState<boolean>(false);
    const stringStore = useContext(StringStoreContext);

    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {
        if (hasError) setErrorMessage(stringStore.txt_alphaNumericError);
    }, [stringStore]);

    useEffect(() => {
        if (username.length > 0 && !isStringAlphaNumeric(username)) {
            if (!hasError) {
                setHasError(true);
                setErrorMessage(stringStore.txt_alphaNumericError);
            }
        } else {
            if (hasError) {
                setHasError(false);
                setErrorMessage('');
            }
        }
        if (username.length <= 0 || !isStringAlphaNumeric(username)) {
            if (isFormValid) setIsFormValid(false);
        } else {
            if (!isFormValid) setIsFormValid(true);
        }
    }, [username]);
    return {
        username,
        setUsername,
        stringStore,
        isFormValid,
        errorMessage
    };
};
