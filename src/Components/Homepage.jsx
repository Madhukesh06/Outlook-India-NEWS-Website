
import React, { useEffect, useState } from "react";


export default function Homepage(props) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    let show = async () => {
        let x = props.category ? props.category : "general";
        setLoading(true)
        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${x}&apiKey=26d8322d13a94fada45e0f7adb35a6fb`);
        let res_data = await res.json();
        console.log(res_data.articles);
        setData(res_data.articles)
    };
    useEffect(() => {
        show();
    }, []);

    return (
        <div>
            <h1>Hello home page</h1>
            {loading &&
                data.map((el) => (
                    <img key={el.publishedAt} src={el.urlToImage}></img>
                ))
            }

        </div >
    );

    import React from 'react'

    export default function Homepage() {
        return (
            <div>
                <h1>Hello home page</h1>
            </div>
        )

    }
