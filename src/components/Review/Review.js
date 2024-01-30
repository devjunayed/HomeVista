import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import Modal from "react-modal";
import StarRatings from "react-star-ratings";

const Review = ({propertyId, userId}) => {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [averageRating, setAverageRating] = useState(3);
  const [initialRating, setInitialRating] = useState(5);


  console.log(initialRating);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = () => {
    const ratingData = {
        userId,
        propertyId,
        rating: initialRating
    };
    console.log(ratingData);
  }

  return (
    <div>
      <div className="flex mb-6 justify-center items-center flex-col gap-4">
      <StarRatings
            rating={averageRating}
            starRatedColor="orange"
            numberOfStars={5}
            name="rating"
          />

        {/* Rating button */}
        <button
          className="btn bg-secondary hover:bg-blue-800 text-white"
          onClick={openModal}
        >
          Give Rating
        </button>
      </div>

      {/* Modal is here */}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="border-2 w-1/3 h-1/3 bg-white left-1/2 top-1/2 absolute -translate-y-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col  items-end">
          <button className="m-4 text-3xl text-red-600" onClick={closeModal}>
            <MdCancel />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <StarRatings
            rating={initialRating}
            starRatedColor="orange"
            changeRating={(rating) => {setInitialRating(rating)}}
            numberOfStars={5}
            name="rating"
          />
          <button onClick={handleSubmit} className="mt-6 btn bg-secondary text-white hover:bg-blue-800">
            Submit
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Review;
