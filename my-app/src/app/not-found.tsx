import Link from "next/link"

export default function NotFound(){

    return(

        <div>
            <p className="error">404</p>
            <p className="error-message">Oops! Page is not found</p>  
            <Link href="/" className="error-link">Return to Home page</Link>
        </div>
       

    );
}