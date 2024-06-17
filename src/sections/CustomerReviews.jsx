import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constant"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our
        <span className="text-coral-red "> Cursotmers </span>  
        Say
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit est qui quia, possimus aliquid nostrum.</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap:14 flex-wrap">
        {reviews.map((review)=>(
          <ReviewCard key={review.customerName} imgURL={review.imgURL} customerName={review.customerName} rating={review.rating} feedback={review.feedback}/>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews