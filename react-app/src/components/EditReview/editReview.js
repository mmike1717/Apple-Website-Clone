import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useHistory } from "react-router-dom"
import { useModal } from "../../context/Modal";
import { thunkGetSingleItem } from '../../store/products'
import { thunkEditAReview, thunkGetAllReview } from '../../store/reviews'
import './editReview.css'


export default function EditReview ({reviewId, contents, ratings, itemId}) {
    const [content, setContent] = useState(contents)
    const [rating, setRating] = useState(ratings)
    // const [errors, setErrors] = useState({})
    const [fillStars, setFillStars] = useState(rating);
    const { closeModal } = useModal()

    const dispatch = useDispatch()
    // const { itemId } = useParams()

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


        // if (reviewData.errors) {
        //     setErrors(reviewData.errors)
        // }

        dispatch(thunkEditAReview(reviewId, reviewData))
            .then(() => dispatch(thunkGetAllReview(itemId)))
            .then(closeModal)
    }

    const disabled = content.length < 10 || rating === 0 || content.length > 500 ? true : false




    return (
        <div className='MainContainerForReview'>
            {/* handleSubmit}> */}

            <form className='EditReviewFormContainer' onSubmit={onSubmit}>
                <div className='TitleForEditReview' id='RatingTitle'> How did you like your {item?.name}?</div>
                {/* <div>{errors.message && <div>Review already exists for this spot</div>}</div> */}
                <div>{content.length < 10 ? <div className='EditReviewTextError'>Review needs to have 10 more more characters</div> : null}</div>
                <div>{content.length > 500 ? <div className='EditReviewTextError'>Review needs to have 10 more more characters</div> : null}</div>
                <textarea
                    className='EditReviewTextContainer'
                    placeholder='Leave your review here...'
                    type='text'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

                {/* {errors.firstName && <h5>{errors.firstName}</h5>}
                disabled={!!errors.firstName} */}
                {/* <label>Stars: </label>
                <input
                        value={stars}
                        onChange={(e) => setStars(e.target.value)}
                        type="number"
                        /> */}
                <div className='StarsContainer'>
                    <div onClick={() => { setRating(1) }} onMouseEnter={() => { setFillStars(1) }} onMouseLeave={() => setFillStars(rating)} className={fillStars >= 1 ? "filled" : "empty"} >
                        <i class="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <div onClick={() => { setRating(2) }} onMouseEnter={() => { setFillStars(2) }} onMouseLeave={() => setFillStars(rating)} className={fillStars >= 2 ? "filled" : "empty"} >
                        <i class="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <div onClick={() => { setRating(3) }} onMouseEnter={() => { setFillStars(3) }} onMouseLeave={() => setFillStars(rating)} className={fillStars >= 3 ? "filled" : "empty"} >
                        <i class="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <div onClick={() => { setRating(4) }} onMouseEnter={() => { setFillStars(4) }} onMouseLeave={() => setFillStars(rating)} className={fillStars >= 4 ? "filled" : "empty"} >
                        <i class="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <div onClick={() => { setRating(5) }} onMouseEnter={() => { setFillStars(5) }} onMouseLeave={() => setFillStars(rating)} className={fillStars >= 5 ? "filled" : "empty"} >
                        <i class="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <div>Stars</div>
                </div>
                <button disabled={disabled} className={disabled? 'DisabledColorButton' : 'SubmitReviewButton'}>Edit Your Review</button>
            </form>
        </div>
    )
}
