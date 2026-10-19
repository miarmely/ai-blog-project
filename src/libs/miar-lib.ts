/**
 * Add one item to the object if the item value not null or undefined.
 * @param obj 
 * @param key 
 * @param value 
 */
export function addItemToObjIfExists(
    obj: Record<string, any>,
    key: string,
    value: any
) {
    if (value)
        obj[key] = value;
}