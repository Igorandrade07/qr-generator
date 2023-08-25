const wrapper = document.querySelector(".wrapper"),
    qrinput = wrapper.querySelector(".form input"),
    generateBtn = wrapper.querySelector(".form button"),
    qrImg = wrapper.querySelector(".qr-code img");
let prevalue;

generateBtn.addEventListener("click", () => {
    let qrvalue = qrinput.value.trim();
    if (!qrvalue || prevalue === qrvalue) return;
    prevalue = qrvalue;
    generateBtn.innertext = "generating QR Code...";
    qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}';
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innertext = "generate QR Code";
    })

})
qrinput.addEventListener("keyup", () => {
    if (!qrinput.value.trim()) {
        wrapper.classList.remove("active");
        prevalue = "";
    }
});