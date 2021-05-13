export const required = (value: any) => {
    if (value) return undefined;
    return 'Field is required';
}

export const maxLengthCreator = (maxLength: number) => (value: any) => {
    if (value.lehgth > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}

