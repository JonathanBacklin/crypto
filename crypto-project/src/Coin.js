import React from 'react';
import './Coin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faStar} />


const Coin = ({id, name,image,symbol,price,priceChange,marketcap, toggleWatchlist }) => {
    return (
        <div key={id} className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto"/>
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">{price}kr</p>
                    {priceChange < 0 ? (
                        <p className="coin-percent red">{priceChange.toFixed(2)}%</p>)
                        :(<p className="coin-percent green">{priceChange.toFixed(2)}%</p>)
                    }
                    <p className="coin-marketcap">
                        {marketcap.toLocaleString()}kr
                    </p>
                    
                    <button type="submit"className="coin-watchlist-button" onClick={() => toggleWatchlist(id)}>{element}</button>
                    
                </div>
            </div>
        </div>
    )
}


export default Coin