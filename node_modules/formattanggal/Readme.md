# FORMATTANGGAL

Node Pakcage yang berguna untuk merubah format tanggal ISO ke Bahasa Indonesia.

Contoh : `2024-08-17T00:00:00`

Hasil : `17 Agustus 2024 Pukul 00:00:00`

## Install

`npm install formattanggal`

## Penggunaan

```javascript

import formatTanggal from 'formattanggal'

const tanggal = '2024-08-17T18:00:00'

hasil1 = formatTanggal(tanggal, true) // Jika jam juga ingin direturn
hasil2 = formatTanggal(tanggal, false) // Jika jam tidak digunakan

console.log(hasil1, hasil2)

```
