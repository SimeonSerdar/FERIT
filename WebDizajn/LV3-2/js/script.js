
const unos = document.querySelector("#unos");
const dodaj = document.querySelector("#dodaj");
const lista = document.querySelector("#lista");

dodaj.addEventListener("click", () => {
    const tekst = unos.value.trim();

    console.log(tekst);

    if (tekst === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = tekst;

    const obrisi = document.createElement("button");
    obrisi.textContent = "X";
    obrisi.classList.add("obrisi");

    li.addEventListener("click", () => {
        li.classList.toggle("gotovo");
    });

    obrisi.addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(obrisi);
    lista.appendChild(li);

    unos.value = "";
});
