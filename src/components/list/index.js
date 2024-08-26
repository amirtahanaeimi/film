import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Pagination1 from '../pagination';


const List = (thispage)=> {
    const [film,setFilm]=useState([])
    const [meta,setmeta]=useState([])
    const [pagecount,setpagecount]=useState([])



    useEffect(()=>{
        fetch(`https://moviesapi.ir/api/v1/movies?page=${meta}`)
        .then(res=>res.json())
        .then(data=>{
            setFilm(data.data)
            setpagecount(data.metadata)
        })
    },[meta])
    console.log("sss: ",film)
    const handlechange=(pagenumber)=>{
        setmeta(pagenumber)
    }


    if(!film.length)return(
        <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>)
  return (
    <Container>
    <Row>
    
        {film.map(item =>(
            <Col  className ='mb-4' xs={12} md={6} lg={4} key={item.id}>
                <Link className='text-decoration-none'to={`/m/${item.id}`}>
                        <Card>
                <Card.Img variant="top" src={item.poster} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                </Card.Body>
                </Card>
                </Link>
            </Col>        
        ))}
    
    </Row>
    <Pagination1 page={pagecount} pagechange={handlechange}thispage={meta}></Pagination1>
    </Container>
  );
}

export default List;