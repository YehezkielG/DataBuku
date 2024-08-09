const idbuku = document.getElementById("idbuku").value;

document.getElementById("commentBtn").addEventListener("click", function () {
    const nama = document.getElementById("nama").value;
    const isi = document.getElementById("isi").value;
    fetch(`http://localhost:3000/databuku/komentar/${idbuku}`, {
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

document.getElementById("sorting").addEventListener("change",async function(){
    let url = await fetch('http://localhost:3000/databuku');
    let response = await url.json();
    const index = response.findIndex(buku => buku.id == idbuku);
    const komentar = response[index].komentar;
    let html = "";
    if(this.value == 'Terlama'){
        komentar.reverse().forEach(komentar => {
            html+=showComment(komentar);
        });
    }
    else{
        komentar.forEach(komentar => {
            html+=showComment(komentar);
        });
    }
    document.getElementById("commentField").innerHTML = html;
})

function showComment(comment){
    return `<div class="flex my-2">
    <div class="mr-4">
        <img src="../image/icon/user.png" alt="" srcset="" style="width: 50px;">
    </div>
    <div class="bg-gray-200 rounded-lg w-full p-2 inline-block">
        <div class="font-bold text-sm">
            ${comment.nama }
        </div>
        <div>
            ${ comment.isi }
        </div>
    </div>
</div>`
}