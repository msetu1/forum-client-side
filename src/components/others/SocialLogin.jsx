import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const SocialLogin = () => {
    const {googleLogin,githubLogin}=useAuth()
    // const location = useLocation()
    // const navigate = useNavigate()

    const socialLogin = (media) => {
        media()
            .then(result => {
                console.log(result.user);
                // navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error);
            })

    }
    return (
            <div className="mt-5">
                <div className="flex items-center gap-6 justify-between">
                    <Link>
                        <h1
                            onClick={() => socialLogin(googleLogin)}
                            className="btn btn-outline px-8 border-0 border-b-4 text-white text-2xl"><FcGoogle className='text-2xl'></FcGoogle> Google</h1>
                    </Link>
                    <Link>
                        <h1
                            onClick={() => socialLogin(githubLogin)}
                            className="btn btn-outline px-8 border-0 border-b-4 text-white text-2xl"><BsGithub className='text-2xl text-white'></BsGithub> Github</h1>
                    </Link>
                </div>
            </div>
    );
};

export default SocialLogin;