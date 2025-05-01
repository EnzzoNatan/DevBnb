import React from 'react'

const Item = () => {
  return (
    <a href='/' className='flex flex-col gap-2'>
        <img src="https://www.plantapronta.com.br/projetos/45/15.jpg" alt="imagem da acomodação"
        className='aspect-square object-cover rounded-2xl' />
        
        <div>
            <h3 className='text-xl font-semibold'>Blumenau-SC</h3>
            <p className='truncate text-gray-500'>Desfrute de um quarto confortável e bem localizado em    Blumenau, ideal para quem visita a cidade a trabalho ou    lazer. O espaço é limpo, arejado e conta com cama de   casal, Wi-Fi, ventilador e um ambiente tranquilo para     descansar. Próximo a supermercados, pontos de ônibus e com  fácil acesso ao centro e à Vila Germânica.</p>
        
             <p> <span className='font-semibold'>R$550</span> por Noite</p>
        </div>
        
    </a>
  )
}

export default Item