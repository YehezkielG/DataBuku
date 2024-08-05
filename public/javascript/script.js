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