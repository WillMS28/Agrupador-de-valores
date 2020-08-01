
let num = document.getElementById('txtn')    
let list = document.getElementById('selist')
let res = document.getElementById('res')
let grupo = []

function adnumber(n){
    if (Number(n) <=100 && Number(n) >= 1 ) {
        return true
    } else {
        return false
    }
}

function inList (n, g) {
    if (g.indexOf(Number(n)) != -1 ) {
        return true
    } else {
        return false
    }
}

function adicionar() {    
    if (adnumber(num.value) && !inList(num.value, grupo)) {        
        let item = document.createElement('option')
        item.text = `O número ${num.value} foi adicionado`
        list.appendChild(item)

        grupo.push(Number(num.value))
        res.innerHTML = ''
        num.value = ''
        num.focus()
        
    } else {
        alert('Numero invalido')
    }   
    
}
function compararNumeros(a, b) { // função para testar os elementos e ordena-los como uma ordem numerica crescente 
    return a - b;
  }

function finalizar() {
    if (grupo.length == 0) {
        alert('Nenhum valor adicionado')
    } else {
        grupo.sort(compararNumeros) // condição de ordem: função para colocar os numeros em ortem crescente 

        let ultipos = Number(grupo.length) // posição do ultimo numero
        let maiorvalor = grupo[ultipos-1] // valor do ultimo numero
        let menorvalor = grupo[0]
        let totalsoma = 0

        for (let p=0; p < grupo.length; p++) {
        totalsoma += grupo[p]
        }

        //let ultimo = Number(grupo.indexOf(grupo.length -1))
   
        res.innerHTML = 
        `<br> Ao todo, temos ${grupo.length} numeros informados.<br><br>
        O maior valor informado foi o ${maiorvalor}.<br><br>
        O menor valor informado foi o ${menorvalor}.<br><br>
        A soma de todos os numeros informados é ${totalsoma}.<br><br>
        A media dos numeros informados é ${totalsoma / grupo.length}`
    
    }
    
}