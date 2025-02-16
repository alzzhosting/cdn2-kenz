async function uploadFile() {
    const fileInput = document.getElementById("fileInput").files[0];
    if (!fileInput) return alert("Pilih file dulu!");

    const formData = new FormData();
    formData.append("file", fileInput);

    const res = await fetch("/upload", {
        method: "POST",
        body: formData,
    });

    const data = await res.json();
    if (data.url) {
        document.getElementById("fileLink").innerHTML = `
            <a href="${data.url}" target="_blank">${data.url}</a>
        `;
    } else {
        alert("Upload gagal!");
    }
}