import baner from '../../assets/Home/banner.jpg';
import './Home.css'

const Banner = () => {
    return (
        <div
            className="hero banner min-h-[400px]">
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl font-bold">Swap Skills, Grow Together</h1>
                    <p className="mb-5">
                    Trade Expertise, Build Connections, and Learn New Skills—No Money Needed!
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;