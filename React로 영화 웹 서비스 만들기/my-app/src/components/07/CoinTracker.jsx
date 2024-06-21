import React, {useState, useEffect} from 'react'

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  // 비어있는 배열 => length를 사용할 때에 undefined면 길이 반환 X
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false); // 이렇게해도 순서대로 적용이 된다. 항상 이러할까...??

  })

  },[])


  return(
    <div>
      <h3>The Coins! ({coins.length})</h3>
      {loading ? <h5>loading...</h5>:null}
      <select>
        {coins.map((coin) =>
          <option>
            {coin.name} ({coin.symbol}) : {coin.quotes.USD.price}
          </option>)}
      </select>
    </div>
  )
}

export default CoinTracker