const arkFood = function (jumlahMakanan, hargaSatuan) {
  let potongan;
  let diskon = 0.35;
  // let maksPotongan = 50000

  let minPembelian = 60000;
  let totalHarga = hargaSatuan * jumlahMakanan;
  let subtotal = totalHarga - potongan;
  console.log(totalHarga);
  console.log(potongan);
  console.log(subtotal);

  if (totalHarga >= 60000) {
    return (potongan = diskon * totalHarga);
  } else if (totalHarga < minPembelian) {
    return (potongan = 0);
  } else if (totalHarga < 143000) {
    return (potongan = 50000);
  }
};

arkFood(3, 25000);
