import { Link } from "react-router-dom";

const Index = (props) => {

    //loaded function
    const loaded = () => {
        return props.cheeses.map((cheese) => (
            <div key={cheese._id} className="cheese">
                <Link to={`/cheeses/${cheese._id}`}><h1>{cheese.name}</h1></Link>
                <img src={cheese.image} alt={cheese.name} />
                <h3>{cheese.countryOfOrigin}</h3>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>
    };

    return props.cheeses ? loaded() : loading();
};

export default Index;