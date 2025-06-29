import React from 'react'
import './Companies.css';
import prologis from '../../../public/prologis.png'
import tower from '../../../public/tower.png'
import equinix from '../../../public/equinix.png'
import realty from '../../../public/realty.png'
const Companies = () => {
  return (
   <section className="c-wraper">
    <div className="paddings flexCenter innerWidth c-container">
        <img src={prologis} alt="" />
        <img src={tower} alt="" />
        <img src={equinix} alt="" />
        <img src={realty} alt="" />
    </div>
   </section>
  )
}

export default Companies