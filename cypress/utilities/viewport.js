import { _beforEeach } from "./beforeEach";

const webSizes = Cypress.env('webSizes')
const mobileSizes = Cypress.env('mobileSizes')

function getItNameFromSize(size) {
    if (size.name) {
        return size.name
    } else if (size.constructor === String) {
        return size;
    } else if (Cypress._.isArray(size)) {
        return `(${size[0]}, ${size[1]})`
    } else if (size.size && Cypress._.isArray(size.size)) {
        return `(${size.size[0]}, ${size.size[1]})`
    }

    return "unknown";
}

export function testWrapper({ itTitle, viewportGroup }, wrappedFunction) {
    const sizeArr = [...(viewportGroup === "web" ? webSizes : mobileSizes)];

    sizeArr.forEach((size) => {
        it(`${itTitle} on ${getItNameFromSize(size)}`, () => {
            if (size.constructor === String) {
                cy.viewport(size)
            } else if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
            } else if (size.size && Cypress._.isArray(size.size)) {
                cy.viewport(size.size[0], size.size[1])
            } else {
                throw new Error(`Size variable is not valid: ${JSON.stringify(size)}`)
            }

            _beforEeach();

            wrappedFunction()
        })
    })
}