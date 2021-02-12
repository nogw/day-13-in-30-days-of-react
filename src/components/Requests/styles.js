import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Items = styled.div`
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.1);
  border-radius: 10px; 
  background-color: #fff;
  width: 240px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin: 10px;

  h1 {
    margin: 10px;
  }
`;

export const Image = styled.img`
  width: 180px;
  margin: 5px;
  border-radius: 5px;
  height: 180px;
  object-fit: cover;
`;

export const Button = styled.button`
  background-color: #3F57D3;
  padding: 15px ;
  width: 180px;
  margin: 5px;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-weight:bold;
  font-size: 15px;
  transition: transform 200ms ease;

  &:hover {
    transform: scale(1.05)
  }

  &:active {
    transform: scale(0.9)
  }
`;
