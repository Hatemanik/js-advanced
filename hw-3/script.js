//функция замены кавычек
function zamena(str) {
    return str.replace(/'/g, '"').replace(/\b"\b/g, '\'')
}