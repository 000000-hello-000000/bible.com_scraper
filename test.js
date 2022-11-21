const BibleScraper = require("bible-scraper");

(async () => {
    // Create a NASB2022 instance
    const nasb = new BibleScraper(2692)
    //console.log(await nasb.chapter("1CO.1"))


    var books = [
        'GEN',
        'EXO',
        'LEV',
        'NUM',
        'DEU',
        'JOS',
        'JUD',
        'RUT',
        '1SA',
        '2SA',
        '1KI',
        '2KI',
        '1CH',
        '2CH',
        'EZR',
        'NEH',
        'EST',
        'JOB',
        'PSA',
        'PRO',
        'ECC',
        'SON',
        'ISA',
        'JER',
        'LAM',
        'EZE',
        'DAN',
        'HOS',
        'JOE',
        'AMO',
        'OBA',
        'JON',
        'MIC',
        'NAH',
        'HAB',
        'ZEP',
        'HAG',
        'ZEC',
        'MAL',
        'MAT',
        'MAR',
        'LUK',
        'JOH',
        'ACT',
        'ROM',
        '1CO',
        '2CO',
        'GAL',
        'EPH',
        'PHI',
        'COL',
        '1TH',
        '2TH',
        '1TI',
        '2TI',
        'TIT',
        'PHI',
        'HEB',
        'JAM',
        '1PE',
        '2PE',
        '1JO',
        '2JO',
        '3JO',
        'JUD',
        'REV'
    ];

    var chapters = [
        50,
        40,
        27,
        36,
        34,
        24,
        21,
        4,
        31,
        24,
        22,
        25,
        29,
        36,
        10,
        13,
        10,
        42,
        150,
        31,
        12,
        8,
        66,
        52,
        5,
        48,
        12,
        14,
        3,
        9,
        1,
        4,
        7,
        3,
        3,
        3,
        2,
        14,
        4,
        28,
        16,
        24,
        21,
        28,
        16,
        16,
        13,
        6,
        6,
        4,
        4,
        5,
        3,
        6,
        4,
        3,
        1,
        13,
        5,
        5,
        3,
        5,
        1,
        1,
        1,
        22
    ];

    //iterate through every book of the bible
    //iterate through every chapter of each book

    const fs = require('fs');
    var stream = fs.createWriteStream("append.txt", {
        flags: 'a'
    });

    for (var i = 0; i < books.length; i++) {
        //console.log('book ' + books[i]);
        for (var k = 0; k < chapters[i]; k++) {
            //console.log('chapter ' + parseInt(k + 1));

            stream.write('book ' + books[i] + ', chapter ' + parseInt(k + 1) + "\n")
            stream.write(JSON.stringify(await nasb.chapter(books[i] + "." + parseInt(k + 1))))
            stream.write("\n\n")
        }
    }
    stream.end();


})()