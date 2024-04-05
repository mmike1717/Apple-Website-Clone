
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Redirect, Link, useHistory } from "react-router-dom";
import { thunkGetAllReview } from "../../store/reviews";
import DeleteReviewModal from "../DeleteReview/deleteModalReview";
import DeleteReview from "../DeleteReview/deleteReview";
import CreateReviewModal from '../CreateReview/ModalCreateReview'
import CreateReview from "../CreateReview/createReview";
import EditReview from "../EditReview/editReview";
import EditReviewModal from '../EditReview/ModalEditReview'
import './reviews.css'


export default function Reviews({ itemId }) {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);
    const reviews = Object.values(useSelector(state => state.reviews.allReviews))
    // const [starRating, setStarRating] = useState(0)


    useEffect(() => {
        dispatch(thunkGetAllReview(itemId))
    }, [dispatch, itemId])

    let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    return (
        <>
            <div>
                {sessionUser && !reviews.find((review) => review.user_id === sessionUser?.id) ? <CreateReviewModal buttonText={'Create A Review'} modalComponent={<CreateReview itemId={itemId} />} /> : false}
            </div>

            <div>{reviews && reviews?.map((review) => {
                let date = new Date(review?.created_at)
                let numMonth = date.getMonth()
                // setStarRating(review?.rating)
                return (
                    <div className="EachReviewContainer">
                        <div className="ContainerReviewUserImg">
                            <i className="fa-solid fa-user-check" />
                        </div>
                        <div className="MainContainerForEachReview">
                            <div>{review?.user_info?.first_name}</div>
                            <div>{month[numMonth]} {date.getDate()}, {date.getFullYear()}</div>
                            <div className="EachReviewStarRatingContainer">
                                {/* <div>{review?.rating}</div> */}
                                <div className={review?.rating >= 1 ? "filled1" : "empty"} >
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                </div>
                                <div className={review?.rating >= 2 ? "filled1" : "empty"} >
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                </div>
                                <div className={review?.rating >= 3 ? "filled1" : "empty"} >
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                </div>
                                <div className={review?.rating >= 4 ? "filled1" : "empty"} >
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                </div>
                                <div className={review?.rating >= 5 ? "filled1" : "empty"} >
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                </div>
                            </div>
                            <div className="ReviewContentContainer">{review?.content}</div>
                        </div>
                        <div className="EditDeleteButtonsContainer">
                            {review?.user_id === sessionUser?.id ? <EditReviewModal buttonText={'Edit'} modalComponent={<EditReview reviewId={review.id} contents={review.content} ratings={review.rating} itemId={itemId} />} /> : null}

                            {review?.user_id === sessionUser?.id ? <DeleteReviewModal buttonText={'Remove'} modalComponent={<DeleteReview reviewId={review.id} />} /> : null}
                        </div>

                    </div>
                )
            })}</div>
        </>
    )

}
