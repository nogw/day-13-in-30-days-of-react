import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Container, Image, Button, Items } from './styles';

function Requests() {
  const [cat, setCat] = useState('')
  const [dog, setDog] = useState('')

  const reqCat = async () => {
    const response = await fetch('https://aws.random.cat/meow')
    const resp = response.json()
    .then(data => setCat(data.file))
  } 
  
  const reqDog = async () => {
    await axios.get('https://random.dog/woof.json')
    .then(res => setDog(res.data.url))
  } 

  useEffect(() => {
    reqDog()
    reqCat()      
  }, [])

  return (
    <Container>
      <Items>
        <h1>fetch</h1>
        <Image src={cat} alt="fetch"/>
        <Button onClick={() => reqCat()}>
            New Cat
        </Button>
      </Items>
      <Items>
        <h1>axios</h1>
        <Image src={dog} alt="fetch"/>
        <Button onClick={() => reqDog()}>
            New Dog
        </Button>
      </Items>
    </Container>
  );
}

export default Requests;