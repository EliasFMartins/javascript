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
  img.setAttribute('id','foto')
  if(fsex[0].checked){
    genero = 'Homem'
     if(idade>=0 && idade<10){
      // criança
      img.setAttribute('src','foto-bebe-m.png')
    }else if(idade>=10 && idade<21){
      // Jovem
      img.setAttribute('src','foto-jovem-m.png')
    }else if(idade<50){
      // adulto
      img.setAttribute('src','foto-adulto-m.png')
    }else{
      //idoso
      img.setAttribute('src','foto-idoso-m.png')
    }
   
    
  } else if(fsex[1].checked) {
      genero ='Mulher'
    }
    if(idade>=0 && idade<10){
      // criança
      img.setAttribute('src','foto-bebe-f.png')
    }else if(idade>=10 && idade<21){
      // Jovem
      img.setAttribute('src','foto-jovem-f.png')
    }else if(idade<50){
      // adulto
      img.setAttribute('src','foto-adulto-f.png')
    }else{
      //idoso
      img.setAttribute('src','foto-idoso-f.png')
    }
    res.style.textAlin='center'
   res.innerHTML=`Detectamos ${genero} com ${idade} anos.`
   res.appendChild(img)
    
  }


// res.innerHTML=`Idade calculada :${idade}`
}
