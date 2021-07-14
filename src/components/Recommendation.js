import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Recommendation = () => {

    const [stock, setStock] = useState('');

    const fetchStock = (e) => {
        e.preventDefault();
        let API_KEY = 'c2tseiaad3icl6gefg00'
        const url = `https://finnhub.io/api/v1/quote?symbol=${stock}&token=${API_KEY}`

        axios.get(url)
        .then( resp => {
            setStock(resp.data)
            console.log(resp.data);
        })
        .catch(resp => console.log(resp));
    }

    const handleChange = (e) => {
        e.preventDefault();
        setStock(e.target.value);
    }

    const stockTrend = () => {
        console.log(stock)
        if(stock.c) {
            return (
                <div className="stock-trends">
                    <header>
                        <h2>Current Price: {stock.c}</h2>
                        <h2>Opening Price: {stock.o}</h2>
                        <h2>High: {stock.h}</h2>
                        <h2>Low: {stock.l}</h2>
                    </header>

                </div>
            )
        } else {
            return (
                <div className="stock-trends">
                    <header>
                        <h2>Enter Stock</h2>
                    </header>

                </div>
            )
        }
    }



    return (
        <section className="content">
            <h1 className="trends-headline">Trends Page</h1>
            <div className="underline"></div>
            <p>Enter a ticker below to see a company's stock quote information!</p>

            <form onSubmit={(e) => fetchStock(e)}>
                <label>Enter Stock Ticker: </label>
                <input type="text" onChange={handleChange} placeholder="Enter Ticker"></input>
                <button type="submit" className="btn btn-primary">Quote</button>
            </form>

            <div>
                {stockTrend()}
            </div>
        </section>
    )
}


export default Recommendation;