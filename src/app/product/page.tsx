import Link from "next/link"
function page() {
  return (
  <>
  <h1>Product List</h1>
  <br></br>
  <h2>Product One</h2> <Link href="/product/2">Product Two</Link> 
  <h2>Product Two</h2>
  <h2>Product Three</h2>
  
  </>  

)
}

export default page