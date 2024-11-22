import { FaFacebook, FaGithub, FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" bg-dark-06 text-white p-8 mt-20">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {/* Column 1 */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Home</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-grey-60 hover:text-white">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-grey-60 hover:text-white">
                    Devices
                  </a>
                </li>
                <li>
                  <a href="#" className="text-grey-60 hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-grey-60 hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Movies</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-grey-60 hover:text-white">
                    Genres
                  </a>
                </li>
                <li>
                  <a href="#" className="text-grey-60 hover:text-white">
                    Trending
                  </a>
                </li>
                <li>
                  <a href="#" className="text-grey-60 hover:text-white">
                    New Releases
                  </a>
                </li>
                <li>
                  <a href="#" className="text-grey-60 hover:text-white">
                    Popular
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Shows</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-grey-60 hover:text-white">
                    Genres
                  </a>
                </li>
                <li>
                  <a href="#" className="text-grey-60 hover:text-white">
                    Trending
                  </a>
                </li>
                <li>
                  <a href="#" className="text-grey-60 hover:text-white">
                    New Releases
                  </a>
                </li>
                <li>
                  <a href="#" className="text-grey-60 hover:text-white">
                    Popular
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-grey-60 hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 5 */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Subscription</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-grey-60 hover:text-white">
                    Plans
                  </a>
                </li>
                <li>
                  <a href="#" className="text-grey-60 hover:text-white">
                    Features
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 6 - Connect With Us */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="p-4 bg-dark-10 border-2 border-dark-15 rounded-md">
                    <FaFacebook size={20} />
                  </button>
                </a>
                <a
                  href="https://t.me/silver_shade1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="p-4 bg-dark-10 border-2 border-dark-15 rounded-md">
                    <FaTelegram size={20} />
                  </button>
                </a>
                <a
                  href="https://github.com/m-mohammad-d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="p-4 bg-dark-10 border-2 border-dark-15 rounded-md">
                    <FaGithub size={20} />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center border-t-2 border-dark-15 flex justify-between  flex-col md:flex-row items-center pt-4">
          <p className="text-grey-60">
            &copy; 2023 StreamVibe, All Rights Reserved
          </p>
          <div className="flex justify-center items-center space-x-6">
            <a href="#" className="text-grey-60 hover:text-white">
              Terms of Use
            </a>
            <a href="#" className="text-grey-60 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-grey-60 hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
