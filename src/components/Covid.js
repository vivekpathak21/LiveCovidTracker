import React, { useEffect, useState } from 'react'
import './Covid.css';
import { AiFillAlert} from "react-icons/ai";
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Oleo+Script+Swash+Caps&family=PT+Serif:ital,wght@0,400;1,400;1,700&display=swap');
</style>


const Covid = () =>
{   
    const [data,setData] = useState([]);

    const getCovidData = async()=>{

        try {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise[0]);
        setData(actualData.statewise[0]);
        }
        catch (err){
            console.log(err);
        }
    }
    useEffect(()=>{

            getCovidData();

    },[]);
    return (
      <>
      <section>
        <h1> <AiFillAlert/> Live  </h1>
        <h2><AiFillAlert/> COVID-19 CORONAVIRUS TRACKER </h2>
      <ul>
        <li className = "card">

          <div className='card_main1 card_main'>
          <div className='card_inner'>
                <p className='card_name'> <span> OUR </span> COUNTRY</p>
                <p className='card_total card_small'>INDIA</p>

          </div>

        </div>
        </li>
        <li className = "card">

        <div className='card_main2 card_main'>
        <div className='card_inner'>
        <p className='card_name'> <span> TOTAL</span> RECOVERED</p>
        <p className='card_total card_small'>{data.recovered}</p>

        </div>

        </div>
        </li>
        <li className = "card">

        <div className='card_main3 card_main'>
        <div className='card_inner'>
        <p className='card_name'> <span> TOTAL </span> CONFIRMED</p>
        <p className='card_total card_small'>{data.confirmed}</p>

        </div>

        </div>
        </li>
        <li className = "card">

          <div className='card_main4 card_main'>
          <div className='card_inner'>
                <p className='card_name'> <span> TOTAL </span> DEATH</p>
                <p className='card_total card_small'>{data.deaths}</p>

          </div>

          </div>
        </li> 
        <li className = "card">

          <div className='card_main5 card_main'>
          <div className='card_inner'>
                <p className='card_name'> <span> TOTAL</span> ACTIVE</p>
                <p className='card_total card_small'>{data.active}</p>

          </div>

          </div>
        </li>
        <li className = "card">

      <div className='card_main6 card_main'>
      <div className='card_inner'>
      <p className='card_name'> <span> LAST </span> UPDATED</p>
      <p className='card_total card_small'>{data.lastupdatedtime}</p>

      </div>

    </div>
    </li>
      </ul>
      </section>
      </>
    )
}


export default Covid;