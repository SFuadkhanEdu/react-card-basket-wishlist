import React from 'react'
import "./index.css"

function CardSection({className,children}) {
    
  return (
    <section className={className+" card_section"}>
        {children}
    </section>
  )
}

export default CardSection