import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa"

const footerLinks = {
  company: [
    { title: "About Us", href: "#" },
    { title: "Teams / Careers", href: "#" },
    { title: "Blogs", href: "#" },
    { title: "Support", href: "#" },
  ],
  business: [
    { title: "Official OYO Blog", href: "#" },
    { title: "Investor Relations", href: "#" },
    { title: "OYO Circle", href: "#" },
    { title: "OYO Frames", href: "#" },
  ],
  policies: [
    { title: "Terms and conditions", href: "#" },
    { title: "Guest Policies", href: "#" },
    { title: "Privacy Policy", href: "#" },
    { title: "Trust And Safety", href: "#" },
  ],
  security: [
    { title: "Cyber Security", href: "#" },
    { title: "Cyber Security Awareness", href: "#" },
    { title: "Responsible Disclosure", href: "#" },
    { title: "Advertise your Homes", href: "#" },
  ],
}

const hotelLocations = [
  [
    "Hotels near me",
    "Hotels in Goa",
    "Hotels in Puri",
    "Hotels in Mahabaleshwar",
    "Hotels in Jaipur",
    "Hotels in Shimla",
  ],
  [
    "Hotels in Manali",
    "Hotels in Udaipur",
    "Hotels in Mussoorie",
    "Hotels in Pondicherry",
    "Hotels in Delhi",
    "Hotels in Mumbai",
  ],
  [
    "Hotels in Nainital",
    "Hotels in Lonavala",
    "Hotels in Munnar",
    "Hotels in Bangalore",
    "Hotels in Mysore",
    "Hotels in Darjeeling",
  ],
  [
    "Hotels in Mount Abu",
    "Hotels in Kodaikanal",
    "Hotels in Hyderabad",
    "Hotels in Pune",
    "Hotels in Chandigarh",
    "Hotels in Shirdi",
  ],
  [
    "Hotels in Agra",
    "Hotels in Gangtok",
    "Hotels in Coorg",
    "Hotels in Chennai",
    "Hotels in Tirupati",
    "Hotels in Dalhousie",
  ],
  [
    "Hotels in Haridwar",
    "Hotels in Kolkata",
    "Hotels in Ahmedabad",
    "Hotels in Shillong",
    "Hotels in Rishikesh",
    "Hotels in Varanasi",
  ],
]

const internationalLocations = [
  ["OYO Hotel UK", "OYO Hotel USA", "OYO Hotel Mexico", "OYO Hotel Brasil", "Hotels in Japan", "OYO Hotel Indonesia"],
  [
    "OYO Vacation Homes in Europe",
    "Homes in Scandinavia",
    "Homes in Southern Europe",
    "Belvilla Holiday Homes",
    "Traum Vacation Apartments",
    "Traum Holiday Homes",
  ],
]

export default function Footer() {
  return (
    <footer className="bg-gray-600 text-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="text-4xl font-extrabold text-white">OYO</div>
            <h2 className="text-lg font-medium">World&apos;s leading chain of hotels and homes</h2>
          </div>
          <div className="flex items-center gap-2">

            <span>Join our network and grow your business!</span>
            <button className="bg-white text-gray-800 px-4 py-2 rounded-md flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  d="M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21Z"
                  strokeWidth="2"
                />
                <path d="M3 7H21" strokeWidth="2" />
                <path d="M7 3V7" strokeWidth="2" />
                <path d="M17 3V7" strokeWidth="2" />
              </svg>
              List your property
            </button>
          </div>
        </div>
      </div>

      <hr className="border-gray-500" />

      {/* App Download */}
      <div className="container mx-auto px-4 py-8">
        <p className="mb-4">Download OYO app for exciting offers.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:opacity-80">
            <Image
              src="/placeholder.svg"
              alt="Download on App Store"
              width={140}
              height={42}
              className="h-[42px] w-auto"
            />
          </Link>
          <Link href="#" className="hover:opacity-80">
            <Image
              src="/placeholder.svg"
              alt="Get it on Google Play"
              width={140}
              height={42}
              className="h-[42px] w-auto"
            />
          </Link>
        </div>
      </div>

      <hr className="border-gray-500" />

      {/* Links Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              {links.map((link) => (
                <Link key={link.title} href={link.href} className="block py-2 hover:text-gray-300 transition-colors">
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Hotels Section */}
      <div className="container mx-auto px-4 py-8">
        <h3 className="text-xl font-semibold mb-6">OYO Hotels</h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          {hotelLocations.map((column, i) => (
            <div key={i} className="space-y-2">
              {column.map((hotel) => (
                <Link key={hotel} href="#" className="block text-sm hover:text-gray-300 transition-colors">
                  {hotel}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {internationalLocations.map((column, i) => (
            <div key={i} className="space-y-2">
              {column.map((location) => (
                <Link key={location} href="#" className="block text-sm hover:text-gray-300 transition-colors">
                  {location}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Social & Copyright */}
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-4">
          <Link href="#" className="hover:text-gray-300">
            <FaFacebookF size={20} />
          </Link>
          <Link href="#" className="hover:text-gray-300">
            <FaInstagram size={20} />
          </Link>
          <Link href="#" className="hover:text-gray-300">
            <FaTwitter size={20} />
          </Link>
          <Link href="#" className="hover:text-gray-300">
            <FaYoutube size={20} />
          </Link>
          <Link href="#" className="hover:text-gray-300">
            <FaPinterest size={20} />
          </Link>
        </div>
        <div className="text-sm text-gray-300">2013-2022 © Oravel Stays Limited</div>
      </div>
    </footer>
  )
}

