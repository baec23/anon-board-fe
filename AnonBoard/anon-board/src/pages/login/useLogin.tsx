import React, { useContext, useEffect, useState } from 'react';
import { StringStoreContext } from '../../contexts/StringStoreContext';
import { isStringAlphaNumeric } from '../../util/InputFilter';

export const useLogin = () => {
    const [username, setUsername] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const stringStore = useContext(StringStoreContext);

    useEffect(() => {
        if (username.length > 0 && !isStringAlphaNumeric(username)) {
            setErrorMessage(stringStore.txt_alphaNumericError);
        } else {
            setErrorMessage('');
        }
        if (username.length <= 0 || !isStringAlphaNumeric(username)) {
            setIsFormValid(false);
        } else {
            setIsFormValid(true);
        }
    }, [username]);

    return { username, setUsername, stringStore, isFormValid, errorMessage };
};
