import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
import Spinner from 'react-bootstrap/Spinner';
import ControlledCarousel from "../carousel";


const Filmdeatails= () =>{
    const {id}=useParams()
    const [detail,setdetail]=useState()
    useEffect(()=>{
        fetch(`https://moviesapi.ir/api/v1/movies/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setdetail(data)
        })
    },[])
    if(!detail)return(
        <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    )
    return(
        <Container  style={{display:"flex", flexDirection:"column"}}>
          <Stack direction="horizontal">
        <div>
            <Image  src={detail.poster} thumbnail />
            </div>
          
        <ControlledCarousel  source={detail.images}></ControlledCarousel>
        </Stack>
        <h1>{detail.title}</h1>
      </Container>
    )
}

export default Filmdeatails;