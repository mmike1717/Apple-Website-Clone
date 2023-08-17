import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useModal } from "../../context/Modal";
import { thunkGetSingleItem } from '../../store/products';
import { thunkDeleteAReview } from '../../store/reviews';
import './deleteReview.css'


export default function DeleteReview({ reviewId }) {
    const dispatch = useDispatch()
    const {itemId} = useParams()
    const { closeModal } = useModal()

    const onSubmit = () => {
        dispatch(thunkDeleteAReview(reviewId))
            .then(() => dispatch(thunkGetSingleItem(itemId)))
            .then(closeModal)
    }

    return (
        <div className='DeleteReviewContainer'>
            <div className='Delete-Review-Title'>Confirm Delete</div>
            <div className='SureDeleteReview'>Are you sure you want to delete this review?</div>
            <button className='Confirm-Delete-Review' onClick={onSubmit} >Yes (Delete Review)</button>
            <button className='Cancel-Delete-Review' onClick={closeModal}>No (Keep Review)</button>
        </div>
    )
}
