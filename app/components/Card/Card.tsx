"use client";
import React, { useEffect, useState } from "react";
import { ICandidateData } from "../../context/voter";
import Style from "./Card.module.css";

interface ICardProps {
  candidateArray: ICandidateData[];
  giveVote: (id: any) => void;
}

const Card: React.FC<ICardProps> = ({ candidateArray, giveVote }) => {
  return (
    <div className={Style.card}>
      {candidateArray.map((el, i) => (
        <div className={Style.card_box}>
          <div className={Style.image}>
            <img src={el.imageUrl} alt="profile photo" />
          </div>
          <div className={Style.card_info}>
            <h2>{el.name}</h2>
            <p> Age: {el.age}</p>
            <p> Address: {el.ethereumAddress.slice(0, 10)}..</p>
            <p className={Style.total}> Total Vote</p>
          </div>
          <div className={Style.card_vote}>
            <p>{el.voteCount.toString()}</p>
          </div>
          <div className={Style.card_button}>
            <button
              onClick={() =>
                giveVote({
                  id: el.candidateId,
                  address: el.ethereumAddress,
                })
              }
            >
              Give Vote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
