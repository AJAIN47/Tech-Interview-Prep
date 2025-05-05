import React, { useState } from 'react';
import { sanitizeInput, handleExternalLinks } from '../utils/security';

const Modal: React.FC<{ open: boolean; onClose: () => void; title: string; children: React.ReactNode }> = ({
  open,
  onClose,
  title,
  children,
}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white text-black dark:bg-black dark:text-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-indigo-600 text-2xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="max-h-[60vh] overflow-y-auto">
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            href: child.props.href ? handleExternalLinks(child.props.href) : child.props.href,
            dangerouslySetInnerHTML: child.props.dangerouslySetInnerHTML
              ? { __html: sanitizeInput(child.props.dangerouslySetInnerHTML.__html) }
              : child.props.dangerouslySetInnerHTML
          });
        }
        return child;
      })}
    </div>
      </div>
    </div>
  );
};

// Footer component with contact form and quick links
// State management:
// - modal: Controls visibility of contact form modal
// - form: Stores contact form input values
const Footer: React.FC<{ fixed?: boolean }> = ({ fixed }) => {
  // Modal state
  const [modal, setModal] = useState<null | 'about' | 'contact' | 'privacy' | 'terms'>(null);

  // Contact form state
  const [form, setForm] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
  });

  // Handle contact form submission
  // Creates email with form data and opens default email client
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('General Query from Tech Interview Prep');
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nContact: ${form.contact}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:alishjain0102@gmail.com?subject=${subject}&body=${body}`;
    setModal(null);
  };

  return (
    // Footer container with responsive layout and gradient background
    <footer
      className={`w-full bg-gradient-to-r from-indigo-100 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 border-t border-indigo-200 text-black pt-8 pb-4 px-4
        ${fixed ? 'fixed bottom-0 left-0 z-30' : ''}
      `}
      style={fixed ? { boxShadow: '0 -2px 8px rgba(0,0,0,0.04)' } : {}}
    >
      {/* Main footer content grid with responsive layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-4">
        {/* Quick Links section with external resources */}
        <div>
          <h3 className="font-bold text-black dark:text-white mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              {/* Interview tips PDF guide */}
              <a
                href="https://www.ohsu.edu/sites/default/files/2019-04/How-to-Answer-the-64-Toughest-Interview-Questions.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Interview Tips
              </a>
            </li>
            <li>
              {/* Resume help resource */}
              <a
                href="https://www.resumehelp.com/landers/t1?utm_source=google&utm_campaign=22234377823&utm_medium=cpc&utm_keyword=resume%20help%20free&adid=732757259919&gad_source=1&gad_campaignid=22234377823&gbraid=0AAAAAC69EJ2M4RHsFxQoKocea6scMD6qx&gclid=Cj0KCQjw_dbABhC5ARIsAAh2Z-ScmVwvYf545qgEiqxTguwekZn-roJ5_MSYgTNuILTRaZcvmMYFBCUaAsurEALw_wcB"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Resume Help
              </a>
            </li>
            <li>
              {/* Practise questions link */}
              <a
                href="/learn"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Practise Questions
              </a>
            </li>
          </ul>
        </div>
        {/* About */}
        <div>
          <h3 className="font-bold text-black dark:text-white mb-2">About</h3>
          <button
            className="text-blue-600 hover:text-blue-800 transition-colors"
            onClick={() => setModal('about')}
          >
            Our Team
          </button>
        </div>
        {/* Contact */}
        <div>
          <h3 className="font-bold text-black dark:text-white mb-2">Contact</h3>
          <a
            href="mailto:alishjain0102@gmail.com"
            className="text-blue-600 hover:text-blue-800 transition-colors block mb-2"
          >
            alishjain0102@gmail.com
          </a>
          <button
            className="text-blue-600 hover:text-blue-800 transition-colors"
            onClick={() => setModal('contact')}
          >
            General Query Form
          </button>
        </div>
        {/* Policy & Connect */}
        <div>
          <h3 className="font-bold text-black dark:text-white mb-2">Legal & Connect</h3>
          <button
            className="text-blue-600 hover:text-blue-800 transition-colors block mb-1"
            onClick={() => setModal('privacy')}
          >
            Privacy Policy
          </button>
          <button
            className="text-blue-600 hover:text-blue-800 transition-colors block mb-3"
            onClick={() => setModal('terms')}
          >
            Terms of Service
          </button>
          <div className="flex items-center space-x-2">
            <a
              href="https://www.linkedin.com/in/alishjain0102/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              aria-label="Connect on LinkedIn"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                className="w-7 h-7"
              />
              <span className="ml-2 font-semibold">Connect</span>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-black mt-4">
        &copy; {new Date().getFullYear()} Tech Interview Prep. All rights reserved.
      </div>

      {/* Modals */}
      <Modal open={modal === 'about'} onClose={() => setModal(null)} title="Our Team">
        <p>
          <span className="font-semibold">This website is built and maintained by <span className="font-bold">Alish</span> under the supervision of mentor <span className="font-bold">Fabio Nolasco</span>.</span>
        </p>
        <div className="mt-4">
          <div className="flex items-center space-x-2 mb-2">
            <a
              href="https://www.linkedin.com/in/alishjain0102/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-indigo-600"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-5 h-5 mr-1" />
              Alish Jain
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <a
              href="https://www.linkedin.com/in/fabionolasco/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-indigo-600"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-5 h-5 mr-1" />
              Fabio Nolasco
            </a>
          </div>
        </div>
      </Modal>
      <Modal open={modal === 'contact'} onClose={() => setModal(null)} title="Contact / General Query">
        <form className="space-y-2" onSubmit={handleSubmit}>
          <input
            type="text"
            required
            placeholder="Your Name"
            className="w-full px-2 py-1 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            required
            placeholder="Your Email"
            className="w-full px-2 py-1 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="text"
            required
            placeholder="Contact Number"
            className="w-full px-2 py-1 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            value={form.contact}
            onChange={e => setForm({ ...form, contact: e.target.value })}
          />
          <textarea
            required
            placeholder="Your Message"
            className="w-full px-2 py-1 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            rows={2}
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-1 rounded hover:bg-indigo-700 transition-colors"
          >
            Send
          </button>
        </form>
      </Modal>
      <Modal open={modal === 'privacy'} onClose={() => setModal(null)} title="Privacy Policy">
        <p className="mb-2">
          We respect your privacy. No personal data is stored or shared. Contact forms are sent directly to the site owner and are not stored on any server.
        </p>
        <p>
          We do not use cookies or tracking scripts. External links are provided for your convenience and are not covered by this policy.
        </p>
      </Modal>
      <Modal open={modal === 'terms'} onClose={() => setModal(null)} title="Terms of Service">
        <p className="mb-2">
          Use this site for educational purposes only. We are not responsible for external content, job outcomes, or the accuracy of third-party resources.
        </p>
        <p>
          By using this site, you agree to these terms. If you do not agree, please do not use the site.
        </p>
      </Modal>
    </footer>
  );
};

export default Footer;