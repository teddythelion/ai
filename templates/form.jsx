import React from 'react'

function form() {


  return (
        <form className="mx-auto max-w-md"> 
            <div className="mb-4"> 
                <label className="block text-gray-700 font-bold mb-2" for="name">
                    Name </label>
                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="John Doe"/> 
                </div> 
                <div className="mb-4"> 
                <label className="block text-gray-700 font-bold mb-2" for="email"> Email </label>
                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="johndoe@example.com"/>
                        </div> <div className="mb-6"> <label className="block text-gray-700 font-bold mb-2" for="password"> 
                            Password </label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********"/>
                    </div> 
                    <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"> Sign In </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#"> Forgot Password? </a>
            </div> 
        </form> 

  )

}
export default form







