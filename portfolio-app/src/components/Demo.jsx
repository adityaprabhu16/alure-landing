
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroImg2 from "./HeroImg2"

const Demo = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading="How Alure works." text="A quick and easy demo." backgroundImage="https://images.unsplash.com/photo-1637181155600-f4487dabf8ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%22"/>
            <h1>Virtual Field Site Demo</h1>

            <p>Description about virtual field site demo</p>

            <h1>Virtual Rendering of Product</h1>

            <p>Description about virtual rendering of product.</p>
            <Footer />
        </div>
    )
}

export default Demo;