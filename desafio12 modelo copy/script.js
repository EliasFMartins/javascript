function verificar(params) {
data=new Date()
ano=data.getFullYear()
// getFullYear e pra pegar o ano com 4 digitos!
fano=document.getElementById('txtano')
// esta puxando os dados do input do ano
res=document.querySelector('div#res')
if(fano.value.length==0 ||fano.value>ano){
  alert('verifique os dados inseridos e tente novamente !')
}else{
  fsex=document.getElementsByName('radsex')
  // usei o querySelectore deu merda aqui ficar de olho
  idade=ano-fano.value
  // sempre se lenbrar de colocar o value apos o ano pra n bugar 
  // e se ainda n der certo colocar number na frente 
  genero= ' '
  img=document.createElement('img')
  img.setAtribute('id','foto')
  if(fsex[0].checked){
    genero = 'Homem'
    if(idade>=0 && idade<10){
      // criança
    }else if(idade>=10 && idade<21){
      // Jovem
    }else if(idade<50){
      // adulto
    }else{
      //idoso
    }
    
  } else if(fsex[1].checked) {
      genero ='Mulher'
      if(idade>=0 && idade<10){
        // criança
      }else if(idade>=10 && idade<21){
        // Jovem
      }else if(idade<50){
        // adulto
      }else{
        //idoso
      }
    }
   res.innerHTML=`Detectamos ${genero} com ${idade} anos.`
    
  }


// res.innerHTML=`Idade calculada :${idade}`
