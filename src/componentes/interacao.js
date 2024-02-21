import { useState } from 'react'

export default function Interacao() {
    const [nome, setNome] = useState('Maria')
    const [sobreNome, setSobreNome] = useState('das dos dores')
    const [idade, setIdade] = useState(18)
    const [situacao, setSituacao] = useState("")

    function handleEvent() {
        if(idade == ''){
         setSituacao("")
         alert('Informe idade')
         return         
       }
       let msg = "maior"
        if(idade < 18){
          msg = "menor"
       }
       setSituacao(msg)
    }
    return (
        <div>
            <div className='m-3'>
                <label for="nome" className='form-label'>Informe nome</label>
                <input
                    className='form-control'
                    id="nome"
                    type='text'
                    value={nome}
                    onChange={(txt) => setNome(txt.target.value)}
                />
            </div>

            <div className='m-3'>
                <label for="sobreNome" className='form-label'>Informe sobrenome</label>
                <input
                    className='form-control'
                    id="sobreNome"
                    type='text'
                    value={sobreNome}
                    onChange={(txt) => setSobreNome(txt.target.value)}
                />
            </div>

            <div className='m-3'>
                <label for="idade" className='form-label'>Informe idade</label>
                <input
                    className='form-control'
                    id="idade"
                    type='number'
                    value={idade}
                    onChange={(txt) => setIdade(txt.target.value)}
                />
            </div>

            <div className='m-3'>
                <button
                    className='btn btn-primary'
                    onClick={handleEvent}
                >
                    Clique aqui
                </button>
            </div>

            <hr />
            {
             //renderização condicional
              situacao !== '' ? <div>
                 <label>Nome: {nome}</label> <br />
                 <label>Sobrenome: {sobreNome}</label> <br />
                 <label>Idade: {idade}</label> <br />
                 <label>Situação: {situacao}</label>
              </div> : null
            }
            
        </div>
    )
}