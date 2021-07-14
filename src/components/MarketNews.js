import React from 'react';
import { useEffect, useState} from 'react';
import axios from 'axios';

const MarektNews = (props) => {
    const [news, setNews] = useState([]);

    const fetchStock = () => {
        axios.get(`https://finnhub.io/api/v1/news?category=general&token=c2tseiaad3icl6gefg00`)
        .then((resp) => {
            setNews(resp.data.slice(0,5));
            console.log(news[0].headline);
        })
        .catch( resp => {
            console.log('Errors')
        })
    };
    
    useEffect(() => {

        fetchStock();
    }, [props.id]);

    const newsCard = () => {
        console.log('hey');
        return (
        news.map( n => {
            <article className="news-section" key={n.id}>
                <section>
                    <h4>{n.headline}</h4>
                    <div className="underline"></div>
                    <p>{n.summary}</p>
                </section>
            </article>
        }))
    }

    return (
        <div className="news">
            <h1>Market News</h1>
            <div className="underline"></div>

            <div className="news-articles">
                <button onClick={() => fetchStock()} className="btn btn-primary">Refresh</button>
            </div>

            <section>
                {newsCard()}
            </section>
        </div>
        
    )
}

export default MarektNews;