
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
                <a className='ml-[110px]' href="https://mythrillfiction.com/" target="_blank text-indigo-900">Your Heartbeat is :</a>
                <div className="my-5 card ml-20" onMouseEnter={getFitbitData}>
                    {fitbitData['time']} , {fitbitData['value']}
                </div>
                <div class="relative max-w-xs py-2 px-5 ml-20 font-medium text-white group" onClick={checker}>
<span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-indigo-500 grougroupp-hover:bg-indigo-700 group-hover:skew-x-12"></span>
<span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-indigo-700 group-hover:bg-indigo-500 -hover:-skew-x-12"></span>
<span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-indigo-600 -rotate-12"></span>
<span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-indigo-400 -rotate-12"></span>
 <span class="relative ml-20 max-w-xs">Suggested Music</span>
</div>

            </div>
            
        </main>

    )
}
export default Heartbeat