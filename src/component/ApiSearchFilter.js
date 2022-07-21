import axios from 'axios'
import React, { useEffect, useState } from 'react'

const baseUrl = "https://jsonplaceholder.typicode.com/posts"

const ApiSearchFilter = () => {
    useEffect(() => {
        axios.get(baseUrl).then(res =>{ setAllData(res.data); setData(res.data)})
    }, [])
    const [allData, setAllData] = useState()
    const [inputval, setInputVal] = useState('')
    const [data, setData] = useState(allData)


    // const filter = (e) => {
    //     const keyword = e.target.value.toLowerCase()
    //     console.log("keyword", keyword);

    //     if (keyword !== 0) {
    //         const result = allData.filter((user) => {
    //             return user.title.toLowerCase().startsWith(keyword.toLowerCase());
    //         })
    //         setData(result)
    //     } else {
    //         setData(allData)
    //     }
    //     setInputVal(keyword)
    // }

    const filterNames = ({ title }) => {
        return title.toLowerCase().indexOf(inputval.toLowerCase()) !== -1;
      };

    return (
        <div>
            <input
            style={{width:"25%",height:"40px"}}
                type='search'
                value={inputval}
                onChange={e => setInputVal(e.target.value)}
                placeholder='Filter Data'
            />
            <div>
                {data && data.filter(filterNames).length > 0 ? (data.filter(filterNames).map((data) => {
                    return (
                        <div style={{ borderBottom: '1px solid black' }}>
                            <p>{data.id}</p>
                            <p>{data.title}</p>
                            <p>{data.body}</p>
                        </div>
                    )
                })) : (<h1>Not Found</h1>)
                }
            </div>
        </div>
    )
}

export default ApiSearchFilter;