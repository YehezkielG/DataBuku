function intreactDeleteBtn(){
    document.querySelectorAll("#hapusdata").forEach((btnDelete)=>{
        btnDelete.addEventListener("click", async function (){
            const id = this.value;
            document.getElementById("confirm").style.display = "block";
            document.getElementById("konfirmasi").addEventListener("click",async ()=>{
            const url = await fetch(`http://localhost:3000/databuku/${id}`, {
                method: "delete",
            })
            const url2 = await fetch('http://localhost:3000/databuku');
            const response = await url2.json();
            let i = 1;
            removeBookList();
            response.forEach((buku)=>{
                const tr = document.createElement("tr");
                tr.className = "shadow-sm border rounded-lg"
                tr.innerHTML+=`
                    <td class="text-center p-2 border" >${i++}</td>
                    <td class="px-2 text-blue-500">
                        <span id="judul" style="cursor: pointer;">${ buku.judul }</span>
                        <img src="${buku.sampul}" alt="" srcset="" width="150" id="sampul" class="absolute border-2 -mt-2" style="display: none;">
                    </td>
                    <td class="px-2">${buku.penulis }</td>
                    <td class="px-2">${buku.penerbit}</td>
                    <td class="px-2">${buku.kategori}</td>
                    <td>
                        <a href="" class="rounded-full px-2 text-gray-400 underline flex items-center">
                            <img src="../image/icon/edit1.png" alt="" width="18">
                            Edit
                        </a>
                    </td>
                    <td class="">
                        <button class="material-symbols-outlined p-1 text-red-500"
                                    style="font-size:17px;" value="${buku.id }" id="hapusdata">
                                    close
                        </button>
                    </td>
                `;
                document.getElementById("Booklist").appendChild(tr);
            })
            closemodal();
            intreactDeleteBtn();
            })
        })
    })
}

function closemodal(){
    document.getElementById("confirm").style.display = "none";
}

function removeBookList(){
    document.getElementById("Booklist").innerHTML= '';
}

intreactDeleteBtn();
console.log("using public javascript");

