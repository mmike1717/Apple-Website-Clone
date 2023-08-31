
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import { useHistory } from 'react-router-dom'
import { thunkGetOrdersForCart } from '../../store/orders'
import HomePageCarousel from '../HomePageCarousel/carousel';
import './homePage.css'



export default function Home(){
    const dispatch = useDispatch()
	const sessionUser = useSelector(state => state.session.user);


    useEffect(() => {
        if(sessionUser){
            dispatch(thunkGetOrdersForCart(sessionUser.id))

        }

    }, [dispatch])

    return (
        <>
            <div className='GifLogo'><img src='https://cdn.dribbble.com/users/5342679/screenshots/11825480/media/763edad7f5502aab0fd5bc7fcb65568b.gif'/></div>
            <div>
                <div className='HomePageMacBookContainer'>
                    <h1>MacBook Air 15"</h1>
                    <div className='LearnAndBuyATag'>
                        <a onClick={() => window.alert('Page Comming Soon')} className='deadLinks'>{'Learn more >'}</a>
                        <a href='/buy/11'>{'Buy >'}</a>

                    </div>
                    <img className='HomePageMacBookPic' src='https://assets-prd.ignimgs.com/2023/06/05/wwdc23-macbookair-blogroll-1685985335119.jpg'/>
                    <div className='TextForHomePageMacBookPic'>Impressively big. Impossibly thin.</div>

                </div>
                {/* <img src='https://i.ytimg.com/vi/0okuAwqTHs0/maxresdefault.jpg'/> */}
            </div>

            <div className='HomePageIphoneContainer'>
                <h2>iPhone 14</h2>
                <div className='AmazingTextForPic'>Amazing.</div>
                <div className='IphonePictureAtags'>
                    <a onClick={() => window.alert('Page Comming Soon')} className='deadLinks'>{'Learn more >'}</a>
                    <a href='/buy/4'>{'Buy >'}</a>
                </div>
                <img  src='https://media.wired.com/photos/6318ec748990652479ff3765/master/w_1920,c_limit/Apple-iPhone-14-Pro-Colors-Gear.jpg'/>
            </div>


            <div className='GridContainer'>
                <div className='GridImg'>
                    <div className='GridIphonePicText'>iPhone 14 Pro</div>
                    <div className='GridLearnMoreATag'>
                        <a onClick={() => window.alert('Page Comming Soon')} className='deadLinks'>{'Learn more >'}</a>
                        <a href='/buy/6'>{'Buy >'}</a>
                    </div>
                    <img src='https://media.shellypalmer.com/wp-content/images/2020/10/iphone12pro.jpg'/>
                </div>

                <div className='GridImg'>
                    <div className='LearnMoreATagPic2'>
                        <a onClick={() => window.alert('Page Comming Soon')} className='deadLinks'>{'Learn more >'}</a>
                        <a href='/buy/9'>{'Buy >'}</a>
                    </div>
                    <img src='https://rukminim2.flixcart.com/image/800/600/cms-rpd-img/647cefff31384d6eac2616ab7d176cc3_183efc7b91f_image.jpeg'/>
                </div >

                <div className='GridImg'>
                    <div className='LearnMoreATagPic3'>
                        <a onClick={() => window.alert('Page Comming Soon')} className='deadLinks'>{'Learn more >'}</a>
                        <a href='/'>{'Buy >'}</a>
                    </div>
                    <img src='https://i.ytimg.com/vi/UfawgQJICU8/maxresdefault.jpg' />
                </div>

                <div className='GridImg'>
                    <div className='LearnMoreATagPic4'>
                        <a onClick={() => window.alert('Page Comming Soon')} className='deadLinks'>{'Learn more >'}</a>
                    </div>
                    <img src='https://i.ytimg.com/vi/TX9qSaGXFyg/maxresdefault.jpg' />
                </div>


                <div className='GridImg'>
                    <div className='TitleForGridPic5'> <img src='https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png' /> Trade In</div>
                    <div className='TestForGridPic5'>Upgrade and Save. It's that Easy.</div>
                    <a className='AtagForPic5 deadLinks' onClick={() => window.alert('Page Comming Soon')} >{'See what your device is worth >'}</a>
                    <img src='https://images.macrumors.com/t/QF--wPMo9DoxNMzxamzL8rKka-A=/1600x0/article-new/2021/03/iPhone-trade-in-16x9.jpg' />
                </div>

                <div className='GridImg'>
                    <div className='TitleForGridPic6'> <img src='https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png' /> Card</div>
                    <div className='TextForGridPic6'>Get up to 3% Daily Cash back with every purchase.</div>
                    <div className='LearnMoreATagPic6'>
                        <a onClick={() => window.alert('Page Comming Soon')} className='deadLinks'>{'Learn more >'}</a>
                        <a onClick={() => window.alert('Page Comming Soon')} className='deadLinks'>{'Apply now >'}</a>
                    </div>
                    <img src='https://i.blogs.es/d2c016/apple-card/840_560.jpeg' />
                </div>


            </div>

            <HomePageCarousel />


        </>
    )
}
