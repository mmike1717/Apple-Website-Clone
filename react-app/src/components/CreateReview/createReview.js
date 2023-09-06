import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useModal } from "../../context/Modal";
import { thunkGetSingleItem } from '../../store/products';
import { thunkCreateAReview } from '../../store/reviews';
import './createReview.css'



export default function CreateReview({itemId}) {
    const [content, setContent] = useState('')
    const [rating, setRating] = useState(0)
    const [errors, setErrors] = useState({})
    const [fillStars, setFillStars] = useState(rating);
    const { closeModal } = useModal()

    const dispatch = useDispatch()

    const sessionUser = useSelector((state) => state.session.user);
    const item = useSelector((state) => state.products.singleItem);



    const onSubmit = (e) => {
        e.preventDefault()

        const reviewData = {
            content,
            rating,
            user_id: sessionUser.id,
            store_item_id: itemId
        }


        if (content.length < 10) {
            setErrors({content1: 'Must have at least 10 characters'})
        }
        if(content.length > 500){
            setErrors({content2: 'Must be less than 500 characters'})
        }
        if(rating === 0){
            setErrors({rating: 'Must pick star rating'})
        }

        else if(!Object.values(errors).length){
            dispatch(thunkCreateAReview(reviewData))
                .then(() => dispatch(thunkGetSingleItem(itemId)))
                .then(closeModal)
        }
    }

    // const disabled = content.length < 10 || content.length > 500 || rating === 0 ? true : false



    return (
        <div className='CreateReviewMainContainer'>

            <form className='CreateReviewFormContainer' onSubmit={onSubmit}>
                <div id='RatingTitle'> How did you like your {item?.name}?</div>
                <div className='CreateReviewError'>{errors.content2 && <div>{errors.content2}</div>}</div>
                <div className='CreateReviewError'>{errors.content1 && <div>{errors.content1}</div>}</div>
                <textarea
                    className='CreateReviewTextContainer'
                    placeholder='Leave your review here...'
                    type='text'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    />

                <div className='CreateReviewStarsError'>{errors.rating && <div>{errors.rating}</div>}</div>
                <div className='StarsContainer'>
                    <div onClick={() => { setRating(1) }} onMouseEnter={() => { setFillStars(1) }} onMouseLeave={() => setFillStars(rating)} className={fillStars >= 1 ? "filled" : "empty"} >
                        <i Name="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <div onClick={() => { setRating(2) }} onMouseEnter={() => { setFillStars(2) }} onMouseLeave={() => setFillStars(rating)} className={fillStars >= 2 ? "filled" : "empty"} >
                        <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <div onClick={() => { setRating(3) }} onMouseEnter={() => { setFillStars(3) }} onMouseLeave={() => setFillStars(rating)} className={fillStars >= 3 ? "filled" : "empty"} >
                        <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <div onClick={() => { setRating(4) }} onMouseEnter={() => { setFillStars(4) }} onMouseLeave={() => setFillStars(rating)} className={fillStars >= 4 ? "filled" : "empty"} >
                        <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <div onClick={() => { setRating(5) }} onMouseEnter={() => { setFillStars(5) }} onMouseLeave={() => setFillStars(rating)} className={fillStars >= 5 ? "filled" : "empty"} >
                        <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <div>Stars</div>
                </div>
                <div className='SubmitCreatedReviewContainer'>
                    <button className={'SubmitReviewButton'}>Submit Your Review</button>

                </div>
            </form>
        </div>
    )
}
