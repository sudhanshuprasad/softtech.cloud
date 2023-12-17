import React from 'react'

const Team = () => {
    return (
        <div>

            <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
                        <p className="my-4">If you care for your time, I hands down would go with this."</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center ">
                        <img className="rounded-full w-9 h-9" src="https://img.icons8.com/ios-filled/50/administrator-male--v1.png" alt="profile picture"/>
                            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                                <div>Sudhanshu Prasad</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400 ">Developer at SoftTech</div>
                            </div>
                    </figcaption>
                </figure>
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
                        <p className="my-4">Designing with Figma components that can be easily translated to the utility classNamees of Tailwind CSS is a huge timesaver!"</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center ">
                        <img className="rounded-full w-9 h-9" src="https://img.icons8.com/ios-filled/50/administrator-male--v1.png" alt="profile picture"/>
                            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                                <div>Himanshu Rout</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Marketing Lead</div>
                            </div>
                    </figcaption>
                </figure>
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow</h3>
                        <p className="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center ">
                        <img className="rounded-full w-9 h-9" src="https://img.icons8.com/ios-filled/50/administrator-male--v1.png" alt="profile picture"/>
                            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                                <div>Saswat Pradhan</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Developer at SoftTech</div>
                            </div>
                    </figcaption>
                </figure>
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
                        <p className="my-4">You have many examples that can be used to create a fast prototype for your team."</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center ">
                        <img className="rounded-full w-9 h-9" src="https://img.icons8.com/ios-filled/50/administrator-male--v1.png" alt="profile picture"/>
                            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                                <div>Kumar Janmejay</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Media and Marketing</div>
                            </div>
                    </figcaption>
                </figure>
            </div>

        </div>
    )
}

export default Team
