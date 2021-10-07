const arkFood = function (jumlahMakanan, hargaSatuan) {
  
  let diskon = 0.35;
  // let maksPotongan = 50000
  

  let minPembelian = 60000;
  let totalHarga = hargaSatuan * jumlahMakanan;
  let potongan = diskon * totalHarga
  let subtotal = totalHarga - potongan;
  console.log(" total harga = " + totalHarga);
  console.log("potongan " + potongan);
  console.log("sub total " + subtotal);

  if (totalHarga >= 60000) {
    return (potongan = diskon * totalHarga);
  } else if (totalHarga < minPembelian) {
    return (potongan = 0);
  } else if (totalHarga < 143000) {
    return (potongan = 50000);
  }
};

arkFood(3, 25000);
