export const isStringAlphaNumeric = (value: string) => {
    return /^[\p{L}\p{N}]+$/u.test(value);
};
