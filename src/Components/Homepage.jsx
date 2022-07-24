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
            {/* <h1>Hello home page</h1> */}
            <div class="row mx-auto">
                {
                    data.map((el) => (
                        // <img key={el.publishedAt} src={el.urlToImage}></img>

                        <div className="card my-3 mx-2" style={{ width: "20rem" }}>
                            <img key={1} src={el.urlToImage ? el.urlToImage : "https://www.cnet.com/a/img/resize/34dc40dfa975e8fcecb3c2b6e506546ced8fb738/2022/07/22/5528d272-67c8-4671-8a72-f5176116c742/star-system.jpg?auto=webp&fit=crop&height=630&width=1200"} className="card-img-top" alt="..." />
                            <div key={2} className="card-body">
                                <h5 key={3} className="card-title">{el.title}</h5>
                                <p key={4} className="card-text">{el.description}</p>
                                <a key={5} href="#" className="btn btn-dark">Read More</a>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div >
    );
}
