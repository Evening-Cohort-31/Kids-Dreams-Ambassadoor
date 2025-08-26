import { getChildren } from "./database.js"

const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

export const handleKidClick = (e) => {
    const target = e.target

    if (target.dataset.type === "child") {
        const name = target.textContent
        const wish = target.dataset.wish

        window.alert(`${name}'s wish is ${wish}`)
    }
}