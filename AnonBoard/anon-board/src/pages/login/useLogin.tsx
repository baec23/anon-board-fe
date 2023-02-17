import React, { useContext, useEffect, useMemo, useState } from 'react';
import { StringStoreContext } from '../../contexts/StringStoreContext';
import { isStringAlphaNumeric } from '../../util/InputFilter';

export const useLogin = () => {
    const [username, setUsername] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [hasError, setHasError] = useState<boolean>(false);
    const stringStore = useContext(StringStoreContext);

    const errorMessage = useMemo(() => {
        console.log('ERROr MESSAGe updATED');
        if (hasError) return stringStore.txt_alphaNumericError;
        else return '';
    }, [hasError]);

    const errorVisibility = useMemo<'init' | 'visible' | 'invisible'>(() => {
        console.log('error visibility updated');
        if (hasError) return 'visible';
        else return 'invisible';
    }, [hasError]);

    useEffect(() => {
        if (username.length > 0 && !isStringAlphaNumeric(username)) {
            if (!hasError) setHasError(true);
        } else {
            if (hasError) setHasError(false);
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
        errorMessage,
        errorVisibility
    };
};
