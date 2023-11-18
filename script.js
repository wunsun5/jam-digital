const hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
                'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

const updateTime = () => {
    let sekarang = new Date();

    document.querySelector('.time').innerHTML = 
        nolDigit(sekarang.getHours()) + ' : ' +
        nolDigit(sekarang.getMinutes()) + ' : ' +
        nolDigit(sekarang.getSeconds());

    document.querySelector('.date').innerHTML = 
        hari[sekarang.getDay()] + ', ' +
        nolDigit(sekarang.getDate()) + ' ' +
        nolDigit(bulan[sekarang.getMonth()]) + ' ' +
        nolDigit(sekarang.getFullYear());
}

const nolDigit = (x) => String(x).padStart(2, "0");

updateTime();

setInterval(updateTime, 1000);