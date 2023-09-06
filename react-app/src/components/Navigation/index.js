import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { thunkGetAllCategory } from '../../store/category';
import { thunkGetOrdersForCart } from '../../store/orders';
import OpenModalButton from '../OpenModalButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import { logout } from '../../store/session';
import SearchBarInfo from '../searchBar/searchBar';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);
	const category = useSelector(state => state.category.allCategory);
	const itemsInCart = Object.values(useSelector(state => state.orders.cart));
	const dispatch = useDispatch()
	const history = useHistory()
	const [open1, setOpen1] = useState(false)
	const [open2, setOpen2] = useState(false)
	const [open3, setOpen3] = useState(false)
	const [open4, setOpen4] = useState(false)
	const [open5, setOpen5] = useState(false)
	const [open6, setOpen6] = useState(false)
	const [open7, setOpen7] = useState(false)
	const [open8, setOpen8] = useState(false)
	const [open9, setOpen9] = useState(false)

	let totalQuant = 0;
	let cartPreview;
	let cartPreview2;


	useEffect(() => {
		dispatch(thunkGetAllCategory())
	}, [dispatch])

	const handleClick = () => {
		if (!open8) setOpen8(true)
		else {setOpen8(false)}
	}

	const handleSearchClick = () => {
		if (!open9) setOpen9(true)
		else {setOpen9(false)}
	}

	const handleLogout = () => {
		// e.preventDefault();
		setOpen8(false)
		history.push('/')
		dispatch(logout())
		// .then(() => history.push('/'));
	  }

	if(sessionUser && itemsInCart){
		cartPreview = itemsInCart[itemsInCart.length - 1]
		cartPreview2 = itemsInCart[itemsInCart.length - 2]
	}


	const extraLinks = (itemName) => {
		return (
			<>
				<div className='SecondColumnInDropDown'>
					<div className='TitleOfColumn'>Shop {itemName}</div>
					<a onClick={()=> window.alert('Page coming soon')}>Shop {itemName}</a>
					<a onClick={()=> window.alert('Page coming soon')}>{itemName} Accessories</a>
					<a onClick={()=> window.alert('Page coming soon')}>Apple Trade In</a>
					<a onClick={()=> window.alert('Page coming soon')}>Financing</a>
					<a onClick={()=> window.alert('Page coming soon')}>College Student Offer</a>
				</div>
				<div className='SecondColumnInDropDown'>
					<div className='TitleOfColumn'>More {itemName}</div>
					<a onClick={()=> window.alert('Page coming soon')}>{itemName} Support</a>
					<a onClick={()=> window.alert('Page coming soon')}>{itemName} Preview</a>
					<a onClick={()=> window.alert('Page coming soon')}>AppleCare+ for {itemName}</a>
					<a onClick={()=> window.alert('Page coming soon')}>Logic for {itemName}</a>
					<a onClick={()=> window.alert('Page coming soon')}>Education</a>
					<a onClick={()=> window.alert('Page coming soon')}>iCloud+</a>

				</div>
			</>
		)
	}


	// if(!Object.values(sessionUser).length) return null
	if (!Object.values(category).length) return null

	return (
		<div className='NavBarContainer'>
			<div className='ContainerInsideNavBar'>
				<div>
				{/* https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png */}
					<NavLink className='CategoryNavLink' exact to="/"> <img className='NavBarAppleLogo' src='https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png' /> </NavLink>
				</div>
				<div>
					<NavLink onClick={() => window.alert('Page Coming Soon')} className='CategoryNavLink' onMouseOver={() => setOpen1(true)} onMouseLeave={() => setOpen1(false)} exact to="/">Store
						{/* <div onMouseLeave={()=> setOpen(false)}></div>
					<ul className={open ? "block" : "hidden"}>

					</ul> */}
					</NavLink>
				</div>
				<div>
					<div className='NavBarATag1' onMouseOver={() => setOpen2(true)} onMouseLeave={() => setOpen2(false)} >
						<NavLink className='CategoryNavLink' exact to='/'>Mac</NavLink>
						<div className={open2 ? "block" : "hidden"}>
							{/* {console.log(category['1'], '-------')} */}
							<div className='firstColumnInDropDown'>
								<div className='TitleOfColumn'>Explore Mac</div>
								{category['1']?.items_in_cat.map((each) => {
									return (
										<NavLink onClick={() => setOpen2(false)} className='EachLink' exact to={`/buy/${each.id}`}>{each.name} {each.model}</NavLink>
									)
								})}

							</div>
							{extraLinks(category['1']?.category_name)}
						</div>
					</div>
				</div>
				<div>
					<div className='NavBarATag1' onMouseOver={() => setOpen3(true)} onMouseLeave={() => setOpen3(false)}>
						<NavLink className='CategoryNavLink' exact to='/'>iPad</NavLink>
						<div className={open3 ? "block" : "hidden"}>
							{/* {console.log(category['1'], '-------')} */}
							<div className='firstColumnInDropDown'>
								<div className='TitleOfColumn'>Explore iPad</div>
								{category['2']?.items_in_cat.map((each) => {
									return (
										<NavLink onClick={() => setOpen3(false)} className='EachLink' exact to={`/buy/${each.id}`}>{each.name} {each.model}</NavLink>
									)
								})}
							</div>
							{extraLinks(category['2']?.category_name)}
						</div>
					</div>
				</div>
				<div>
					<div className='NavBarATag1' onMouseOver={() => setOpen4(true)} onMouseLeave={() => setOpen4(false)}>
						<NavLink className='CategoryNavLink' exact to='/'>iPhone</NavLink>
						<div className={open4 ? "block" : "hidden"}>
							<div className='firstColumnInDropDown'>
								<div className='TitleOfColumn'>Explore iPhone</div>
								{category['3']?.items_in_cat.map((each) => {
									return (
										<NavLink onClick={() => setOpen4(false)} className='EachLink' exact to={`/buy/${each.id}`}>{each.name} {each.model !== 'reg' ? each.model : null}</NavLink>
									)
								})}
							</div>
							{extraLinks(category['3']?.category_name)}
						</div>
					</div>
				</div>
				<div>
					<div className='NavBarATag1' onMouseOver={() => setOpen5(true)} onMouseLeave={() => setOpen5(false)}>
						<NavLink className='CategoryNavLink' exact to='/'>Watch</NavLink>
						<div className={open5 ? "block" : "hidden"}>
							<div className='firstColumnInDropDown'>
								<div className='TitleOfColumn'>Explore Watch</div>
								{/* {console.log(category['1'], '-------')} */}
								{category['4']?.items_in_cat.map((each) => {
									return (
										<NavLink onClick={() => {setOpen5(false); window.alert('Page Comming Soon')}} className='EachLink' to={'/'}>{each.name} {each.model}</NavLink>
									)
								})}
							</div>
							{extraLinks(category['4']?.category_name)}
						</div>
					</div>
				</div>
				<div>
					<NavLink className='CategoryNavLink' exact to="/">Vision</NavLink>
				</div>
				<div>
					<div className='NavBarATag1' onMouseOver={() => setOpen6(true)} onMouseLeave={() => setOpen6(false)}>
						<NavLink className='CategoryNavLink' exact to='/'>AirPods</NavLink>
						<div className={open6 ? "block" : "hidden"}>
							<div className='firstColumnInDropDown'>
								<div className='TitleOfColumn'>Explore AirPods</div>
								{/* {console.log(category['1'], '-------')} */}
								{category['6']?.items_in_cat.map((each) => {
									return (
										<NavLink onClick={() => setOpen6(false)} className='EachLink' exact to={`/buy/${each.id}`}>{each.name}</NavLink>
									)
								})}
							</div>
							{extraLinks(category['6']?.category_name)}
						</div>
					</div>
				</div>
				<div>
					<div className='NavBarATag' onMouseOver={() => setOpen7(true)} onMouseLeave={() => setOpen7(false)}>
						<NavLink className='CategoryNavLink' exact to='/'>TV & Home</NavLink>
						<div className={open7 ? "block" : "hidden"}>
							<div className='firstColumnInDropDown'>
								{/* {console.log(category['1'], '-------')} */}
								<div className='TitleOfColumn'>Explore TV & Home</div>
								{category['7']?.items_in_cat.map((each) => {
									return (
										<NavLink onClick={() => setOpen7(false)} className='EachLink' exact to={`/buy/${each.id}`}>{each.name}</NavLink>
									)
								})}
							</div>
							{extraLinks(category['7']?.category_name)}
						</div>
					</div>
				</div>
				<div>
					<NavLink onClick={() => window.alert('Page Coming Soon')} className='CategoryNavLink' exact to="/">Entertainment</NavLink>
				</div>
				<div>
					<NavLink onClick={() => window.alert('Page Coming Soon')} className='CategoryNavLink' exact to="/">Accessories</NavLink>
				</div>
				<div>
					<NavLink onClick={() => window.alert('Page Coming Soon')} className='CategoryNavLink' exact to="/">Support</NavLink>
				</div>

				<button onClick={() => {
					if(open9) setOpen9(false)
					else{setOpen9(true)}
					}} className='MagnifyingGlassIcon'><i className="fa fa-magnifying-glass"/></button>

				<div className={open9 ? "searchblock" : "hidden"} onMouseLeave = {()=> setOpen9(false)}>
					<SearchBarInfo setOpen9={setOpen9} />
				</div>

				{isLoaded && (
					<>
						<div onClick={() => handleClick() } className='CartContainer'>
							{/* <ProfileButton user={sessionUser} /> */}
							<i className="fa fa-bag-shopping" />
							{sessionUser && itemsInCart && itemsInCart.length > 0 && <div className='NumberOfItemsInCart'>
								{itemsInCart.forEach(item => {
									totalQuant += item.quantity
								})}
								{totalQuant}
							</div>
							}
						</div>
						<div onMouseLeave={() => setOpen8(false)} className={open8 ? "Cartblock" : "hidden"}>
							{sessionUser ? (
								<>
									<div className='UserBagTitle'>
										{sessionUser.first_name}'s Bag
										<button className='ReviewBagButtonInDropDown' onClick={() =>{ history.push('/bag'); setOpen8(false)}}>Review Bag</button>
									</div>
									{cartPreview ?
									(<div className='MainClassForPreviewItem'>
										<img className='PreviewImage' src={cartPreview?.products?.image}/>
										<div>{cartPreview?.products?.name} {cartPreview?.products?.model !== 'reg' ? cartPreview?.products?.model : null} {cartPreview?.products?.color}</div>
									</div>) : null}

									{cartPreview2 ? (<div className='MainClassForPreviewItem'>
										<img className='PreviewImage' src={cartPreview2?.products?.image}/>
										<div>{cartPreview2?.products?.name} {cartPreview2?.products?.model !== 'reg' ? cartPreview2?.products?.model : null} {cartPreview2?.products?.color}</div>
									</div>) : null}
									<div className='DropdownProfileText'>My Profile</div>
									<div className='DropdownTextUnderProfile'> <i class="fa-solid fa-box"/> Orders</div>
									<div onClick={() => {history.push('/saved-list'); setOpen8(false)}} className='DropdownTextUnderProfile'> <i class="fa-regular fa-bookmark"/>Your Saves</div>
									<div onClick={() => {history.push('/account'); setOpen8(false)}} className='DropdownTextUnderProfile'> <i class="fa-solid fa-gear"/> Account</div>
									<button className='LogOutButtonInDropDown' onClick={() => {handleLogout()}}><i class="fa-regular fa-user"/> Log Out {sessionUser.first_name}</button>
								</>
							) : (
								<>
									<div className='UserBagTitle'>Your Bag is Empty</div>
									<div>Sign in to add to Your Bag</div>
									<div className='DropdownProfileText' >Profile</div>
									<div className='DropdownTextUnderProfile'> <i class="fa-solid fa-box"/> Orders</div>
									<div className='DropdownTextUnderProfile'> <i class="fa-regular fa-bookmark"/>Your Saves</div>
									<div className='DropdownTextUnderProfile'> <i class="fa-solid fa-gear"/> Account</div>
									<div onClick={ () => setOpen8(false)}>
										<i class="fa-regular fa-user"/>
										<OpenModalButton
											buttonText="Log In"
											modalComponent={<LoginFormModal />}
										/>
									</div>
									<div onClick={ () => setOpen8(false)}>
										<i class="fa-solid fa-user"/>
										<OpenModalButton
											buttonText="Sign Up"
											modalComponent={<SignupFormModal />}
										/>

									</div>
								</>
								)}
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default Navigation;
