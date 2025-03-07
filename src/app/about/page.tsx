
 import Link from 'next/link'

export const metadata = {
    title : "About code evlution",

}


export default function About() {

    return  <>
    
   <h2>Welcome to about page</h2>
   <Link href="/dashboard">DashBoard</Link> <br></br>
   <Link href='/product'>Products</Link>

    </> 
}