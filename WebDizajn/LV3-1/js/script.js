const a = document.querySelector("#a");
const b = document.querySelector("#b");
const rezultat = document.querySelector("#rezultat");

function izracunaj(operacija){
    const broj1 = Number(a.value);
    const broj2 = Number(b.value);

    console.log(broj1, broj2);

    if(a.value.trim() === "" || b.value.trim() === "" || isNaN(broj1) || isNaN(broj2)){
        rezultat.textContent= "Unesi ispravne brojeve";
    return;
    }

    let r;

    if(operacija === "+"){
        r = broj1 + broj2;
    } 
    else if(operacija === "-"){
        r = broj1 - broj2;
    } 
    else if(operacija === "*"){
        r = broj1 * broj2;
    } 
    else if(operacija === "/"){
        if(broj2 === 0){
            rezultat.textContent = "Dijeljenje s nulom nije moguće";
            return;
        }
        r= broj1/broj2;
    }
    rezultat.textContent = "Rezultat: " + r;
}

document.querySelector("#zbroji").addEventListener("click", () => {
    izracunaj("+");
});

document.querySelector("#oduzmi").addEventListener("click", () => {
    izracunaj("-");
});

document.querySelector("#pomnozi").addEventListener("click", () => {
    izracunaj("*");
});

document.querySelector("#podijeli").addEventListener("click", () => {
    izracunaj("/");
});