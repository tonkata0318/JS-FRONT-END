function editElement(element,stringMatch,replacer) {
    let text=element.textContent
    text=text.replace(stringMatch,replacer);
    element.textContent=text;
}