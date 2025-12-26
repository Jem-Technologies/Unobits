'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  fallbackHref?: string;
};

export default function OpenSignupButton({ children, className, fallbackHref = '/pricing' }: Props) {
  return (
    <Link
      href={fallbackHref}
      onClick={(e) => {
        // If JS is enabled, open the in-site signup modal.
        if (typeof window !== 'undefined') {
          e.preventDefault();
          window.dispatchEvent(new CustomEvent('unobits:open-signup'));
        }
      }}
      className={className}
    >
      {children}
    </Link>
  );
}
