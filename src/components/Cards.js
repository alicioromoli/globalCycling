import React, {useState, useEffect}from 'react'
import './Cards.css'

function Cards() {
    const [data, setData] = useState([])

    const fetchData = async () => {
        const response = await fetch('data.json')
        const dataInfo = await response.json();
        const dataMap = dataInfo.map(item => {
            const timestamp = Date.parse(item.publishDate)
            const date = new Date(timestamp)
            
            const newDate = `${date.toLocaleString('default', { day: '2-digit' })} ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`
            
            return {
                title: item.title,
                id: item._id,
                date: newDate
            }
        })
        setData(dataMap)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="main__wrapper__cards">
            { data &&
                data.map(item => {
                    return (
                        <div key={item.id} className="main__wrapper__card">
                            <div className="card__img">
                                <img src={`http://img.youtube.com/vi/${item.id}/mqdefault.jpg`} alt=""/>
                            </div>
                            <div className="card__title">
                                <p>{item.title}</p>
                            </div>
                            <div className="card__date">
                                <p>{item.date}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cards
