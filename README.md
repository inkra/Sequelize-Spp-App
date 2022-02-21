# Sequelize-Spp-App
Setting sequelize projek aplikasi spp

<h2>Membuat Tabel & Relasi dengan SEQUELIZE pada folder migrations dengan ketik command </h2>


<b>Tabel Kelas :</b>
sequelize model:create --name kelas --attributes nama_kelas:string,jurusan:string,angkatan:integer

<b>Tabel Siswa :</b>
sequelize model:create --name siswa --attributes nis:char,nama:string,id_kelas:integer,alamat:text,no_tlp:string

<b>Tabel Petugas :</b>
sequelize model:create --name petugas --attributes username:string,password:string,nama_petugas:string,level:enum

<b>Tabel SPP :</b>
sequelize model:create --name spp --attributes angkatan:integer,tahun:integer,nominal:integer

<b>Tabel Pembayaran :</b>
sequelize model:create --name pembayaran --attributes id_petugas:integer,nisn:integer,tgl_bayar:date,bulan_spp:integer,tahun_spp:integer,id_spp:integer,jumlah_bayar:integer

<br>
<h2>Hasilnya adalah database sebagai berikut berikut</h2>
