export default function Frnd({frnd}) {
    const { name, email } = frnd;
    return (
        <div className="box">
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    )
}