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
                        <h3>{stock.ticker}</h3>
                        <img src={stock.logo} alt={stock.name} />
                    </header>
                    <footer>
                        <p>Name: {stock.name}</p>
                        <p>Industry: {stock.finnhubIndustry}</p>
                        <p>Shares Outstanding: {stock.shareOutstanding}</p>
                        <a href={stock.weburl}>Click to see website</a>
                    </footer>
                </div>
                
            )
        } else {
            return ( 
                <h3>Enter a Company</h3>
            )
        }
    }

   
    return (
        <article>
            <form onSubmit={fetchStock}>
                <label>Enter a stock to see it's information: </label>
                <input type="text" onChange={handleChange} />
                <button className="btn" type="submit">Submit</button>
            </form>

            <div>
                {stockCard()}
            </div>
        </article>
    )
    
    
}

export default InputStock;