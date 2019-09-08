const stringNormalizer = (str) => {
    let normStr = '';
    let result = '';

    normStr = str.trim();
    for(let i = 0; i < normStr.length; i++) {
        if(normStr[i] !== ' ') {
            result = `${result}${normStr[i]}`;
        } else if(normStr[i+1] !== ' ') {
            result = `${result} `;
        }
    }
    return(result);
};

export default stringNormalizer()