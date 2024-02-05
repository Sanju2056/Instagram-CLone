import React from 'react'
import Image from 'next/image'

const LogInPage = () => {
    const footerData = ["Meta","About","Blog","Jobs","Help","API","Privacy","Terms","Locations","Instagram Lite"
    ,"Threads","Contact Uploading & Non-Users","Meta Verified"]
    const Language=["English","French","Japanese","Korean","Spanish","Russian","Italian","German","Hindi",
        "Netherlands"]
    return (
        <div className=' h-[100vh] flex flex-col  items-center'>
            <div className='h-[400px] w-[330px] border p-10 mt-4 flex flex-col items-center'>
                <div className='h-[90px] w-[100%] flex items-center justify-center'>
                    <Image
                        src='/image/download.png'
                        height={90}
                        width={330}
                        className='h-[90px] w-[90%]'
                    />
                </div>
                <form>
                    <input
                        placeholder='Phone number, username or email'
                        className='h-[40px] w-[100%]  text-[11px] pl-2 
                        border rounded outline-none bg-[#fafafa] mb-2'
                    />
                    <input
                        placeholder='Password'
                        className='h-[40px] w-[100%] text-[11px] pl-2 
                        border rounded outline-none bg-[#fafafa] mb-2'
                    />
                    <div className='h-[35px] w-[100%] text-[11px] pl-2 border 
                        rounded-lg outline-none bg-[#4cb5f9] flex justify-center
                         items-center my-2 cursor-pointer'>
                        <p className=' text-[#fff] text-[13px] font-semibold'>Log in</p>
                    </div>
                </form>
                <div className='h-[40px] w-[100%] flex items-center mb-4 mt-1'>
                    <div className='w-[45%]  border-b-2' ></div>
                    <p className='text-[12px]  font-semibold  mx-2'>OR</p>
                    <div className='w-[45%] border-b-2'></div>
                </div>
                <div className='flex justify-center items-center cursor-pointer'>
                    <Image
                        src='/image/facebook-icon.png'
                        width={1}
                        height={1}
                        className='h-[15px] w-[15px]'
                    />
                    <p className='text-[13px] font-medium ml-2 text-[#385185] my-2'>Log in with Facebook</p>
                </div>
                <p className='text-[11px] text-[#344a7a] my-2 cursor-pointer'>Forget Password?</p>
            </div>
            <div className='h-[60px] w-[330px] flex items-center justify-center border mt-2'>
                <p className='text-[13px] '>Don't have an account? </p>
                <p className='text-[13px] font-bold text-[#4197d0] ml-0.5 cursor-pointer'>Sign Up</p>
            </div>
            <p className='text-[13px] mt-4'>Get the app.</p>
            <div className='h-[60px] w-[330px] flex items-center justify-center  gap-2'>
            <Image
                src='/image/google-play.png'
                width={120}
                height={10}  
                className='h-[40px]'
            />
            <Image
                src='/image/microsoft.png'
                width={120}
                height={10}  
                className='h-[40px]'
            />
            </div>
            <div className='h-[30px] w-[65%] flex gap-4 items-center
             justify-center mt-6 text-[#918f8f]'>
                {
                    footerData.map((item)=>{
                       return <p className='text-[11px] cursor-pointer'>{item}</p>
                    })
                }
            </div>
            <div className='h-[50px] w-[max-content] flex justify-center items-center'>
                <select className='w-[max-content] text-[12px] text-[#918f8f]'>
                    { 
                        Language.map((language)=>{
                            return <option className='w-[max-content] border-none
                             appearance-none '>{language}</option>
                        })
                    }
                </select>
                <p className= 'text-[12px] text-[#918f8f] ml-3'>2024 Instagram from Meta</p>
            </div>
        </div>
    )
}

export default LogInPage