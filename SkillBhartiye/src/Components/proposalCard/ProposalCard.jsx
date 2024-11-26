import React from 'react'
import "./ProposalCard.scss"

const ProposalCard = ({proposal}) => {
  return (
    <div className='proposalCard'>
        <div className="proposal">
          <p>{proposal.description}</p>
        </div>
        <div className="price">
          <h2>in &#x20b9; {proposal.price}</h2>
        </div>
        <div className="user">
            <div className="userImg">
              <img src={proposal.image} alt="" />
            </div>
            <div className="userName">
              <p>@{proposal.name}</p>
              <p className='date'>{proposal.date}</p>
            </div>
        </div>
    </div>
  )
}

export default ProposalCard