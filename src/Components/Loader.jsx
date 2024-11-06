import React from 'react';
import styled from 'styled-components';
import globo from '../assets/globo.png'; // Asegúrate de cambiar esta ruta a la imagen que quieras usar

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .loader {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    animation: rotate 2.0s infinite linear;
    background-image: url(${globo});
    background-size: 80%; // Ajuste para que la imagen ocupe el 80% del contenedor circular
    background-repeat: no-repeat; // Evita que la imagen se repita
    background-position: center;
  }

  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }
`;

export default Loader;
