import React from 'react';

// Utility function to convert text with URLs and email addresses to JSX with clickable links
export function parseTextWithLinks(text: string): React.ReactElement {
  if (!text) return <span>{text}</span>;
  
  // Regex patterns for URLs and emails
  const urlPattern = /(https?:\/\/[^\s<>"']+)/gi;
  const emailPattern = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/gi;
  const websitePattern = /\b([a-zA-Z0-9.-]+\.(se|com|org|net|edu|gov|mil))\b(?![/@])/gi;
  
  let parts: (string | React.ReactElement)[] = [text];
  
  // First, handle full URLs
  parts = parts.flatMap((part, index) => {
    if (typeof part !== 'string') return [part];
    
    const urlMatches = part.match(urlPattern);
    if (!urlMatches) return [part];
    
    const splitParts: (string | React.ReactElement)[] = [];
    let remaining = part;
    
    urlMatches.forEach((url) => {
      const urlIndex = remaining.indexOf(url);
      if (urlIndex > 0) {
        splitParts.push(remaining.substring(0, urlIndex));
      }
      splitParts.push(
        <a
          key={`url-${index}-${url}`}
          href={url}
          className="text-blue-600 underline hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          {url}
        </a>
      );
      remaining = remaining.substring(urlIndex + url.length);
    });
    
    if (remaining) {
      splitParts.push(remaining);
    }
    
    return splitParts;
  });
  
  // Then handle email addresses
  parts = parts.flatMap((part, index) => {
    if (typeof part !== 'string') return [part];
    
    const emailMatches = part.match(emailPattern);
    if (!emailMatches) return [part];
    
    const splitParts: (string | React.ReactElement)[] = [];
    let remaining = part;
    
    emailMatches.forEach((email) => {
      const emailIndex = remaining.indexOf(email);
      if (emailIndex > 0) {
        splitParts.push(remaining.substring(0, emailIndex));
      }
      splitParts.push(
        <a
          key={`email-${index}-${email}`}
          href={`mailto:${email}`}
          className="text-blue-600 underline hover:text-blue-800"
        >
          {email}
        </a>
      );
      remaining = remaining.substring(emailIndex + email.length);
    });
    
    if (remaining) {
      splitParts.push(remaining);
    }
    
    return splitParts;
  });
  
  // Finally, handle website references (like "Handelsbanken.se")
  parts = parts.flatMap((part, index) => {
    if (typeof part !== 'string') return [part];
    
    const websiteMatches = part.match(websitePattern);
    if (!websiteMatches) return [part];
    
    const splitParts: (string | React.ReactElement)[] = [];
    let remaining = part;
    
    websiteMatches.forEach((website) => {
      const websiteIndex = remaining.indexOf(website);
      if (websiteIndex > 0) {
        splitParts.push(remaining.substring(0, websiteIndex));
      }
      
      // Add protocol if missing
      const url = website.startsWith('http') ? website : `https://${website}`;
      
      splitParts.push(
        <a
          key={`website-${index}-${website}`}
          href={url}
          className="text-blue-600 underline hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          {website}
        </a>
      );
      remaining = remaining.substring(websiteIndex + website.length);
    });
    
    if (remaining) {
      splitParts.push(remaining);
    }
    
    return splitParts;
  });
  
  return <span>{parts}</span>;
}
