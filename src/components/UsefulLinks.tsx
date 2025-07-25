import { UsefulLink } from '../types/content';

interface UsefulLinksProps {
  links: UsefulLink[];
}

export default function UsefulLinks({ links }: UsefulLinksProps) {
  return (
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a 
            href={link.url} 
            className="text-blue-600 underline hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
