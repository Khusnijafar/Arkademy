function cetak_gambar(target) {    
    let totalBaris = target.length;
    let totalKolom = target.length;

    let Array2D = [];   
    for (let baris = 0; baris < totalBaris; baris++) { 
        
        Array2D.push([])

        for (let kolom = 0; kolom < totalKolom; kolom++) {
            if(baris==kolom || (baris+kolom) ==(totalBaris-1)) { 
                Array2D[baris][kolom] = target[baris]
            } else {
                Array2D[baris][kolom] = '='
            }
        }
    }
    return console.log(Array2D);
    
};

cetak_gambar('PROGAMMER');