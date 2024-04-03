import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { thunkGetAllStoreItems } from '../../store/category';



export default function SearchBarInfo({setOpen9}) {
    const dispatch = useDispatch()
    const allItems = Object.values(useSelector(state => state.category.storeItems))
    const [filteredData, setFilteredData] = useState([]);
    const [wordInput, setWordInput] = useState('');
    const history = useHistory()
    // const urlRef = useRef()

    useEffect(() => {
        dispatch(thunkGetAllStoreItems())
    }, [dispatch])



    const handleFilter = (event) => {
        const searchWord = event.target.value
        setWordInput(searchWord)
        const filteredItems = allItems.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase())
        })
        if (searchWord == "") {
            setFilteredData([])
        } else {
            setFilteredData(filteredItems)
        }
    }

    useEffect(() => {
        const clearInput = (e) => {
            if (!e.target.matches('.textbox')) {

                setFilteredData([])
                setWordInput('')
            }
        }
        window.addEventListener('click', clearInput)

        return () => window.removeEventListener('click', clearInput)
    }, [])



    return (
        <>
            <div className='ContainerHoldingSearchInput'>
                <i className="fa-solid fa-magnifying-glass" ></i>
                <input
                    type="text"
                    id='search'
                    // className="textbox"
                    placeholder="Search Apple products"
                    value={wordInput}
                    onChange={handleFilter}
                />
                {/* {!wordInput ? <i className="fa-solid fa-magnifying-glass" ></i> : <i onClick={() => {
                        setFilteredData([])
                        setWordInput('')
                    }} className="fa-solid fa-x"></i>} */}
                {wordInput && <i onClick={() => {
                        setFilteredData([])
                        setWordInput('')
                    }} className="fa-solid fa-circle-xmark"></i>}


            </div>
            {filteredData.length !== 0 &&
                <div className="dataResult">
                    <div className='TitleForSearchProducts'>iProducts</div>
                    {filteredData.slice(0, 7).map((value, key) => {
                        return (<div key={value.id}>
                            <div className='eachSearchOption' onClick={async () => {
                                history.push(`/buy/${ value.id }`)
                                setOpen9(false)
                            }}> <i className="fa-solid fa-arrow-right"></i> {value.name} {value.model}</div>
                        </div>
                        )
                    })}
                </div>}
        </>
    )

}
