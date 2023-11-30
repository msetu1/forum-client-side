import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const SocialLogin = () => {
    const {googleLogin,githubLogin}=useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const from=location.state?.from?.pathname||"/"

    const socialLogin = (media) => {
        media()
            .then(result => {
                console.log(result.user);
                navigate(from,{replace:true})
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
                            className="btn btn-outline border-0 border-[#ea580c] border-b-4 text-xl font-bold"><FcGoogle className='text-xl'></FcGoogle> Google</h1>
                    </Link>
                    <Link>
                        <h1
                            onClick={() => socialLogin(githubLogin)}
                            className="btn btn-outline border-0 border-[#ea580c] border-b-4 text-xl font-bold"><BsGithub></BsGithub> Github</h1>
                    </Link>
                </div>
            </div>
    );
};

export default SocialLogin;