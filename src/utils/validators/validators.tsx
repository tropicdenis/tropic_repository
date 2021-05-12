export const required = (value:) => {
    if (value) return undefined;
    return 'Field is required';
}

export const maxLengthCreator = (maxLength: number) => (value:) => {
    if (value.lehgth > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}

