import { Navbar } from '../shared/Navbar'
import { Footer } from '../shared/Footer'
import { SideBar } from '../components/SideBar'
import Card from '../components/Card'

const Home = () => {
    return (
        <div>
            <Navbar />
            <SideBar />
            <Footer />
        </div>
    )
}

export default Home