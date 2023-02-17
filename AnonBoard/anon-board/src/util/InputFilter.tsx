export const isStringAlphaNumeric = (value: string) => {
    // const matched = value.match(/[\p{L}\p{N}\s]/gu)?.join('');
    // return value == matched;
    console.log('Testing |' + value + '| ');

    const result = /^[\p{L}\p{N}]+$/u.test(value);
    console.log('Result is - ' + result);
    return result;
};
