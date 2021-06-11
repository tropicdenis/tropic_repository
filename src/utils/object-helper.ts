export const updateObjectIbArray = (items: Array<any>, itemId: string, objPropName: string, newObjProps: {[key: string]: any}) => {
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}