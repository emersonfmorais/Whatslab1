import React from 'react'
import styled from 'styled-components'

const ContainerInputs = styled.div`
 box-sizing: border-box;
 display: flex;
 justify-content: space-between;
 width: 100%;
 margin-bottom: 4px;



`

const InputUsuario = styled.input`
  width: 20%;
  margin-left: 4px;
  border: 1px solid black;
  margin-right:1px
 
`

const InputMensagem = styled.input`
  width: 65%;
  border: 1px solid black;
  
`
const Button = styled.button`
  width: 15%;
  padding: 0 5px;
  margin-right: 4px;
  margin-left: 2px;
  color: white;
  background-color: blue;
  border: none;
  border-radius: 3px;
  cursor: pointer;
 

`
const ContainerPai = styled.div`
  width: 100%;
`
const ContainerMensagem = styled.div`
  margin-left: 15px;
  


`







export class InputComponents extends React.Component {
  state = {
    Mensagem: [
    

    ],

    InputUsuario: "",
    InputMensagem: "",
  }


  chat = () => this.state.Mensagem.map((m,indice) =>{
    return <div>
      <p><strong>{m.nome}</strong>: {m.message}</p>
    </div>

  })
  
  

   onChangeUsuario = (event) =>{
     this.setState ( {InputUsuario: event.target.value} )

   }

   onChangeMensagem = (event) =>{
    this.setState ( {InputMensagem: event.target.value} )
    

  }

  

  onClickEnviar = () =>{
    const novoArray = [...this.state.Mensagem]
    novoArray.push({
      nome: this.state.InputUsuario,
      message: this.state.InputMensagem
    })

    this.setState({Mensagem: novoArray})

    this.setState({InputUsuario: "", InputMensagem: ""})

  

    
  }

  

    render() {

        return(
          <ContainerPai>
            <ContainerMensagem>
            {this.chat()}
            </ContainerMensagem>  
          <ContainerInputs>
               <InputUsuario value= {this.state.InputUsuario} onChange={this.onChangeUsuario} placeholder= "Usuário" ></InputUsuario>
               <InputMensagem value= {this.state.InputMensagem} onChange={this.onChangeMensagem} placeholder="Mensagem"></InputMensagem>
               <Button type="submit" onClick={this.onClickEnviar}>Enviar</Button>
          </ContainerInputs>
          </ContainerPai>
        )

    }
}


