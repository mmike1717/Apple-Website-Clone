
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { useModal } from "../../context/Modal";
import { thunkDeleteUser } from '../../store/session';
import './deleteprofile.css'


export default function DeleteProfile({userId}){
    const dispatch = useDispatch()
    const { closeModal } = useModal()
    const history = useHistory


    const handleClick = () => {
        dispatch(thunkDeleteUser(userId))
        .then(closeModal)
        history.push('/')
    }

    return (
        <div className='DivHoldingDeleteInfo'>
            <div className='DeleteAccountTitle'>Delete Your Account?</div>
            <div>As a reminder, when your account is deleted:</div>
            <div className='ExtraText'> <div>•</div> You will not be able to access your iTunes Store, Apple Books, and App Store purchases</div>
            <div className='ExtraText'> <div>•</div> You will not be able to sign in or use Pear Services</div>
            <div className='ExtraText'> <div>•</div> Your photos, files, and documents stored in iCloud will be removed from Pear's servers</div>
            <div className='ExtraText'> <div>•</div> You will not recieve messages sent to your account via iMessage, FaceTime, or iCloud Mail</div>
            <div className='DivCancelDeleteForProfileDelete'>
                <button className='button1' onClick={closeModal} >Cancel</button>
                <button className='button2' onClick={handleClick}>Delete Account</button>
            </div>
        </div>
    )
}
