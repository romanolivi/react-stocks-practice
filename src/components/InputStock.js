import React from 'react';
import { useEffect, useState} from 'react';
import axios from 'axios';


const InputStock = () => {
    const [stock, setStock] = useState('');

    const fetchStock = (e) => {
        e.preventDefault();
        let API_KEY = 'c2tseiaad3icl6gefg00'
        let url = `https://finnhub.io/api/v1/stock/profile2?symbol=${stock}&token=${API_KEY}`
        
        axios.get(url)
        .then( resp => {
            setStock(resp.data);
            console.log("stock is " + stock);
            console.log(resp.data);
        })
        .catch( resp => 
            console.log('errors')
        );
    };

    const handleChange = (e) => {
        e.preventDefault();
        setStock(e.target.value);
    };


    const stockCard = () => {
        if (stock.name) {
            return (
                <div className="header">
                    <header>
                        <h4 className="card-header">{stock.ticker}</h4>
                    </header>
                    <footer className="card-body">
                        <img src={stock.logo} alt={stock.name} />
                        <p className="card-name">Name: {stock.name}</p>
                        <p className="card-industry">Industry: {stock.finnhubIndustry}</p>
                        <p className="card-shares">Shares Outstanding: {stock.shareOutstanding}</p>
                        <a href={stock.weburl}>Click to see website</a>
                    </footer>
                </div>
                
            )
        } else {
            return ( 
                <h3 className="card-header">Enter a Company</h3>
            )
        }
    }

   
    return (
        <section className="content">
            <header>
                <h2>Search Stock</h2>
                <div className="underline"></div>
            </header>
            <div className="input-stock">
                <form onSubmit={fetchStock}>
                    <label>Enter a stock to see it's information: </label>
                    <input id="stock-input" type="text" onChange={handleChange} />
                    <button className="btn" type="submit">Submit</button>
                </form>

                <div className="card" style={{width: '20rem', margin: 'auto'}}>
                    {stockCard()}
                </div>
            </div>
        </section>
    )
    
}

export default InputStock;