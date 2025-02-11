import React from 'react';
import { Mail, Linkedin, Youtube, Twitter, Github } from 'lucide-react';

const ContactPage = () => {
  const contacts = [
    {
      platform: 'GitHub',
      icon: <Github size={28} />,
      link: 'https://github.com/ANDREW-Li-33',
      color: 'hover:text-purple-400'
    },
    {
      platform: 'LinkedIn',
      icon: <Linkedin size={28} />,
      link: 'https://www.linkedin.com/in/andrew-li-87865a209/',
      color: 'hover:text-blue-400'
    },
    {
      platform: 'Twitter',
      icon: <Twitter size={28} />,
      link: 'https://x.com/li_03_li_03',
      color: 'hover:text-blue-400'
    },
    {
      platform: 'YouTube',
      icon: <Youtube size={28} />,
      link: 'https://www.youtube.com/@andrewli1745',
      color: 'hover:text-red-400'
    },
    {
      platform: 'Email',
      icon: <Mail size={28} />,
      link: 'ali497@gatech.edu',  // Note: Removed "mailto:" so it doesn't become clickable.
      color: 'hover:text-green-400'
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4 font-[family-name:var(--font-geist-sans)]">
            Get in Touch!
          </h1>
          <p className="text-lg text-gray-400">
            Connect with me on any of these platforms :)
          </p>
        </div>

        <div className="grid gap-6">
          {contacts.map((contact) => {
            // Check if the contact is for Email. If so, render a non-clickable element.
            if (contact.platform === 'Email') {
              return (
                <div
                  key={contact.platform}
                  className={`flex items-center p-4 rounded-lg border border-white/[.145] transition-colors hover:bg-[#1a1a1a] ${contact.color} group`}
                >
                  <div className="p-2 mr-4">
                    {contact.icon}
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-xl font-semibold font-[family-name:var(--font-geist-sans)] group-hover:text-gray-100">
                      {contact.platform}
                    </h2>
                    <p className="text-gray-400 text-sm mt-1 font-[family-name:var(--font-geist-mono)]">
                      {contact.link}
                    </p>
                  </div>
                </div>
              );
            }

            // For all other contacts, render a clickable link.
            return (
              <a
                key={contact.platform}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center p-4 rounded-lg border border-white/[.145] transition-colors hover:bg-[#1a1a1a] ${contact.color} group`}
              >
                <div className="p-2 mr-4">
                  {contact.icon}
                </div>
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold font-[family-name:var(--font-geist-sans)] group-hover:text-gray-100">
                    {contact.platform}
                  </h2>
                  <p className="text-gray-400 text-sm mt-1 font-[family-name:var(--font-geist-mono)]">
                    {contact.link.replace('mailto:', '')}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
