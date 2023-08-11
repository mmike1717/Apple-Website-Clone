
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect,Link, useHistory } from "react-router-dom";
import { thunkGetAllReview } from "../../store/reviews";
import DeleteReviewModal from "../DeleteReview/deleteModalReview";
import DeleteReview from "../DeleteReview/deleteReview";
import CreateReviewModal from '../CreateReview/ModalCreateReview'
import CreateReview from "../CreateReview/createReview";
import EditReview from "../EditReview/editReview";
import EditReviewModal from '../EditReview/ModalEditReview'


export default function Reviews ({itemId}) {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);
    const reviews = Object.values(useSelector(state => state.reviews.allReviews))


    useEffect(()=> {
        dispatch(thunkGetAllReview(itemId))
    }, [dispatch])

    return (
        <>
            <div>
                {sessionUser && !reviews.find((review) => review.user_id === sessionUser?.id) ? <CreateReviewModal buttonText={'Create A Review'} modalComponent={<CreateReview itemId={itemId} />} /> : false}
            </div>

            <div>{reviews.map((review) => {
                return (
                    <div>
                        <div>{review.user_info?.first_name}</div>
                        <div>{review?.created_at}</div>
                        <div>{review?.rating}</div>
                        <div>{review?.content}</div>

                        {review.user_id === sessionUser.id ? <EditReviewModal buttonText={'Edit'} modalComponent={<EditReview reviewId={review.id} contents={review.content} ratings={review.rating} itemId={itemId} />}/> : null}

                        {review.user_id === sessionUser.id ? <DeleteReviewModal buttonText={'Remove'} modalComponent={<DeleteReview reviewId={review.id} />}/> : null}
                    </div>
                )
            })}</div>
        </>
    )

}
