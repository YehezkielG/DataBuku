document.querySelectorAll("#hapusdata").forEach((btnDelete)=>{
    btnDelete.addEventListener("click", async function (){
        const url = await fetch(`http://localhost:3000/databuku/${this.value}`, {
            method: "delete",
        })
        const response = await url.json();
        console.log(response);
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
