
import Heartx from './Heartx.gif';
import './Heartbeat.css';
import React, { useState } from 'react';

const Heartbeat = (props) => {
    const [fitbitData, setFitbitData] = useState({})
    // let fitbitData = ''
    let accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhRSlQiLCJzdWIiOiI3NlhMSEMiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd3BybyB3bnV0IHdzbGUgd3NvYyB3YWN0IHdveHkgd3RlbSB3d2VpIHdzZXQgd2xvYyB3cmVzIiwiZXhwIjoxNjYyMDU4Nzc2LCJpYXQiOjE2NTk0NjY4MDN9.Zi_OixHlGnxxms8-Y602HeNNqweGd_hHqR_DNNU4brQ&'
    const getFitbitData = () => {
        fetch('https://api.fitbit.com/1/user/-/activities/heart/date/2022-08-02/1d/1min.json', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        })
            .then(response => response.json())
            .then((data) => { setFitbitData(data['activities-heart-intraday'].dataset.at(-1)); console.log(fitbitData); })
    }

    const checker=()=>{
        if(fitbitData['value']>60 && fitbitData['value']<65)
            window.location="/musichome/playlist/happy"
        else if(fitbitData['value']>100)
            window.location="/musichome/playlist/sad"
        else
            window.location="/musichome"
    }

    return (
        <main className="flex justify-center min-h-screen bg-gradient-to-t from-blue-200 to-indigo-900 p-5">
            <div>
                <img src={Heartx} alt="" />
                <a href="https://mythrillfiction.com/" target="_blank text-indigo-900">Your Heartbeat is :</a>
                <div></div>
                <div className="card my-5" onMouseEnter={getFitbitData}>
                    {fitbitData['time']} , {fitbitData['value']}
                </div>
                <div className="card" onClick={checker}>
                    Suggested Music
                </div>


            </div>
        </main>

    )
}
export default Heartbeat