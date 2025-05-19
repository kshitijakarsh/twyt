import FooterFAQ from "./FooterFAQ";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800 px-6 md:px-12">
      <div className="max-w mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <FooterFAQ />
        </div>

        <div className="flex flex-col items-center py-12">
          <h4 className="text-xl font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                About Twyt
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className=" border-t border-gray-800 text-center text-sm text-gray-500 p-4">
        Made by Kshitij Akarsh
      </div>
    </footer>
  );
}
