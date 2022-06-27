function tabuada(){
  let num=document.getElementById('txtn')
  let tab=document.getElementById('seltab')
  if(num.value.length == 0){
    alert('Por Favor Digite Um Número')
  }else{
    let n = Number(num.value)
    let c = 1
    tab.innerHTML=''
    // pra limpar a taboada antes de executar a taboada 
    while(c <= 10) {
      let item = document.createElement('option')
      item.text =`${n} X ${c} = ${n*c} `
      intem.value=`tab${c}`
      tab.appendChild(item)
      c++
    }
    // condições simples 
    // primeiro vc puxa os dados do input e coloca  em variaveis 
    // verifica se o comprimento do valor do numero e igual a 0 caso seja emita uma alerta, se não prosiga   traforme o numero  em Number  e aloque o seu valor em outra variavel selecione uma variavel para o contador use a repetição ate o numero desejado com while ou for  cria o elemento option  faz a repetição e cria um item dentro do filho 
  }

}