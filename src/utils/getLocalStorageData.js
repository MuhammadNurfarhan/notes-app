
const getLocalStorageData = (itemName) => {
    // Ambil data 'notes' di dalam localStorage
    // Simpan ke dalam variable bernama existing
    const existing = localStorage.getItem(itemName);

    // Cek jika sudah ada data bernama 'notes' di dalam localStorage
    // Jika ada maka gunakan method JSON.parse() untuk membaca datanya
    // Hal ini dikarenakan localStorage hanya bisa menyimpan tipe data String
    // Jika tidak ada data di dalam 'notes' maka buat sebuah array kosong [] 
    return existing ? JSON.parse(existing) : [];
  };
  
export default getLocalStorageData;
