console.log("Cheguei!");

//seletores
const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector('#qr-form input');
const qrCodeImg = document.querySelector("#qr-code img");


//funcoes
const genereateQrCode = () => {
    const qrCodeInputValue = qrCodeInput.value;
    if (!qrCodeInputValue) return;
    qrCodeBtn.innerText = "Gerando QR Code...";
    qrCodeImg.src = `
        https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrCodeInputValue}
    `;
    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        qrCodeBtn.innerHTML = "Gerado!";
    })

    console.log(qrCodeInputValue);
}


//eventos
qrCodeBtn.addEventListener("click", () => {
    genereateQrCode()
})

qrCodeInput.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        genereateQrCode()
    } 
})

qrCodeInput.addEventListener("keyup", () =>{
    if (!qrCodeInput.value) {
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar QR Code";
    }
})
