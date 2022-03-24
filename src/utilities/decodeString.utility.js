const decodeString = (textToDecode) => {
    let txt = document.createElement("textarea");
    txt.innerHTML = textToDecode;
    return txt.value;
}

export default decodeString