import React, { useState } from 'react'
import blog from '../apis/blog'

const Home = () => {
    const [mssg, setmssg] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);

        try {
            const response = await blog.get('/home');
            if (response.data) {
                setmssg(response.data);
                console.log(response.data);
                setLoading(false);
            }
        } catch (error) {
            console.error('Error fetching category count data:', error);
        }

    };

    const getmssg = async (e) => {
        fetchData();
    }

    return (

        <div>
            <a href="/home" style={{margin: 10}}>Home</a> <a href="/test" style={{margin: 10}}>Counter</a>
            <br></br>
            <button className="btn" onClick={getmssg} style={{margin: 10}}>Get Message</button>
            <div className="d-flex justify-content-center p-2 bg-dark text-white" style={{margin: 10}}>
                <br></br>
                {loading ? <p>Loading...</p> :
                    <span>{mssg}</span>}
            </div>
        </div>
    )
};

export default Home;