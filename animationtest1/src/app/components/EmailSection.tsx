"use client"

import React from 'react'
import GithubIcon from '../images/github-icon.svg'
import LinkedInIcon from '../images/linkedin-icon.svg'
import Link from 'next/link'
import Image from 'next/image'
import { headers } from 'next/headers'

const EmailSection = () => {

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        }
        const JSONData = JSON.stringify(data);
        const endpoint = "/api/send";

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONData,
        }

        const response = await fetch(endpoint, options);
        const resData = await response.json();
        if (resData.status='success') {
            console.log('Messagesent successfully');
        }
    }
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4>">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top -left-4 transform -translate-x-1/2 -transla">

        </div>
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md"> 
        {" "}
        I am currently looking for new job opportunities. 
        If for any reason you want to contact me, my inbox is always open. 
        I will try my best to get back to you as soon as possible! {" "}
        </p>
        <div className="socials flex flex-row gap-2">
            <Link href="github.com">
                <Image src={GithubIcon} alt="Github Icon"/>
            </Link>
            <Link href="linkedin.com"> 
                <Image src={LinkedInIcon} alt="Linkedin Icon" />
            </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
                <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                    Your Email</label>
                <input 
                    name="email"
                    type="email" 
                    id="email"
                    required
                    className="bg-[#181818] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
                    placeholder="your@email.com" 
                />
            </div>
                <div className="mb-6">
                    <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
                        Subject</label>
                    <input
                        name="subject"
                        type="subject"
                        id="subject"
                        required
                        className="bg-[#181818] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
                        placeholder="Just saying hi"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="message"
                        className="text-white block text-sm mb-2 font-medium"
                        > Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            className="bg-[#181818] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
                            placeholder="Your message here"
                            />
                </div>
                <button
                    type="submit"
                    className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 rounded-lg w-full">
                    Send Message
                    </button>
        </form>
      </div>
    </section>
  )
}

export default EmailSection
