import "./banner.css"


    const Banner = ({ titulo, subTitulo }) => {
        return (
            <div className="banner-container">
                <div className="banner">
                    <h1>{titulo}</h1>
                    <p>{subTitulo}</p>
                    <button>Hover me</button>
                </div>
            </div>
        )
    }

    export default Banner;