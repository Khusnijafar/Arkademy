// Jawaban No. 3

function cetak(length) {
    let randomLength = 32;
    let abjadNumber = "abcdefghijklmnopqrstuvwxyz0123456789";
    let random = " ";
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < randomLength; j++) {
            random += abjadNumber.charAt(Math.floor(Math.random() * abjadNumber.length));
        }
        random += "\n";
    }
    return console.log(random);
}

cetak(2);
cetak(3);
cetak(4);
