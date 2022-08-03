import React from 'react';
import Heartx from './Heartx.gif';
import './Heartbeat.css';

const Heartbeat = (props) => {
    return(
<main class="grid place-items-center min-h-screen bg-gradient-to-t from-blue-200 to-indigo-900 p-5">
<div>       
<img src={Heartx} alt=""/>
<a href="https://mythrillfiction.com/" target="_blank text-indigo-900">Your Heartbeat is :</a>
<div class="card">
  Magic Card
</div>


</div>
</main> 

    )
}
export default Heartbeat