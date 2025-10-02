import React from 'react'
import CompanyCard from './CompanyCard'

const OurCustomer = () => {
    const customers = [
        {
            id:1,
            name:'astropay',
            image:"/image/astropay.png"
        },
        {
            id:2,
            name:'biztronsoft',
            image:"/image/biztronsoft_logo.png"
        },
        {
            id:3,
            name:'hackett',
            image:"/image/hackett.png"
        },
       
        {
            id:4,
            name:"ib-group",
            image:"/image/ib-group.png"
        },
        {
            id:5,
            name:"igen",
            image:"/image/igen.png"
        },
        {
            id:6,
            name:"infosys",
            image:"/image/Infosys_logo.png"
        },
    ]
  return (
    <div>
        {
            customers.map((item)=>{
                return (
                    <CompanyCard key={item.id} img={item.image} name={item.name}/>
                )
            })
        }
    </div>
  )
}

export default OurCustomer