let barang = [
    {nama: "Beras", harga: 1000, jumlah: 5},
    {nama: "Gula", harga: 14000, jumlah:5},
    {nama: "Telur", harga: 20000, jumlah:2},
    {nama: " Minyak goreng", harga: 9000, jumlah:10}
]

total = barang[0] = barang[0].harga * barang[0].jumlah + 
barang[1].harga * barang[1].jumlah + 
barang[2].harga * barang[2].jumlah+
barang[3].harga * barang[3].jumlah;
console.log("Total Belanja: " + total)
