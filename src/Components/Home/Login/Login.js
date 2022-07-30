import React from 'react'

const Login = (props) => {
    return(
<div class="flex items-center justify-center w-screen h-screen bg-gradient-to-t from-blue-200 to-indigo-900 sm:px-6">
    <div class="flex items-center justify-center max-w-sm p-4 div w-screen h-[70vh] flex-col rounded-md shadow-md sm:p-6">
        <div class="flex items-center justify-center">
            <span class="text-xl font-medium text-white">Login</span>
        </div>
        <form class="mt-4">
            <label for="email" class="block">
                <span class="text-sm text-white">Email</span>
                <input type="email" id="email" name="email" autocomplete="username"
                    class="block w-full px-3 py-2 mt-1 text-white bg-gray-700 rounded-md focus:outline-none focus:shadow-outline focus:bg-gray-800"
                    required />
            </label>
            <label for="password" class="block mt-3">
                <span class="text-sm text-white">Password</span>
                <input type="password" id="password" name="password" autocomplete="current-password"
                    class="block w-full px-3 py-2 mt-1 text-white bg-gray-700 rounded-md focus:outline-none focus:shadow-outline focus:bg-gray-800"
                    required />
            </label>
            <div class="flex items-center justify-between mt-4">
                <div>
                    <label class="inline-flex items-center">
                        <input type="checkbox"
                            class="text-indigo-600 border form-checkbox focus:outline-none focus:shadow-outline" />
                        <span class="mx-2 text-sm text-white">Remember me</span>
                    </label>
                </div>
                <div>
                    <a class="block text-sm text-indigo-200 hover:underline focus:outline-none focus:underline"
                        href="#">Forgot
                        your password?</a>
                </div>
            </div>
            <div class="mt-6">
                <button type="button" class="w-full px-4 py-2 text-sm text-center rounded-md bg-gradient-to-r from-indigo-800 via-indigo-200 to-indigo-800 text-center hover:from-deep-purple-700-accent hover:from-indigo-800 hover:to-indigo-800 ...">Login
                    </button>
            </div>
            <div class="mt-6">
                <button type="button" class="w-full px-4 py-2 text-sm text-center rounded-md bg-gradient-to-r from-indigo-800 via-indigo-200 to-indigo-800 text-center hover:from-deep-purple-700-accent hover:from-indigo-800 hover:to-indigo-800 ...">Sign
                    Up</button>
            </div>
        </form>
    </div>
</div>
    )
}

export default Login
