function verificar(params) {
  data=new DataTransfer()
  ano=data.getFullYear()
  fano=document.getElementById('txtano')
  res =document.querySelector('#res')
  if(fano.value,length==0|| (fano.value)>ano){
    alert('[ERRO] verifique os dados e tente novamente!')
  }else{
    fsex=document.getElementsByName('radsex')
    idade=ano-(fano.value)
    genero=''
    img=document.createElementByName('radsex')
    img=setAttribute('id','foto')
    
  }if(fsex[0].checked){
    genero='Homem'
  
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
   
  }
}