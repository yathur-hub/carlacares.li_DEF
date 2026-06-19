import React, { useEffect } from 'react';

interface PageProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ title, description, children }) => {
  useEffect(() => {
    // 1. Set document title
    document.title = title;

    // 2. Set meta description dynamically
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // 3. Force scroll to top instantly to satisfy Requirement 9 and 10
    window.scrollTo(0, 0);
  }, [title, description]);

  return <>{children}</>;
};

export default Page;
