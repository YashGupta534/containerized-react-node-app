import React, { useState } from 'react';
import blog from '../apis/blog';

const Test = () => {
    const [mssg, setmssg] = useState();
    const fetchData = async () => {

        try {
            const response = await blog.get('/test');
                setmssg(response.data.count);
                console.log(response.data.count);
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
            <button className="btn" onClick={getmssg} style={{margin: 10}}>Clicker </button>
            <div className="d-flex justify-content-center p-2 bg-dark text-white" style={{margin: 10}}>
                <br></br>
                <span>{mssg}</span>
            </div>
        </div>
    )
};

export default Test;