let appendArrows = document.querySelectorAll(".append-arrow");
let hiddenli = document.querySelectorAll(".acc-list-hidden-li");
console.log(appendArrows);
for (let i = 0; i < appendArrows.length; i++) {
    appendArrows[i].addEventListener('click', ()=>{
        if (appendArrows[i].classList.contains("active-arrow")) {
            appendArrows[i].classList.remove('active-arrow')
            hiddenli[i].classList.add('hidden')
        } else {
        for (const e of appendArrows) {
            e.classList.remove("active-arrow")
        }
        for (const e1 of hiddenli) {
            e1.classList.add('hidden')
        }
        appendArrows[i].classList.add("active-arrow")
        hiddenli[i].classList.remove('hidden')

    }
    })
    
}