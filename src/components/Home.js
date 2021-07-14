import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data from '../data';

function Home() {

    const [cards, setCards] = useState((data));
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const lastIndex = cards.length - 1;
        if(index < 0) {
            setIndex(lastIndex);
        } else if(index > lastIndex) {
            setIndex(0);
        }
    }, [index, cards])

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 5000);
        return () => clearInterval(slider)
    }, [index])

    return (
        <section className="content">
            <h2>Welcome to Romano's Stocks!</h2>
            <div className="underline"></div>
            <div className="section-center">
                {cards.map((card, i) => {
                    const { id, image, topic, desc } = card;
                    let position = "next";
                    if(i === index) {
                        position = 'active';
                    }

                    if(i === index - 1 || (index === 0 && i === data.length)) {
                        position = "last";
                    }
                    return (
                        <div className="container">
                            <article className={position} key={id}>
                                <img src={image} alt={topic} className="img-fluid" />
                                <h4>{topic}</h4>
                                <p className="card-description">{desc}</p>
                            </article>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Home;