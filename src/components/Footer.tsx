import { FaCode } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center space-x-2">
            <FaCode className="h-6 w-6" />
            <span className="font-bold">Tapasvi Madhak</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Tapasvi Madhak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
