// components/Header.js

export function Header() {
    return (
      <div className="relative isolate overflow-hidden bg-white py-16 sm:py-24">
        
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#00c853] via-[#1de9b6] to-[#00e676] " 
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-black sm:text-7xl">Ecosistemas</h2>
            <p className="mt-2 text-lg font-medium text-gray-700 sm:text-xl">
              Aquí encontrarás una recopilación de diversos ecosistemas colombianos, donde podrás explorar la riqueza natural de nuestro país a través de audios y datos que representan su biodiversidad única.
            </p>
          </div>
        </div>
      </div>
    );
  }
  