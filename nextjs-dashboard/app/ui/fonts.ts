import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google'; 
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({ 
    subsets: ['latin'],
    weight: ['400', '700'],
});

//when you use the next/font module. It downloads font files at build
//  time and hosts them with your other static assets. This means when a
//  user visits your application, there are no additional network requests 
// for fonts which would impact performance.

