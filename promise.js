/**
 * Membuat fungsi download
 * @returns (object) promise
 */
const download = () => {
    /**
     * Promise dibuat menggunakan class promise
     * Promise menerima callback function
     * function menerima 2 parameter: resolve dan reject
     * resolve dipanggil jika proses berhasil
     * reject dipanggil jika proses gagal
     */
    return new promise ((resolve, reject) => {
        const status = true;

        setTimeout(() =>{
            if(status) {
                resolve("Download Selesai");
            }else{
                reject("Download Gagal");
            }
        }, 5000);
    });
};

console.log(download());

/**
 * .then menangkap hasil resolve
 * .catch menangkap hasil reject
 */
const main = () => {
    download()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });  
};

main();