import React from 'react'

const Login = (props) => {
    return(
<div class="flex items-center justify-center w-screen h-screen bg-gradient-to-t from-blue-200 to-indigo-900 sm:px-6">
    <div class="flex items-center justify-center max-w-sm p-4 div w-screen h-[70vh] flex-col rounded-md shadow-md sm:p-6">
        <div class="flex items-center justify-center">
            <span class="text-xl font-medium text-white">Sign Up</span>
        </div>
        <form class="mt-4">
        <label for="email" class="block">
                <span class="text-sm text-white">Username</span>
                <input  type="text" name="username" id="username" placeholder="username"
                    class="block w-full px-3 py-2 mt-1 text-white bg-gray-700 rounded-md focus:outline-none focus:shadow-outline focus:bg-gray-800"
                    required />
            </label>
            <label for="email" class="block">
                <span class="text-sm text-white">Email</span>
                <input type="email" id="email" name="email" placeholder="@email"
                    class="block w-full px-3 py-2 mt-1 text-white bg-gray-700 rounded-md focus:outline-none focus:shadow-outline focus:bg-gray-800"
                    required />
            </label>
            <label for="password" class="block mt-3">
                <span class="text-sm text-white">Password</span>
                <input type="password" id="password" name="password" autocomplete="current-password" placeholder="
                password"
                    class="block w-full px-3 py-2 mt-1 text-white bg-gray-700 rounded-md focus:outline-none focus:shadow-outline focus:bg-gray-800"
                    required />
            </label>
            <label for="password" class="block mt-3">
                <span class="text-sm text-white">Confirm Password</span>
                <input type="text" name="confirm" id="confirm" placeholder="confirm password"
                    class="block w-full px-3 py-2 mt-1 text-white bg-gray-700 rounded-md focus:outline-none focus:shadow-outline focus:bg-gray-800"
                    required />
            </label>
            <div class="flex items-center justify-between mt-4">
    
            </div>
            <div class="mt-6">
                <button type="button" class="w-full px-4 py-2 text-sm text-center rounded-md bg-gradient-to-r from-indigo-800 via-indigo-200 to-indigo-800 text-center hover:from-deep-purple-700-accent hover:from-indigo-800 hover:to-indigo-800 ...">Register</button>
            </div>
            <div class="mt-6">
                <button type="button" class="w-full px-4 py-2 text-sm text-center rounded-md bg-gradient-to-r from-indigo-800 via-indigo-200 to-indigo-800 text-center hover:from-deep-purple-700-accent hover:from-indigo-800 hover:to-indigo-800 ...">Login</button>
            </div>
        </form>
    </div>
</div>
    )
}

export default Login
