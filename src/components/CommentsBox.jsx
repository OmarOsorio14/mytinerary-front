import React, {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import itineraryActions from '../redux/actions/itineraryActions'
import { PencilIcon, TrashIcon } from '@heroicons/react/solid'
import Moment from 'react-moment';


export default function CommentsBox({id, comments}) {
	const dispatch = useDispatch()
	const user = useSelector(store => store.userReducer.user)
	const [commentEdit, setCommentEdit] = useState("");

	const handleSendComment =(event)=>{
		event.preventDefault()
		if(user){
			dispatch(itineraryActions.AddComment({
				idItinerary: id,
				message: event.target["message"].value.trim()
			}))
			event.target["message"].value = ""
		}else{
			dispatch(itineraryActions.AddComment("not logged"))
		}
	}
	const handleUpdateComment =(event)=>{
		event.preventDefault()
		if(user){
			dispatch(itineraryActions.UpdateComment({
				idComment: commentEdit,
				message: event.target["update"].value.trim()
			}))
			setCommentEdit("")
		}else{
			dispatch(itineraryActions.AddComment("not logged"))
		}
	}
	return (
		<div>
			<div className="p-1 bg-gray-200 rounded-lg max-h-[70vh] overflow-y-scroll">
			{comments.map(comment =>{
				if(user===null ||comment.userId._id !==user.id ){

					return(<div key={comment._id} className="flex items-end mb-6">
									<div className="flex p-2 flex-col space-y-2 text-base mx-2 order-2 items-start text-left bg-white rounded-lg rounded-bl-none">
										<p className=' text-teal-600 font-bold'>{comment.userId.username}</p>
										<p className=" inline-block ">{comment.comment}</p>
										<Moment fromNow className='text-gray-800 font-bold text-xs'>{comment.date}</Moment>
									</div>
									<img src={comment.userId.photo} alt="My profile" className="w-10 h-10 rounded-full order-1" />
	 							</div>)
				}else{
					return(<div key={comment._id} className="flex place-content-end mb-6">
									<div className="flex flex-col space-y-2 text-base mx-2">
										{comment._id !== commentEdit 
										?<>
											<div className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-teal-300 text-left">
												<p>{comment.comment}</p>
												<Moment fromNow className='text-gray-800 font-bold text-xs'>{comment.date}</Moment>
											</div>
											<div className='flex'>
											<button onClick={() => dispatch(itineraryActions.DeleteComment(comment._id))}>
												<TrashIcon className='w-6 h-6 hover:text-teal-700 hover:cursor-pointer' />
											</button>
											<button onClick={() => setCommentEdit(comment._id)}>
												<PencilIcon className='w-6 h-6 hover:text-teal-700 hover:cursor-pointer' />
											</button>
										</div>
										</>
										:<form className='flex flex-col' onSubmit={handleUpdateComment}>
											<textarea className='p-2 bg-teal-300 md:w-96 md:h-40 w-56 h-40' name="update" autoFocus>{comment.comment}</textarea>
											<div className='flex justify-around'>
											<button className='bg-gray-800 m-auto p-2 mt-2 text-white rounded-lg hover:bg-gray-600' type='submit'>Update</button>
											<button className='bg-gray-800 m-auto p-2 mt-2 text-white rounded-lg hover:bg-gray-600' onClick={() => setCommentEdit("")}>Cancel</button>
											</div>
										</form> }
									</div>
		 						</div>)
				}
			} 
			)}
			

			<form className='flex w-full' onSubmit={handleSendComment}>
    		<label htmlFor="message" className="sr-only">Your message</label>
 				<textarea id="message" name="message" rows="1" className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
				placeholder={user === null ? "You must be logged in first" : "Your message..."} disabled={user === null}></textarea>
        <button type="submit" className="inline-flex justify-center p-2 text-blue-600 cursor-pointer hover:bg-blue-100">
            <svg className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
        </button>
			</form>
    </div>
</div>
	)
}
