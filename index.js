const form = document.getElementById("generate-form")
const qr = document.getElementById("qrcode")

const onGenerateSubmit =(e)=> {
    e.preventDefault()

    const url = document.getElementById("url").value
    const size = document.getElementById("size").value

    if(url === ""){
       return alert("please enter a valid URL")
    }
}