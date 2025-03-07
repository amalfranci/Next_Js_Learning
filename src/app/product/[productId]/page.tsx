"use clinet"

export default function ProductDetailes({ params }: { params: { productId: string } }) {


  return <>
    <h1>Detailes about produc {params.productId}
     
    </h1>
  </>
}


