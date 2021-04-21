export const replaceKeys = (object, map) => {
    // The logical nullish assignment (x ??= y) operator only assigns if x is nullish (null or undefined).
    object ??= {}
    const replacedKeys = Object.keys(object).map(key => {
        const newKey = map[key] ?? key;
        return { [newKey]: object[key] };
    });
    return Object.assign({}, ...replacedKeys);
};