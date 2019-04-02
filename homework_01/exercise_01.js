window.onload = function () {
    //Part 1 ----------------------------------------
    String.prototype.filterWords1 = function (badWords1) {
        return this.split(' ')
            .map(word1 => {
                if (badWords1.indexOf(word1) > -1)
                    return '***';
                else
                    return word1;
            }).join(' ');
    };

    console.log("1. This is nice house".filterWords1(['house', 'nice']));

    //Part 2 ----------------------------------------
    String.prototype.filterWords2 = function (badWords2) {
        return new Promise(resolve => {
            resolve(
                this.split(' ')
                    .map(word2 => {
                        if (badWords2.indexOf(word2) > -1)
                            return '***';
                        else
                            return word2;
                    }).join(' '));
        });
    };

    "2. This is nice house".filterWords2(['house', 'nice'])
        .then(console.log)
        .catch(console.log);

    //Part 3 ----------------------------------------
    String.prototype.filterWords3 = async function (badWords3) {
        return await this.split(' ')
            .map(word3 => {
                if (badWords3.indexOf(word3) > -1)
                    return '***';
                else
                    return word3;
            }).join(' ');
    };

    "3. This is nice house".filterWords3(['house', 'nice'])
        .then(console.log)
        .catch(console.log);

    //Part 4 ----------------------------------------
    const {of, from} = rxjs;
    const {map, reduce} = rxjs.operators;

    String.prototype.filterWords4 = function (badWords4) {
        return from(this.split(' '))
            .pipe(
                map(word4 => {
                    if (badWords4.indexOf(word4) > -1)
                        return '***';
                    else
                        return word4;
                }),
                reduce((total, current) => total + ' ' + current)
            );
    };

    "4. This is nice house"
        .filterWords4(['house', 'nice'])
        .subscribe(
            (string) => console.log(string),
            null,
            null
        );
};