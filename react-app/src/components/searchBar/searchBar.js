import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { thunkGetAllStoreItems } from '../../store/category';



export default function SearchBarInfo() {
    const dispatch = useDispatch()
    const allItems = Object.values(useSelector(state => state.category.storeItems))
    const [filteredData, setFilteredData] = useState([]);
    const [wordInput, setWordInput] = useState('');
    const history = useHistory()
    const urlRef = useRef()

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
            {/* <div className="search">
                <div className="searchInputs">
                    <input
                        type="text"
                        id='ssssssssss'
                        className="textbox"
                        placeholder="Search by Title"
                        value={wordInput}
                        onChange={handleFilter}

                    />
                    {!wordInput ? <i className="fa-solid fa-magnifying-glass" ></i> : <i onClick={() => {
                        setFilteredData([])
                        setWordInput('')
                    }} className="fa-solid fa-x"></i>}
                </div>
                {filteredData.length !== 0 &&
                    <div className="dataResult">
                        {filteredData.slice(0, 15).map((value, key) => {
                            return (<div key={value.id}>
                                <div className="dataItem" onClick={async () => {
                                    history.push(`/books/${ value.id }`)
                                    dispatch(thunkGetSingleBook(value.id))
                                }}>{value.name}</div>
                            </div>
                            )
                        })}
                    </div>}
            </div> */}
            <div>
                <input
                    type="text"
                    id='search'
                    // className="textbox"
                    placeholder="Search"
                    value={wordInput}
                    onChange={handleFilter}
                />

            </div>
        </>
    )

}
