const hoje = new Date();
const natal = new Date(hoje.getFullYear(), 11, 25);
const um_dia = 1000 * 60 * 60 * 24;

if (hoje.getMonth() == 11 && hoje.getDate() > 25)
  natal.setFullYear(natal.getFullYear() + 1);

const dias = Math.ceil((natal.getTime() - hoje.getTime()) / um_dia);

console.log(`${dias} dia(s) para o natal`);


let sdays = document.getElementById('sdias')
let showDays = document.getElementById('cdias');

sdays.onclick = function(){
    showDays.style.animation = 'ShowDays 1s normal'
    showDays.innerHTML = dias;
}