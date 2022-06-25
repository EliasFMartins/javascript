function carregar() {
msg=document.getElementById('msg')
img=document.getElementById('imagem')
data=new Date()
hora=data.getHours()
msg.innerHTML=`Agora são ${hora} horas. `
if (hora>= 0 && hora< 12 ){
  //Bom Dia 
  img.src="manha.png" 
  document.body.style.background='#c3d37b'

}else if(hora>=12 && hora<=18){
  msg.innerHTML+=' Boa Tarde!'
  img.src="tarde.png"
  document.body.style.background='#d49c34'
  
}
else{
  //Boa Noite!
  img.src="noite.png"
  document.body.style.background='2571d3'
  
}}
// msg puxa o elemento do id msg e o mesmo pra img a data puxa a data e a hoora a hora puxa a hora da data  com o getHours o msg.innerHTML manda printa a msg  o if seleciona a foto de acordo com as condições pra manha tarde e noite +=innerHTML="Boa Noite " 


