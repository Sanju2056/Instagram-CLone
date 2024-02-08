import { useState } from 'react'
import { useForm } from 'react-hook-form'

const SignUpPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const footerData = ["Meta", "About", "Blog", "Jobs", "Help", "API", "Privacy", "Terms", "Locations", "Instagram Lite"
        , "Threads", "Contact Uploading & Non-Users", "Meta Verified"]
    const Language = ["English", "French", "Japanese", "Korean", "Spanish", "Russian", "Italian", "German", "Hindi",
        "Netherlands"]
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    // const handleSubmit = (data) => {
    //     // e.preventDefault()
    //     console.log(data)
    // }
    const disabled = !userName || !password || !email || !fullName 
    return (
        <div className=' flex flex-col  items-center  '>
            <div className='h-[max-content] w-[350px] border p-9 mt-4 flex flex-col items-center '>
                <div className='h-[90px] w-[100%] flex items-center justify-center'>
                    <img
                        src='/image/download.png'
                        alt='Instagram Logo'
                        height={90}
                        width={330}
                        className='h-[90px] w-[90%]'
                    />
                </div>
                <div className=' flex justify-center items-center mb-2'>
                    <p className='text-[16px] opacity-50  font-semibold text-center'>Sign up to see photos and videos from your friends</p>
                </div>
                <button className='h-[35px] w-[100%] text-[11px] pl-2 border 
                        rounded-lg outline-none bg-[#4e9ed4] flex justify-center
                         items-center my-2 cursor-pointer'>
                    <img
                        src='/image/facebook-icon.png'
                        alt='facebook icon'
                        width={1}
                        height={1}
                        className='h-[16px] w-[16px]'
                    />
                    <p className='text-[13px] font-medium ml-2 text-[#fff] '>Log in with Facebook</p>
                </button>
                <div className='h-[20px] w-[100%] flex items-center mb-3 '>
                    <div className='w-[45%]  border-b-2' ></div>
                    <p className='text-[12px]  font-semibold  mx-2'>OR</p>
                    <div className='w-[45%] border-b-2'></div>
                </div>
                <form className=" w-[100%]" onSubmit={handleSubmit((data) => {
                    console.log(data)
                })}>
                    <input
                        {...register("email", {
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Please enter a valid Email'
                            }
                        })}
                        placeholder='Mobile number and email address'
                        className='h-[40px] w-[100%]  text-[11px] pl-2 
                        border rounded outline-none bg-[#fafafa] mb-2'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="text-[red] font-semibold text-[14px]">
                        {errors.email?.message}
                    </p>
                    <input
                        {...register("fullName", {
                            pattern: {
                                value: /^[a-zA-Z]+$/,
                                message: 'Only alphabets'
                            }
                        })}
                        placeholder='Full Name'
                        className='h-[40px] w-[100%] text-[11px] pl-2 
                        border rounded outline-none bg-[#fafafa] mb-2'
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <p className="text-[red] font-semibold text-[14px]">
                        {errors.fullName?.message}
                    </p>
                    <input
                        {...register("username", {
                            pattern: {
                                value: /^[a-zA-Z0-9_-]{3,16}$/,
                                message: 'Enter Proper username '
                            }
                        })}
                        placeholder='UserName'
                        className='h-[40px] w-[100%] text-[11px] pl-2 
                        border rounded outline-none bg-[#fafafa] mb-2'
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <p className="text-[red] font-semibold text-[14px]">
                        {errors.username?.message}
                    </p>
                    <input
                        {...register("password", {
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
                                message: 'Password not strong'
                            }
                        })}
                        placeholder='Password'
                        type='password'
                        className='h-[40px] w-[100%] text-[11px] pl-2 
                        border rounded outline-none bg-[#fafafa] mb-2'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className="text-[red] font-semibold text-[14px]">
                        {errors.password?.message}
                    </p>
                    <p className='text-[12px] text-center my-2'>People who use our service may have uploaded your contact information to Instagram. Learn more</p>
                    <p className='text-[12px] text-center ' >By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.</p>
                    <button type='submit'
                        className={`h-[35px] w-[100%] text-[11px] pl-2 border 
                        rounded-lg outline-none bg-[#4cb5f9] flex justify-center
                         items-center my-2 cursor-pointer ${disabled ? 'opacity-50' : ''}`}
                        disabled={disabled} >
                        <p className=' text-[#fff] text-[13px] font-semibold'>Sign up</p>
                    </button>
                </form>
            </div>
            <div className='h-[60px] w-[350px] flex items-center justify-center border mt-2'>
                <p className='text-[13px] '>Don't have an account? </p>
                <p className='text-[13px] font-bold text-[#4197d0] ml-0.5 cursor-pointer'>Sign Up</p>
            </div>
            <p className='text-[13px] my-3'>Get the app.</p>
            <div className='h-[60px] w-[330px] flex items-center justify-center  gap-2'>
                <img
                    src='/image/google-play.png'
                    alt='google-play icon'
                    width={120}
                    height={10}
                    className='h-[40px]'
                />
                <img
                    src='/image/microsoft.png'
                    alt='microsoft icon'
                    width={120}
                    height={10}
                    className='h-[40px]'
                />
            </div>
            <div className='h-[30px] w-[65%] flex gap-4 items-center
             justify-center mt-6 text-[#918f8f]'>
                {
                    footerData.map((item, i) => {
                        return <p className='text-[11px] cursor-pointer' key={i}>{item}</p>
                    })
                }
            </div>
            <div className='h-[50px] w-[max-content] flex justify-center items-center'>
                <select className='w-[max-content] text-[12px] text-[#918f8f]'>
                    {
                        Language.map((language, i) => {
                            return <option className='w-[max-content] border-none
                             appearance-none' key={i}>{language}</option>
                        })
                    }
                </select>
                <p className='text-[12px] text-[#918f8f] ml-3'>2024 Instagram from Meta</p>
            </div>
        </div>
    )
}

export default SignUpPage