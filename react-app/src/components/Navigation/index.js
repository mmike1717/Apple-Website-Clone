import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { thunkGetAllCategory } from '../../store/category';
import { thunkGetOrdersForCart } from '../../store/orders';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);
	const category = useSelector(state => state.category.allCategory);
	const itemsInCart = Object.values(useSelector(state => state.orders.cart));
	const dispatch = useDispatch()
	const [open1, setOpen1] = useState(false)
	const [open2, setOpen2] = useState(false)
	const [open3, setOpen3] = useState(false)
	const [open4, setOpen4] = useState(false)
	const [open5, setOpen5] = useState(false)
	const [open6, setOpen6] = useState(false)
	const [open7, setOpen7] = useState(false)
	const [open8, setOpen8] = useState(false)



	useEffect(() => {
		dispatch(thunkGetAllCategory())
	}, [dispatch])

	// if(!Object.values(sessionUser).length) return null
	if (!Object.values(category).length) return null

	return (
		<div className='NavBarContainer'>
			<div className='ContainerInsideNavBar'>
				<div>
					<NavLink className='CategoryNavLink' exact to="/home"> <img className='NavBarAppleLogo' src='https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png' /> </NavLink>
				</div>
				<div>
					<NavLink className='CategoryNavLink' onMouseOver={() => setOpen1(true)} onMouseLeave={() => setOpen1(false)} exact to="/">Store
						{/* <div onMouseLeave={()=> setOpen(false)}></div>
					<ul className={open ? "block" : "hidden"}>

					</ul> */}
					</NavLink>
				</div>
				<div>
					<div className='NavBarATag1' onMouseOver={() => setOpen2(true)} onMouseLeave={() => setOpen2(false)}>
						<NavLink className='CategoryNavLink' exact to='/'>Mac</NavLink>
						<div className={open2 ? "block" : "hidden"}>
							{/* {console.log(category['1'], '-------')} */}
							{category['1']?.items_in_cat.map((each) => {
								return (
									<NavLink exact to={`/buy/${each.id}`}>{each.name}</NavLink>
								)
							})}
						</div>
					</div>
				</div>
				<div>
					<div className='NavBarATag1' onMouseOver={() => setOpen3(true)} onMouseLeave={() => setOpen3(false)}>
						<NavLink className='CategoryNavLink' exact to='/'>iPad</NavLink>
						<div className={open3 ? "block" : "hidden"}>
							{/* {console.log(category['1'], '-------')} */}
							{category['2']?.items_in_cat.map((each) => {
								return (
									<NavLink exact to={`/buy/${each.id}`}>{each.name} {each.model}</NavLink>
								)
							})}
						</div>
					</div>
				</div>
				<div>
					<div className='NavBarATag1' onMouseOver={() => setOpen4(true)} onMouseLeave={() => setOpen4(false)}>
						<NavLink className='CategoryNavLink' exact to='/'>iPhone</NavLink>
						<div className={open4 ? "block" : "hidden"}>
							{/* {console.log(category['1'], '-------')} */}
							{category['3']?.items_in_cat.map((each) => {
								return (
									<NavLink exact to={`/buy/${each.id}`}>{each.name} {each.model !== 'reg' ? each.model : null}</NavLink>
								)
							})}
						</div>
					</div>
				</div>
				<div>
					<div className='NavBarATag1' onMouseOver={() => setOpen5(true)} onMouseLeave={() => setOpen5(false)}>
						<NavLink className='CategoryNavLink' exact to='/'>Watch</NavLink>
						<div className={open5 ? "block" : "hidden"}>
							{/* {console.log(category['1'], '-------')} */}
							{category['4']?.items_in_cat.map((each) => {
								return (
									<NavLink exact to={`/buy/${each.id}`}>{each.name}</NavLink>
								)
							})}
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
							{/* {console.log(category['1'], '-------')} */}
							{category['6']?.items_in_cat.map((each) => {
								return (
									<NavLink exact to={`/buy/${each.id}`}>{each.name}</NavLink>
								)
							})}
						</div>
					</div>
				</div>
				<div>
					<div className='NavBarATag' onMouseOver={() => setOpen7(true)} onMouseLeave={() => setOpen7(false)}>
						<NavLink className='CategoryNavLink' exact to='/'>TV & Home</NavLink>
						<div className={open7 ? "block" : "hidden"}>
							{/* {console.log(category['1'], '-------')} */}
							{category['7']?.items_in_cat.map((each) => {
								return (
									<NavLink exact to={`/buy/${each.id}`}>{each.name}</NavLink>
								)
							})}
						</div>
					</div>
				</div>
				<div>
					<NavLink className='CategoryNavLink' exact to="/">Entertainment</NavLink>
				</div>
				<div>
					<NavLink className='CategoryNavLink' exact to="/">Accessories</NavLink>
				</div>
				<div>
					<NavLink className='CategoryNavLink' exact to="/">Support</NavLink>
				</div>

				<button className='MagnifyingGlassIcon'><i className="fa fa-magnifying-glass"/></button>

				{isLoaded && (
					<div className='CartContainer'>
						<ProfileButton user={sessionUser} />
						{sessionUser && itemsInCart && itemsInCart.length > 0 && <div className='NumberOfItemsInCart'>{itemsInCart.length}</div>}
					</div>
				)}
			</div>
		</div>
	);
}

export default Navigation;
