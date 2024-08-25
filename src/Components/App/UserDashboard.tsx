
export default function UserDashboard(): JSX.Element {

    return (<><div className="w-full max-w-4xl mx-auto p-4">
        <div className="bg-white p-6 rounded-xl shadow-lg">
            <header className="flex justify-between items-center mb-8">
                <div className="text-lg font-semibold">09:41</div>
                <div className="flex space-x-4">
                    <button className="p-2 rounded-full hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                        </svg>
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </button>
                </div>
            </header>

            <div className="flex justify-between items-center mb-8">
                <div className="text-gray-600 text-lg font-semibold">Stay Healthy</div>
                <div className="flex space-x-4">
                    <button className="p-2 rounded-full hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="text-4xl font-extrabold mb-4">Let's exercise today!</div>
            <div className="text-lg text-gray-600 mb-8">Take a look at your sport status below</div>

            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-4">
                    <img src="https://bit.ly/3gaTsf4" className="h-16 w-16 object-cover rounded-full shadow-lg border-2 border-white" />
                    <div className="font-bold text-2xl">Lv. 14</div>
                </div>
                <button className="border-2 border-black rounded-xl px-6 py-2 font-semibold bg-yellow-300 hover:bg-yellow-400 transition">
                    <span className="mr-1 text-lg">+</span>
                    <span className="text-lg">Challenges</span>
                </button>
            </div>

            <div className="border-2 border-black p-4 rounded-2xl bg-green-100 mb-8">
                <div className="font-semibold text-xl mb-2">Steps</div>
                <div className="text-gray-600 font-semibold mb-4">3245/6000</div>
                <div className="flex items-center">
                    <div className="w-2/5 h-6 bg-green-700 rounded-l-2xl"></div>
                    <div className="w-3/5 h-6 bg-yellow-400 rounded-r-2xl"></div>
                </div>
            </div>

            <div className="border-2 border-black p-4 rounded-2xl bg-green-100 mb-8">
                <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="text-xl font-semibold">Active time</div>
                </div>
                <div className="flex justify-between">
                    <div className="font-semibold text-gray-600">30/60 mins</div>
                    <div className="font-thin text-gray-500">1712 Kcal | 1.23 KM</div>
                </div>
            </div>

            <div className="border-2 border-black p-4 rounded-2xl bg-green-100 mb-8">
                <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    <div className="text-xl font-semibold">Sleep time</div>
                </div>
                <div className="text-gray-600 font-semibold mb-3">6 h 30 mins</div>
                <div className="flex items-center">
                    <div className="w-2/12 h-6 bg-green-400 rounded-l-2xl"></div>
                    <div className="w-3/12 h-6 bg-yellow-700"></div>
                    <div className="w-2/12 h-6 bg-purple-500"></div>
                    <div className="w-2/12 h-6 bg-pink-300"></div>
                    <div className="w-3/12 h-6 bg-yellow-400 rounded-r-2xl"></div>
                </div>
            </div>
        </div>
    </div>
    </>)
}