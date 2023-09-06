
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { thunkCreateProfileInfo, thunkEditProfile, thunkGetUserProfile, thunkRemoveOnlyImage } from "../../store/profile";
import Footer from "../Footer";
import './profile.css'
import defaultImg from './default.jpeg'
import DeleteProfileModal from "../DeleteProfile/modalDeleteProfile";
import DeleteProfile from "../DeleteProfile/deleteProfile";



export default function UserProfile() {
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const history = useHistory()

    const profile = Object.values(useSelector(state => state.profile.profile))

    const [profileExits, setProfileExits] = useState(false)

    const [image, setImage] = useState(null)
    const [imageLoading, setImageLoading] = useState(false);

    const [imageExits, setImageExits] = useState(null)
    const [address, setAddress] = useState('')
    const [apt, setApt] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [editButton, setEditButton] = useState(false)
    const [highLight, setHighlight] = useState(false)



    useEffect(() => {
        const func = async () => {
            await dispatch(thunkGetUserProfile(user.id))
                .then((res) => {
                    if (res.error !== 'no profile') {
                        setImageExits(res.image)
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
    }, [dispatch])









    const handleSubmit = async (e) => {
        // console.log(address, zipcode, country, 'thissssssssss')
        e.preventDefault()
        const formData = new FormData();
        formData.append("image", image);
        formData.append("address", address);
        formData.append("apt", apt);
        formData.append("zip_code", zipcode);
        formData.append("city", city);
        formData.append("state", state);
        formData.append("country", country);
        formData.append("user_id", user.id);
        setImageLoading(true);
        // const data = {
        //     image: '',
        //     address,
        //     apt,
        //     zip_code: zipcode,
        //     city,
        //     state,
        //     country,
        //     user_id: user.id
        // }

        if (profileExits || imageExits) {
            await dispatch(thunkEditProfile(profile['0'].id, formData))
            .then(() => history.push('/account'))
            setEditButton(false)
            setImageLoading(false)
        }
        if (!profileExits && !imageExits) {
            await dispatch(thunkCreateProfileInfo(formData))
                .then(history.push('/account'))
            setEditButton(false)
            setImageLoading(false)
        }


    }


    const handleEditButton = () => {
        if (!editButton) setEditButton(true)
        else {
            setEditButton(false)
        }
    }


    const imgUrl = Object.values(useSelector(state => state.profile.profile))


    console.log(imgUrl)

    return (
        <>
            <div id="MainContainerForAccount">

                <div className="SideBarDiv">
                    <h5>My Account</h5>
                    <div className={`EachNameInSidebar clicked`}>Manage Profile</div>
                    <div className="EachNameInSidebar">Recent Orders</div>
                    <div className="EachNameInSidebar">Payment</div>
                    <div className="EachNameInSidebar">Data & Privacy</div>
                    <div className="EachNameInSidebar">Apple ID</div>
                    <DeleteProfileModal buttonText={'Delete Account'} modalComponent={<DeleteProfile userId={user.id} />} />
                </div>

                <div className="DivHoldingAllProfileInfo">
                    <div> <img className="ProfileImg" src={imgUrl['0']?.error || !imgUrl.length ? defaultImg : imgUrl['0']?.image} /> </div>

                    <div className="AccountNameDiv">{user.first_name} {user.last_name}</div>


                    {/* <div className="DivWithEditButton">
                        <button onClick={handleEditButton}>Edit</button>
                    </div> */}
                    <div className="ContainerHoldingUserInfo">

                            <form className="EditInfoForm" onSubmit={handleSubmit} encType="multipart/form-data">
                                <div className="EachUserDetail">
                                    <label className="DetailLabel edit" >Update Profile Image</label>
                                    <input
                                        // className="EachUserDetail"
                                        type="file"
                                        accept="image/*"

                                        onChange={(e) => setImage(e.target.files[0])}
                                    />
                                    {(imageLoading) && <p>Loading...</p>}

                                </div>

                                <div className="ContainerHolding2Details">
                                    <div className="UserNameDetials"> <div className="DetailLabel">First Name:</div> {user.first_name}</div>
                                    <div className="UserNameDetials"> <div className="DetailLabel">Last Name:</div> {user.last_name}</div>

                                </div>
                                <div className="EachUserDetail"> <div className="DetailLabel">Email:</div> {user.email}</div>
                                <div className="EachUserDetail withInput">
                                    <div className="DetailLabel">Address:</div>
                                    <input
                                        className="height"
                                        placeholder="Street Address"
                                        type="text"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="EachUserDetail withInput">
                                    <div className="DetailLabel">Apt:</div>
                                    <input
                                        className="height"
                                        placeholder="Apt, Suite, Building (Optional)"
                                        type="text"
                                        value={apt}
                                        onChange={(e) => setApt(e.target.value)}
                                    />

                                </div>

                                <div className="EachUserDetail withInput">
                                    <div className="DetailLabel">Zipcode:</div>
                                    <input
                                        className="height"
                                        placeholder="Zip Code"
                                        type="number"
                                        value={zipcode}
                                        onChange={(e) => setZipcode(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="ContainerHolding2Details">
                                    <div className="UserNameDetials withInput">
                                        <div className="DetailLabel">City:</div>
                                        <input
                                        className="height"
                                        placeholder="City"
                                        type="text"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        required
                                        />
                                    </div>
                                    <div className="UserNameDetials withInput">
                                        <div className="DetailLabel">State:</div>
                                        <input
                                        className="height"
                                        placeholder="State"
                                        type="text"
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                        required
                                        />
                                        </div>
                                </div>

                                <div className="EachUserDetail withInput">
                                    <div className="DetailLabel">Country:</div>
                                    <input
                                        className="height"
                                        placeholder="Country"
                                        type="text"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                        required
                                    />
                                </div>

                                <button className="SaveEditInfoButton" type="submit">Save</button>

                            </form>

                    </div>


                </div>
            </div>

            <Footer />

        </>
    )
}
