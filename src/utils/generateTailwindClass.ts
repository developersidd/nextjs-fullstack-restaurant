
const generateTailwindClass = (prefix: string, classes: string) => {
    return classes.split("").map(cls => (`${prefix}:${cls}`)).join(' ')
}

export default generateTailwindClass