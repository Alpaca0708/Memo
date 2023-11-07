import Edit from './components/Edit';
import List from './components/List';
import './index.css'
import { useState } from 'react';


const Home = () => {


    const [data, setData] = useState ([])

    return <div>
        <Edit add = {setData}/>
        <List listData = {data}/>
    </div>
}


export default Home