
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { thunkCreateProfileInfo, thunkEditProfile, thunkGetUserProfile } from "../../store/profile";



export default function UserProfile(){
    const user =  useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(()=> {
        const func = async () => {
            await dispatch(thunkGetUserProfile(user.id))
            .then((res) => {
                if(res.error !== 'no profile'){
                    setAddress(res.address)
                    setApt(res.apt)
                    setZipcode(res.zip_code)
                    setCity(res.city)
                    setState(res.state)
                    setCountry(res.country)
                    setProfileExits(true)

                }
            })

        }
        func()
    },[dispatch])


    const profile = useSelector(state => state.profile.profile)

    const [profileExits, setProfileExits] = useState(false)
    const [address, setAddress] = useState('')
    const [apt, setApt] = useState( '' )
    const [zipcode, setZipcode] = useState( '' )
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState( '')
    const [editButton, setEditButton] = useState(false)






    const handleSubmit = async() => {
        console.log(address, zipcode, country, 'thissssssssss')
        const data = {
            image:'',
            address,
            apt,
            zip_code: zipcode,
            city,
            state,
            country,
            user_id: user.id
        }

        if(profileExits){
            dispatch(thunkEditProfile(profile['1'].id, data))
            setEditButton(false)
        }
        if(!profileExits){
            await dispatch(thunkCreateProfileInfo(data))
            .then(history.push('/account'))
            setEditButton(false)

        }


    }


    const handleEditButton = () => {
        if (!editButton) setEditButton(true)
        else{
            setEditButton(false)
        }
    }

    return (
        <div>
             <div style={{height: '150px'}}>Profile</div>

            <button onClick={handleEditButton}>Edit</button>
            <div>
                {editButton ?
                    <div>
                        <input
                            placeholder="Street Address"
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />

                        <input
                            placeholder="Apt, Suite, Building (Optional)"
                            type="text"
                            value={apt}
                            onChange={(e) => setApt(e.target.value)}
                        />

                        <input
                            placeholder="Zip Code"
                            type="number"
                            value={zipcode}
                            onChange={(e) => setZipcode(e.target.value)}
                            required
                        />

                        <input
                            placeholder="City"
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />

                        <input
                            placeholder="State"
                            type="text"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            required
                        />

                        <input
                            placeholder="Country"
                            type="text"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                        />

                        <button onClick={()=>handleSubmit()} type="submit">Save</button>
                    </div>
                    :
                    <div>
                        <div>First Name: {user.first_name}</div>
                        <div>Last Name: {user.last_name}</div>
                        <div>Email: {user.email}</div>
                        <div>Address: {address || 'Address Required'}</div>
                        <div>Apt: {apt || 'Apt, Suite, Building (Optional)' }</div>
                        <div>Zipcode: {zipcode || 'Zipcode Required'}</div>
                        <div>City: {city || 'City Required'}</div>
                        <div>State: {state || 'State Required'}</div>
                        <div>Country: {country || 'Country Required'}</div>
                    </div>
                }
            </div>


        </div>
    )
}
