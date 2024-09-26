import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import Redmi from '../assets/redminote12pro.jpg';
import Earphone from '../assets/minibestEarphone.jpg';
import gpt from '../assets/chatgpt4.jpeg';
import bag from '../assets/greenBackpack.jpeg';

import welcome from '../assets/oasisWelcome.jpg';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dataWish = [
    {
      id: 1,
      image: Redmi,
      name: 'Xiaomi Redmi Note 12 Pro (6GB/128GB) | (8GB/256GB) Kamera Quad 108MP 120Hz Layar AMOLED',
      price: '3.299.000',
      sold: '4,214',
      rating: '4.9',
      desc: `Xiaomi Official Redmi Note 12 Pro

Warna : Graphite Gray & Glacier Blue 

Processor:

- Snapdragon 732G
- CPU: Octa-core CPU, up to 2.2GHz
- GPU: Qualcomm Adreno 618

RAM/Storage:

- 6GB+128GB, 8GB+256GB
- Support expandable Storage up to 1TB

Display: 6.67” FHD+ AMOLED Dot Display

- Resolution: 2400 x 1080
- Refresh rate : Up to 120Hz
- Supports Dolby Vision
- Sunlight Display

Kamera belakang :

108MP wide camera
8MP ultra-wide camera
2MP macro camera
2MP depth camera

Kualitas Video ->

- 4K 3840 x 160 | 30fps 
- 1080p 1920 x 1080 | 60fps 
- 1080p 1920 x 1080 | 30fps
- 720p 1280 x 720 | 30fps  

Kamera Depan : 16MP (f/2.4)

Kualitas Video ->

- 1080p 1920 x 1080 | 30fps
- 720p 1280 x 720 | 30fps

Baterei & pengisian daya

- 5000mAnh (typ)
- 67W turbo charging
- 67W in-box charger
- USB-C

Dimensi:

Panjang: 164.20mm
Lebar: 76.1mm
Ketebalan: 8.12mm
Berat: 201.8g

Konektivitas: 

- SIM1 + Hybrid (SIM or microSD)
Audio: Dual Speakers 
Supports Dolby Atmos
3.5mm headphone jack

Sistem Operasi : MIUI 13, Android 11

Xiaomi Official Store Garansi Resmi, IMEI Resmi Terdaftar di database IMEI KEMENPERIN

Isi Kemasan :

Redmi Note 12 Pro 
Adaptor
Kabel USB 
Alat pembuka SIM 
Kartu garansi 
Panduan pengguna

*Note: Diharapkan untuk tidak klik "Pesanan diterima" sebelum menerima paket dengan baik. Xiaomi tidak bertanggung jawab atas segala kerusakan setelah konfirmasi "Pesanan diterima".`,
    },
    {
      id: 2,
      image: Earphone,
      name: 'MINIBEST TWS inpods i12 / 12 Pro Handsfree',
      price: '39.900',
      sold: '10,000',
      rating: '4.7',
      desc: `NOMOR POSTEL : 86392/SDPPI/2022

Fitur:

* Ukuran super mini, mudah dibawa
* Tekstur Lulur, warna macaron
* Dilengkapi dengan charging case magnetic untuk memudahkan penyimpanan dan pengisian daya
* Koneksi nirkabel Bluetooth 5.0, transmisi sinyal stabil dan cepat
* Suara HD tinggi dan efek stereo saat mendengarkan musik
* Sentuh untuk memanggil Siri dan Asisten Voice untuk membuat hidup Anda lebih mudah

Produk Resmi Jamin ORI Brand MINIBEST

Spesifikasi:

Barang: Headset Bluetooth 
Model: MB-555
Versi Bluetooth: V5.0 + EDR
Jarak Transmisi(bebas barrie): 15-25m
Saluran: Stereo
Metode kontrol: kontrol sentuh
Waktu panggilan: 2 ~ 3 jam
Waktu bermain: 2 ~ 3 jam
Waktu siaga: 6 jam
Kapasitas baterai earphone: 35mAh
Kapasitas kotak pengisian daya: 300mAh
Mengisi waktu kotak pengisian daya: 4-5 kali
Waktu pengisian: 1 jam

Antarmuka pengisian daya: Lightning USB

Bahan: Tekstur Lulur
Warna: Hitam,Putih,Biru,Pink,Hijau,Kuning,Biru laut,Abu-abu，Ungu

Tips kontrol sentuh:

siri / asisten suara —— sentuhan lama 2s
hidupkan / matikan —— sentuh lama 4s
play / pause —— sentuh satu kali
jawab / tutup —— sentuh satu kali
lagu sebelumnya / lagu berikutnya ——sentuh 3 kali (L / R)
kurangi volume / tambah volume ——Sentuhan terus menerus (L / R)
      
Kotak pengisian:
tombol pengisian ——cahaya terang saat mengisi daya,tekan tombol untuk mengisi tanpa kabel
      
Paket berisi
1 x tws headset bluetooth
1 x kotak pengisian
1 x kabel charger`,
    },
    {
      id: 3,
      image: gpt,
      name: 'CHATGPT 4 LIFETIME Tanpa Batas Pertanyaan',
      price: '20.900',
      sold: '2,200',
      rating: '4.8',
      desc: `Keunggulan :
- Tanya tanpa batas
- tanpa Iklan
- Jawaban lebih akurat dan detail
- Scan dan menjawab dalam gambar
- Tanpa antri
- Bukan share
- Dapat digunakan di Hp dan PC

Aplikasi akan kami kirimkan melalui email, tinggal instal dan langsung dapat menikmati fitur chatgpt 4

Sertakan email di deskripsi atau langsung chat admin`,
    },
    {
      id: 4,
      image: bag,
      name: 'Open Ending Water Resistant Backpack Basic Tas Ransel (Light Colors)',
      price: '134.000',
      sold: '8,900',
      rating: '4.9',
      desc: `Open Ending Water Resistant Backpack Basic Tas Ransel (Light Colors) bp.08 adalah tas backpack daily dengan bahan water resistant canvas, Backpack Terbaru dengan design yang simple ini bisa digunakan untuk membawa banyak barang, bisa di gunakan untuk Sekolah, Kuliah, dan Kerja. Backpack Water Resisant ini didesain untuk menyimpan keperluan harian Anda dengan aman dan rapi.

Kompartemen utama tas ini dilengkapi saku dalam yang dapat memuat laptop 14 – 15.6 inch” dan organizer untuk menyimpan dompet atau barang kecil lainnya. 

Tas ini menggunakan bahan water resistant yang memberikan perlindungan dari cipratan air atau hujan dengan intensitas ringan.

Kelebihan dari Backpack Water Resistant ini yaitu terdapat slot organizer tambahan di saku dalam, sehingga dapat menampung semua perlengkapan alat tulis kalian dengan maksimal.

Sangat cocok untuk berbagai aktivitas baik indoor maupun outdoor. Design unisex bisa untuk laki laki maupun perempuan.

dengan ketersediaan compartment sbb:

3 total compartments

2 compartments botol

DETAIL:

✓ Material : canvas water resistant

✓ Lapisan Dalam : Full Satin

✓ Zipper : YKK

✓ Size : 37,5cm x 26,5cm x 11cm

✓ Kapasitas : 15 L

✓ Berat : 350 gram

SPESIFIKASI:

-1 Kompartemen Utama ( slot laptop fit sampai dengan ukuran 15,6 Inch )

-1 Kompartemen Saku depan dengan penutup retsleting, untuk memudahkan kalian Ketika membawa banyak barang.

-2 Kompartemen saku samping kiri dan kanan ( botol minum dan sebagainya )

-Panel bagian belakang dilapisi busa memberikan kenyamanan saat dipakai.Bagian panel pada punggung dilapisi busadan panjang tali ransel bisa disesuaikan.

-Tersedia slot laptop yang pas untuk membawa laptop hingga 15,6-inch.

-Dilengkapi dua slot khusus Tumbler untuk memudahkan membawa botol minum

-Dilengkapi Handling Bag memudahkan membawa tas dengan mudah.

-Perbedaan Warna produk dengan display pada settingan layar monitor anda dapat terjadi.

Happy Shopping`,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Home</Text>
        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
          <Icon name="cart-outline" style={styles.Icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search Items"
          placeholderTextColor={'grey'}
          style={styles.searchBar}
        />
        <TouchableOpacity style={styles.searchIconContainer}>
          <Icon name="camera-outline" style={styles.photoIcon} />
        </TouchableOpacity>
        <View style={{borderWidth: 1, borderColor: '#9883e5'}}></View>
        <TouchableOpacity style={styles.searchIconContainer}>
          <Icon name="search" style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.wishlistContainer}>
        <View style={styles.carouselContainer}>
          <Image source={welcome} style={styles.carouselImage} />
        </View>
        <View style={styles.allButtonContainer}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Icon name="shirt-outline" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Fashion</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Icon2 name="blender" style={styles.buttonIcon} />
            <Text numberOfLines={1} style={styles.buttonText}>
              Electronic
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Icon2 name="lipstick" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Beauty</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Icon2 name="food" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Icon3 name="laptop-chromebook" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Laptop</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Icon name="phone-portrait-outline" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Phone</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Icon name="football" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Sport</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Icon3 name="more-horiz" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>More</Text>
          </TouchableOpacity>
        </View>
        {dataWish.map((item, index) => {
          console.log(item);
          return (
            <TouchableOpacity
              style={styles.objectContainer}
              key={index}
              onPress={() => navigation.navigate('DetailScreen', {item: item})}>
              <Image source={item.image} style={styles.imageContainer} />
              <Text numberOfLines={3} style={styles.objectTitle}>
                {item.name}
              </Text>
              <View style={styles.detailContainer}>
                <Text style={styles.objectPrice}>Rp{item.price}</Text>
                <TouchableOpacity>
                  <Icon name="cart-outline" style={styles.objectBuy} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#b8dbd9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    marginLeft: 15,
    color: '#000',
    fontFamily: 'Montserrat-SemiBold',
  },
  Icon: {
    margin: 10,
    fontSize: 30,
    color: '#000',
  },
  searchBar: {
    fontSize: 16,
    marginLeft: 5,
    fontFamily: 'Montserrat-Regular',
    flex: 1,
    color: '#000',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#9883e5',
    paddingLeft: 5,
    marginVertical: 10,
  },
  searchIconContainer: {
    alignSelf: 'center',
  },
  searchIcon: {
    color: '#9883e5',
    fontSize: 24,
    marginRight: 10,
    marginBottom: 1,
    paddingLeft: 10,
  },
  photoIcon: {
    color: '#9883e5',
    fontSize: 32,
    marginRight: 10,
  },
  scrollContainer: {
    marginHorizontal: 10,
    marginBottom: 5,
  },
  scrollPart: {
    backgroundColor: '#b8dbd9',
    marginHorizontal: 5,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    height: 40,
  },
  scrollText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Montserrat-SemiBold',
  },
  scrollPartSortBy: {
    marginRight: 5,
    marginLeft: 2,
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginVertical: 10,
    borderRadius: 10,
    height: 40,
    flexDirection: 'row',
    borderColor: '#9883e5',
    borderWidth: 2,
  },
  iconSortBy: {
    color: 'black',
    fontSize: 20,
    marginLeft: -5,
    marginRight: 5,
    marginTop: 1,
  },
  objectContainer: {
    backgroundColor: '#b8dbd9',
    margin: 10,
    borderRadius: 10,
  },
  imageContainer: {
    resizeMode: 'cover',
    width: 175,
    height: 175,
    alignSelf: 'center',
    borderRadius: 5,
  },
  wishlistContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  objectTitle: {
    textAlign: 'center',
    color: '#000',
    fontFamily: 'Montserrat-SemiBold',
    marginVertical: 5,
    marginHorizontal: 5,
    fontSize: 16,
    width: 160,
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  objectPrice: {
    color: '#000',
    fontFamily: 'Montserrat-SemiBold',
    alignSelf: 'center',
    fontSize: 18,
  },
  objectBuy: {
    color: '#000',
    backgroundColor: '#9883e5',
    padding: 5,
    borderRadius: 10,
    fontSize: 24,
  },
  carouselContainer: {
    marginBottom: 5,
  },
  carouselImage: {
    resizeMode: 'cover',
    width: 395,
    height: 180,
  },
  allButtonContainer: {
    borderRadius: 5,
    margin: 10,
    backgroundColor: '#b8dbd9',
    flexDirection: 'row',
    height: 180,
    flexWrap: 'wrap',
  },
  buttonContainer: {
    borderWidth: 1,
    borderColor: '#9883e5',
    height: 80,
    margin: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
    padding: 5,
    width: 83,
  },
  buttonIcon: {
    alignSelf: 'center',
    color: '#9883e5',
    fontSize: 32,
    paddingVertical: 5,
  },
  buttonText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#9883e5',
    fontSize: 12,
    alignSelf: 'center',
  },
});

export default HomeScreen;
