import "../Index.css"
import Header from "../Components/Header"
import Header2 from "../Components/Header2"
import Section3 from "../Components/section3"

function Home() {
    return (
        <div>
            <div id="background">
                <Header></Header>
                <Header2></Header2>
            </div>
            <Section3></Section3>
        </div>
    )
}

export default Home