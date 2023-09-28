import React from 'react'
import styled from 'styled-components'

function Collectioncard({image,title,desc}) {
  return (
    <DIV>
      <div>
        <img src={image} alt={title} />
      </div>
        <h3>
            {title}
        </h3>
        <p>{desc}</p>
    </DIV>
  )
}

export default Collectioncard

const DIV = styled.div`
    div img{
        width: 100%;
    }
    h3{
        font-family: "Nunito Sans", sans-serif;
    }
    p{
        font-family: "Nunito Sans", sans-serif;
    }
`
