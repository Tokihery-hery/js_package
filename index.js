/**
 * 
 * @param {HTMLElement} element 
 * @param {HTMLElement} parent 
 * @param {InnerHTML} contenu 
 */
let Tags = (element, parent, contenu) => {
    const el = document.createElement(element)
    el.innerHTML = contenu
    parent.appendChild(el)
    return true
}

module.exports = Tags