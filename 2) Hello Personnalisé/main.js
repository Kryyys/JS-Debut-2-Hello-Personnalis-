function hello() {
    let nom=prompt("Quel est votre nom ?")
    let confirmation=confirm("Confimez vous que votre nom est" + " " + nom)
    if (confirmation) {
        alert("Hello" + " " + nom)
    } else {
        alert("Il faut recommencer !")
    }
}