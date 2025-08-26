import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">${celebrity.name}</li>`
    }

    html += "</ol>"
    return html
}

export const handleCelebrityClick = (e) => {
    const target = e.target
    
    if (target.dataset.type === "celebrity") {
        const sport = target.dataset.sport
        const name = target.textContent
        
        window.alert(`${name} is a ${sport} star`)
    } 
}