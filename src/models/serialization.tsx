// TODO - test and use this?

type Class = { new(...args: any[]): any; };
const fieldMap: { [className: string]: {[attrName: string]: [number, Class | undefined]} } = {};

export class Serializable {
    serialize() {
        const properties = fieldMap[this.constructor.name];
        const entries = Object.entries(properties);
        const numFields = Math.max(...entries.map(e => e[1][0])) + 1;

        const toSerialize = Array(numFields).fill(null);
        for (const [attrName, [index, obj]] of entries) {
            // @ts-ignore
            let value = this[attrName];

            if (value instanceof Serializable) {
                value = value.serialize();
            }
            toSerialize[index] = value;
        }
        return toSerialize;
    }
}

export function unserialize(obj: Class, data: any[]) {
    const instance = new obj();
    const properties = fieldMap[obj.constructor.name];
    const entries = Object.entries(properties);

    for (let idx=0; idx < data.length; idx++) {
        const value = data[idx];
        const matchedEntry = entries.find(e => (e[1][0] === idx));
        if (matchedEntry) {
            const attrName = matchedEntry[0];
            const embedClass = matchedEntry[1][1];

            const isArray = Array.isArray(value);
            if (isArray && embedClass) {
                instance[attrName] = unserialize(embedClass, value);
            }
            else if (!isArray && !embedClass) {
                instance[attrName] = value;
            }
            else {
                console.log(`Failed to unserialize data to class ${obj.constructor.name} at index ${idx}`)
            }
        }
    }
}

export function Key(id: number, cls?: Class) {
    return function (target: Object, propertyKey: string | symbol) {
        console.log(target);
        console.log(propertyKey);
        fieldMap[target.constructor.name] = {
            ...fieldMap[target.constructor.name],
            [propertyKey]: [id, cls]
        }
    }
}

class Station extends Serializable {
    @Key(0)
    LOL = 1;
}

console.log(new Station().serialize());