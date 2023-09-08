import React from 'react'
import styled from 'styled-components'

interface iButton{
  text: string;
  bcc:string;
  color: string;
}

const Globalbutto:React.FC<iButton> = ({
text,color,bcc
}) => {
  return (
    <Button bcc={bcc} color={color}>
      {text}
    </Button>
  )
}

export default Globalbutto

const Button = styled.button<{bcc:string;color:string}>`
background-color:${({bcc})=>bcc};
width:90px;
height:40px;
padding:5px 5px 5px 5px;
color:${({ color }) => color};
border-radius: 7px;
border: 1px solid lightgray;
margin-right: 20px;

@media screen and (max-width: 768px) {
        display: none;
    }
`