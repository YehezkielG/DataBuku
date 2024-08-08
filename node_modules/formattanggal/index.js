const formatTanggal = (inputTanggal, denganJam = false) => {

    // Cek input jika null / tidak sesuai format maka return "-"
    if (!inputTanggal || inputTanggal === '-') return '-'

    const date = new Date(inputTanggal)

    if (isNaN(date.getTime())) return '-'

    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',

      // jika parameter true maka return jam
      ...(denganJam ? { hour: '2-digit', minute: '2-digit', second: '2-digit' } : {})
    }

    // Format ke Bahasa Indonesia
    return new Intl.DateTimeFormat('id-ID', options).format(date)
}

// test hasil
console.log(formatTanggal('2024-08-05T15:30:00Z'))
console.log(formatTanggal('2024-08-05T15:30:00Z', false))
console.log(formatTanggal('2024-08-05T15:30:00Z', true))
