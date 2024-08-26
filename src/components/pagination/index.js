import { useEffect, useState} from 'react';
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'

const Pagination1=({page , pagechange, thispage})=> {
    
   let number=[]
    for(let i=1; i<=page.page_count ;i++){
        number.push(i)
    }
   
    return (
        <Pagination>
         {number.map(item=>(
            <PageItem  onClick={()=>pagechange(item)} className={`${thispage===item?'active':''}`}>{item}</PageItem>
         ))}
        </Pagination>
      );

}

export default Pagination1;