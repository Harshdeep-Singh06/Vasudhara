import React from 'react'

function Herosection2() {
  return (
    <>
      <div className="relative overflow-x-hidden bg-gradient-to-b from-[#76b296]/30 to-[#a1d9be]/40 px-4 sm:px-6 md:px-10 lg:px-16 py-10">
        <p className="text-2xl sm:text-3xl text-black md:text-4xl md:text-start text-center md:relative md:left-25  font-semibold">
          LATEST NEWS AND UPDATES
        </p>

        <div className="flex flex-col border border-black/10 md:mt-20 mt-10 rounded-xl md:flex-row justify-center md:justify-around items-center md:items-start gap-10 md:gap-6 pt-10 pb-10 font-semibold text-center">
          
          <div className="w-full max-w-md flex flex-col items-center md:items-start">
            <p className="font-mono text-sm sm:text-base">1 May 2026 →</p>

            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-5 mt-5 text-center sm:text-left">
              <img
                src="/website-icon.jpg"
                alt="website-picture"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover flex-shrink-0"
              />
              <p className="text-base sm:text-lg md:text-xl leading-snug text-black/60">
                Vasudhara launches its website
              </p>
            </div>
          </div>

          <div className="w-full max-w-md flex flex-col items-center md:items-start">
            <p className="font-mono text-sm sm:text-base">5 March 2026 →</p>

            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-5 mt-5 text-center sm:text-left">
              <img
                src="/tree.jpg"
                alt="tree-pic"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover flex-shrink-0"
              />
              <p className="text-base sm:text-lg md:text-xl leading-snug text-black/60">
                Vasudhara plants its first tree
              </p>
            </div>
          </div>

        </div>

        <hr className="mt-4" />
      </div>
    </>
  )
}

export default Herosection2