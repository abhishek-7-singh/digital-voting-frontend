
import { VoterLoginResponse } from '@/pages/login';
import useUserStore from '@/store/user-store';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Header = () => {
  const { token } = useUserStore((state) => state.loginDetail);
  const setLoginDetail = useUserStore((state) => state.setLoginDetail);
  const router = useRouter();
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    !isSSR && (
      <nav className="bg-gradient-to-tr from-primary to-primary-light bg-primary-light p-6 flex justify-between items-center">
        <div className="text-slate-100">
          <h1 className="font-bold text-2xl">E-Governance Digital Election</h1>
          <p className="font-medium">Digital Election Application</p>
        </div>

        <div className="flex gap-x-2 text-white text-sm font-medium relative">
          <a className="block px-6 py-2 border-2 border-white" href="/">
            Home
          </a>

          {/* Dropdown fully stable */}
          <div className="relative group">
            <button className="block px-6 py-2 border-2 border-white">
              Laws & Documents
            </button>

            <div className="absolute left-0 top-full mt-0 w-60 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 z-50">
              <a
                href="https://eci.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Election Commission of India
              </a>
              <a
                href="https://eci.gov.in/mcc"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Model Code of Conduct
              </a>
              <a
                href="https://legislative.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Indian Laws
              </a>
              <a
                href="https://eci.gov.in/legal-provisions"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Legal Provisions
              </a>
            </div>
          </div>

          {!token ? (
            <>
              <a className="block px-6 py-2 border-2 border-white" href="/register">
                Register
              </a>
              <a className="block px-6 py-2 border-2 border-white" href="/login">
                Voter Login
              </a>
              <a className="block px-6 py-2 border-2 border-white" href="/login">
                Admin Login
              </a>
            </>
          ) : (
            <>
              <button
                className="block px-6 py-2 border-2 border-white"
                onClick={() => {
                  setLoginDetail({} as VoterLoginResponse);
                  router.push('/');
                }}
              >
                Log Out
              </button>
            </>
          )}
        </div>
      </nav>
    )
  );
};

export default Header;
