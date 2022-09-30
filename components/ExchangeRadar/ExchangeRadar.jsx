import { useState } from 'react';

export default function ExchangeRadar() {
    const [query, setQuery] = useState("")  
    const mockData = {
        "iradar": [
            {
                "id": 1,
                "n": "Binance",
                "ty": "CEX",
                "score": "128.22",
                "tier": "chad", 
                "t": "7/1/2022, 7:00:56 AM"
            },
            {
                "id": 2,
                "n": "Uniswap",
                "ty": "DEX",
                "score": "101.93",
                "tier": "chad", 
                "t": "7/1/2022, 7:00:56 AM"
            },
        ]
    }
      
    return (
        <>
            <h2 id="exchange">##  Exchange Radar <button style={{position: "relative", left: "10px", bottom: "4px"}}>beta</button></h2>
            <p>🔗 uid: exchange</p>
            <a href="https://buidl.defi.vn/explain-pyhash#heading-exchange-scanner">🔑 Explain</a>
            <div>🔎 <input style={{marginTop: "24px", marginBottom: "15px"}} placeholder=" Search exchange..." onChange={event => setQuery(event.target.value)}/></div>
            <table>
            <thead>
                <tr>         
                    <th>Name</th>
                    <th>Type</th>
                    <th>Swole score</th>
                    <th>Tier</th>
                    <th>Timestamp</th>
                </tr>
            </thead>
            <tbody>
                {
                    // eslint-disable-next-line
                    mockData.iradar.filter(function (signal) { 
                        if (query === '') {
                            return signal;
                        } else if (signal.n.toLowerCase().includes(query.toLowerCase())) {
                            return signal;
                        }}).map((signal) => (
                            <tr key={signal.id}>
                                <td>{signal.n}</td>
                                <td>{signal.ty}</td>
                                <td>{signal.score}</td>
                                <td>{signal.tier}</td>
                                <td>{signal.t}</td>
                            </tr>
                        )
                )}
            </tbody>
            </table>
        </>
    )
}