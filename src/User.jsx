import './User.css'
export default function User({props}) {
    console.log(props)
    const {id, name, email}=props
    return(
        <div>
            <div className='box'>
                <h3>Users Name:{name}</h3>
                <p>ID: {id}</p>
                <p>Email: {email}</p>
            </div>
        </div>
    )
};
