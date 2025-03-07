"use clinet"
// import { notFound } from "next/navigation"

export default function ReviewDetails({ params }: {
    params: {
        productId: string,
        reviewId: string
    }
}) {

    function getRandomInt(max:any) {
        return Math.floor(Math.random() * max);
      }
      
      const random=getRandomInt(3);
    if(random===0)
    {
        throw Error("error occurred in the review Id")
    }

    // {
    //     if (parseInt(params.reviewId) > 1000) {
    //         notFound()
    //     }
    // }
    return <h1>
        Review {params.reviewId} for the product {params.productId}
    </h1>
}