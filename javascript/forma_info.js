function sekundes() {
    const baiti=document.getElementsByName("baiti")
    const sek=parseFloat(document.getElementById("sekundes_ladet").value)
    if(isNaN(sek)){
        document.getElementById("result").value=""
        return
    }
    if(baiti[0].checked)  {
        document.getElementById("result").value=sek*1000000/1024/8*25
    }
    if(baiti[1].checked)  {
        document.getElementById("result").value=sek*1000/8*25
    }
}
document.getElementById("KiB").addEventListener("click", sekundes)
document.getElementById("KB").addEventListener("click", sekundes)
document.getElementById("sekundes_ladet").addEventListener("keyup", sekundes)