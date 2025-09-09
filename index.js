async function criarConselho(){
    const resposta = await fetch('https://api.adviceslip.com/advice')

    if (!resposta.ok){
      throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
    }
  
    return await resposta.json()
}

async function buscarConselho(){
   try{

   const chamandoConselho = await criarConselho()
   const conselho = chamandoConselho.slip.advice
   const idConselho = chamandoConselho.slip.id
   const exibicao = document.querySelector('.advice-description').innerText = conselho
   const exibicaoId= document.querySelector('.advice-id').innerText = `ADVICE #${idConselho}`

}catch(error){
   console.error("Erro ao tentar buscar as informações da API", error);
}
   
}
buscarConselho()

const btn = document.querySelector('.advice-update')
btn.addEventListener('click', buscarConselho)

