export default function FooterSubscribe() {
    return (
      <footer className="w-full bg-gradient-to-b  to-gray-900 py-12 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg mb-6 text-gray-300">
            Get the latest movie updates, exclusive content, and special offers straight to your inbox!
          </p>
  
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 w-80 border-none rounded-l-lg text-black focus:outline-none"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-r-lg hover:scale-105 transition transform duration-200 ease-in-out">
              Subscribe
            </button>
          </div>
        </div>
      </footer>
    );
  }
  