function toggleMode() {
    const html = document.documentElement
    
 //   if(html.classList.contains('light')) {
 //     html.classList.remove('light')
 //   } else {
 //       html.classList.add('light')
 //   }
 
// Podemos substituir todo esses comandos acima que estão comentados,
// colocando o comando abaixo.
html.classList.toggle('light')


// Como trocar a imagem do modo nomal para o light
//Os comados que vamos dar será para pegar a tag img
// substituir a imagem.
// Condições: Se tiver light mode, adicionar a imagem light
// Se tiver sem light mode, manter a imagem normal

// Pega a tag img
const img =  document.querySelector("#profile img")

// Substituir a imagem
if(html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light 
    img.setAttribute('src', './assets/avatar-jean.png')
  } else {
    // se tiver sem light mode, manter a imagem normal
   img.setAttribute('src', './assets/avatar-jean.png')
  }
}