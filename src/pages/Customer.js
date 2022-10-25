import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Customer = () => {
    const { id } = useParams();
    const [customer, SetCustomer] = useState();
    useEffect(()=>{
        const url = 'http://localhost:8000/api/customers/' + id;
        fetch(url)
            .then((response)=> {
                return response.json();
            })
            .then((data) => {
                SetCustomer(data.customer)
            })
    },[]);
    return (  <div>
        {customer ? <div>
            <p>{customer.id}</p>
            <p>{customer.name}</p>
            <p>{customer.industry}</p>
        </div> : null}
        <Link to='/customers'>Customer</Link>
    </div>);
}
 
export default Customer;