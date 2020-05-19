import React from 'react'
import styled from '@emotion/styled'

const Icon = () => {

    const Icon = styled.img`
     width: 30%;
     height: 20%;
    `

    return (
        <Icon src="./logo.png" alt="weather icon"></Icon>
    )
}

export default Icon
