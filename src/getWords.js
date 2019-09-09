import stringNormalizer from "./stringNormalizer"

function* getWords(str) {
    let normStr = stringNormalizer(str);
    let result = '';

    for(let i = 0; i < normStr.length; i++) {
        if(normStr[i] !== ' ') {
            result = `${result}${normStr[i]}`;
        } else {
            yield result;
            result = '';
        }
    }
    yield result;
}

export default getWords();