const produk = [
    { nama: "Kopi Hitam", harga: 150000, kategori: "Minuman" },
    { nama: "Teh Hijau", harga: 75000, kategori: "Minuman" },
    { nama: "Coklat", harga: 120000, kategori: "Makanan" },
    { nama: "Roti Tawar", harga: 30000, kategori: "Makanan" },
    { nama: "Kue Kering", harga: 200000, kategori: "Makanan" },
    { nama: "Air Mineral", harga: 5000, kategori: "Minuman" }
];

const kategoriDitampilkan = "Minuman";
const kategoriTerpilih = produk.some(item => item.kategori === kategoriDitampilkan) ? kategoriDitampilkan : "Semua Produk";

const produkMahal = produk.filter(item => item.harga > 100000);

const namaProduk = produk.map(item => item.nama);

const produkMahalDiv = document.getElementById("produk-mahal");
const namaProdukDiv = document.getElementById("nama-produk");

produkMahalDiv.innerHTML = `<h2>Produk di Kategori: ${kategoriTerpilih}</h2>`;
produkMahal.forEach(item => {
    produkMahalDiv.innerHTML += `<p>Nama Produk: ${item.nama}, Harga: Rp${item.harga}</p>`;
});

namaProdukDiv.innerHTML = `<h2>Daftar Nama Produk:</h2>`;
namaProduk.forEach(nama => {
    namaProdukDiv.innerHTML += `<p>${nama}</p>`;
});
