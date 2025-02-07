'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const LoginPage = () => {
    
    const { isLoaded, isSignedIn, user } = useUser();
    const router = useRouter()

    useEffect(() => {
        const role = user?.publicMetadata.role;
        
        if (role) {
            router.push(`/${role}`);
        }

    }, [user, router])

    return (
        <div className="h-screen  bg-[url(/bgLogin.jpg)] bg-cover ">
            <div className='h-screen w-screen bg-yogaBackgroundBlue bg-opacity-70 flex items-center justify-center'> 
            <SignIn.Root>
                <SignIn.Step name='start' className='bg-white bg-opacity-90 p-12 rounded-md shadow-2xl flex flex-col gap-2'>
                    <img className="h-auto max-w-full" src="/logo_full.png" alt="Yogastudio Roos"></img>
                        {/* <h1 className='text-xl font-bold flex flex-col items-center gap-2' >
                            Yogastudio Roos
                        </h1> */}
                    <h2 className='text-yogaGreen font-semibold'>Log in bij je account</h2>
                    <Clerk.GlobalError className='text-sm text-yogaRed'/>
                    <Clerk.Field name="identifier" className='flex flex-col gap-2'>
                        <Clerk.Label className='text-xs text-yogaGray' >Gebruikersnaam</Clerk.Label>
                        <Clerk.Input type='text' required className='p-2 rounded-md ring-1 ring-yogaGreen'/>
                        <Clerk.FieldError className='text-sm text-yogaRed'/> 
                    </Clerk.Field>
                    <Clerk.Field name="password" className='flex flex-col gap-2'>
                        <Clerk.Label className='text-sm text-yogaGray'>Wachtwoord</Clerk.Label>
                        <Clerk.Input type='password' required className='p-2 rounded-md ring-1 ring-yogaGreen'/>
                        <Clerk.FieldError className='text-sm text-yogaRed'/> 
                    </Clerk.Field>
                    <SignIn.Action submit className='bg-yogaGreen text-white my-4 rounded-md p-[10px] '>Inloggen</SignIn.Action>
                </SignIn.Step>
            </SignIn.Root>
            </div>
        </div>
  
    )
}

export default LoginPage