module.exports = (argv) => {
    argv = argv || process.argv
    let o = {
        filePath : argv[1]
    };
    let arr = argv.slice(2);
    arr.forEach((item, i) => {
        if (i % 2) {
            o[arr[i - 1]] = item;
        }
    });
    return o
}
