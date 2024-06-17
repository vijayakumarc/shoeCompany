import React from "react";

const ShoeCard = ({ imgUrl, changeBigShoeImage, bigShoeImg }) => {

    const handleClick = ()=>{
        if(bigShoeImg !== imgUrl.bigShoe){
            changeBigShoeImage(imgUrl.bigShoe)
        }
    }
  return (
    <div
      className={`border-2 rounded-3xl ${
        bigShoeImg === imgUrl.bigShoe ? "border-teal-blue" : "border-transparent"
      }  cursor-pointer max-sm:flex-1`} onClick={handleClick}
    >
        <div className="container flex justify-center items-center bg-white shadow-3xl bg-center bg-cover sm:w-40 sm:h-40 rounded-3xl max-sm:p-4">
            <img src={imgUrl.thumbnail} alt="shoe collection" width={127} height={103} className="object-contain " />
        </div>
    </div>
  );
};

export default ShoeCard;
