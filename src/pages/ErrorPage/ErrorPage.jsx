import React from 'react';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                {/* Visual Decorative Element */}
                <div className="relative">
                    <p className="text-9xl font-black text-slate-200 select-none">
                        404
                    </p>
                    <p className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-indigo-600">
                        Oops!
                    </p>
                </div>

                {/* Main Content */}
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                    Page not found
                </h1>

                <p className="mt-6 text-base leading-7 text-slate-600 max-w-md mx-auto">
                    Sorry, we couldn’t find the page you’re looking for. It might have been moved, deleted, or perhaps it never existed in the first place.
                </p>

                {/* Action Buttons */}
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="/"
                        className="rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-lg hover:bg-indigo-500 hover:shadow-indigo-500/30 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Go back home
                    </a>
                </div>

                {/* Subtle Background Blobs */}
                <div className="absolute top-0 left-0 -z-10 h-full w-full overflow-hidden">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                    <div className="absolute top-1/2 -right-24 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;