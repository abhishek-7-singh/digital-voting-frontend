
// import { useRouter } from 'next/router';
// import { useEffect } from 'react';
// import Footer from '../components/layout/Footer';

// export default function Home() {
//   return (
//     <div className="relative min-h-screen flex flex-col">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-[0.20] z-0"
//         style={{
//           backgroundImage: "url('/election-india-indian-dot-map-260nw-2384927921.jpg')",
//         }}
//       ></div>

//       {/* Main Content */}
//       <div className="relative z-10 flex-grow">
//         <div className="max-w-[1000px] mx-auto pt-32">
//           <h1 className="text-4xl font-bold text-center">
//             India&apos;s Best Digital Voting System
//           </h1>
//           <p className="max-w-[600px] mx-auto text-center mt-4 text-gray-500">
//             Secure and easy voting app made with the ambition of making election
//             process secure and easy for all the citizens.
//           </p>

//           <div className="flex justify-center mt-8 gap-x-2 text-primary text-sm font-medium">
//             <a className="block px-6 py-2 border-2 border-primary" href="/register">
//               Register
//             </a>
//             <a className="block px-6 py-2 border-2 border-primary" href="/login">
//               Login
//             </a>
//           </div>
//         </div>

//         <p className="max-w-[600px] mx-auto text-center mt-4 text-gray-500">
//           E-governance Project
//         </p>
//         <p className="max-w-[600px] mx-auto text-center mt-4 text-gray-500">
//           21MIS1096 - ABHISHEK SINGH
//         </p>
//       </div>

//       <Footer />
//     </div>
//   );
// }


import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Footer from '../components/layout/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.20] z-0"
        style={{
          backgroundImage: "url('/election-india-indian-dot-map-260nw-2384927921.jpg')",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 flex-grow">
        <div className="max-w-[1000px] mx-auto pt-32">
          <h1 className="text-4xl font-bold text-center">
            India&apos;s Best Digital Voting System
          </h1>
          <p className="max-w-[600px] mx-auto text-center mt-4 text-gray-500">
            Secure and easy voting app made with the ambition of making election
            process secure and easy for all the citizens.
          </p>

          <div className="flex justify-center mt-8 gap-x-2 text-primary text-sm font-medium">
            <Link className="block px-6 py-2 border-2 border-primary" href="/register">
              Register
            </Link>
            <Link className="block px-6 py-2 border-2 border-primary" href="/login">
              Login
            </Link>
          </div>
        </div>

        <p className="max-w-[600px] mx-auto text-center mt-4 text-gray-500">
          E-governance Project
        </p>
        <p className="max-w-[600px] mx-auto text-center mt-4 text-gray-500">
          21MIS1096 - ABHISHEK SINGH
        </p>
      </div>

      <Footer />
    </div>
  );
}
