import { AiOutlineFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
const Footer = () => {
    return (
        <div className="bg-black py-10">
            <footer className="footer p-10 text-white max-w-7xl mx-auto">
                <div className="">
                    <img className="w-[80px] md:ml-8 lg:ml-20   h-[80px] rounded" src="https://i.ibb.co/kDyHy5C/logo.jpg" alt="" />
                    <h1 className="text-4xl font-berkshire_font font-semibold text-[#ea580c] mb-3">React Forum</h1>
                    <p className='lg:block md:hidden'>An online forum is an internet<br /> space structured around and dedicated<br /> to conversation, usually through<br />  posting questions, answers,<br /> and responses.</p>
                    
                    <div className="text-base hover:underline hover:underline-offset-1 font-semibold mt-5">
                        <a href="">------msetu5763@gmail.com-----</a>
                    </div>
                </div>
                <nav className="space-y-3">
                    <header className="font-bold text-2xl">Our Services</header>
                    <a className="link link-hover">IT Managment</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Product Design</a>
                </nav>
                <nav className="space-y-3">
                    <header className="font-bold text-2xl">Feature</header>
                    <a className="link link-hover">Membership
</a>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Notification icon</a>
                    <a className="link link-hover">feature</a>
                </nav>
                <nav className="space-y-3">
                    <header className="font-bold text-2xl">Feedback</header>
                    <a className="link link-hover">Good Courses</a>
                    <a className="link link-hover">Spacific Assignment</a>
                    <a className="link link-hover">online Forum platform</a>
                </nav>
                <nav className="space-y-3">
                    <header className="font-bold text-2xl">Contact us</header>
                    <a className="link link-hover">Gopalpu,Tangail</a>
                    <a className="link link-hover">01955......</a>
                </nav>
            </footer>
            <div className="flex justify-center items-center gap-4 text-white">
                <a href="" className='text-3xl'><FcGoogle></FcGoogle></a>
                <a href="" className='text-3xl'><AiOutlineFacebook></AiOutlineFacebook></a>
                <a href="" className='text-3xl'><BsGithub></BsGithub></a>
                <a href="" className='text-3xl'><FiTwitter></FiTwitter></a>
            </div>
        </div>
    );
};

export default Footer;