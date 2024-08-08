document.getElementById("commentBtn").addEventListener("click", function () {
    const nama = document.getElementById("nama").value;
    const isi = document.getElementById("isi").value;
    fetch(`http://localhost:3000/databuku/komentar/${this.value}`, {
        headers: {
        "Content-Type": "application/json",
        },
        method: "put",
        body: JSON.stringify({
            nama: nama, isi: isi
        })
    }).then(res=> res.json())
    .then((res)=>{
        console.log(res)
    })
})

console.log("using public javascript");

document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.getElementById('displayImage');
            img.src = e.target.result;
            img.style.display = 'block';
        }
        reader.readAsDataURL(file);
    }
});
document.getElementById("pilihkategori").addEventListener("change",function (){
    console.log(this.value)
    document.getElementById("kategori").value = this.value;
})
