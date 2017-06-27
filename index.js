module.exports = () => {
    let o = {
        filePath : process.argv[1]
    };
    let arr = process.argv.slice(2);
    arr.forEach((item, i) => {
        if (i % 2) {
            o[arr[i - 1]] = item;
        }
    });
    return o
}
