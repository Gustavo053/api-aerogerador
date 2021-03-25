module.exports = (array, separador) => {
    const arraySeparetor = array.map(e => (e.split(separador)));
    const arrayFinal = arraySeparetor.map(e => (
        e.map(i => {
            i = i.replace(',', '.');
            return i.split('\r').shift();
        })
    ));
    return arrayFinal;
};