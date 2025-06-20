
import FormWrapper from '@/components/forms/FormWrapper';
import Input from '@/components/forms/Input';
import { useLoginVoter } from '@/hooks/queries/use-login-voter';
import useUserStore from '@/store/user-store';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Footer from '../components/layout/Footer';

export interface VoterLoginData {
  citizenship_no: string;
  password: string;
  adminLogin?: boolean;
}

export type VoterLoginResponse = {
  _id: string;
  name: string;
  citizenship_no: number;
  token: string;
  admin: boolean;
};

const LoginPage = () => {
  const { mutate: loginUser, isLoading, isError } = useLoginVoter();
  const setLoginDetail = useUserStore((state) => state.setLoginDetail);
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  const submitHandler = (data: VoterLoginData) => {
    loginUser({ ...data, adminLogin: isAdmin }, {
      onSuccess: (data) => {
        setLoginDetail({
          _id: data._id,
          name: data.name,
          citizenship_no: data.citizenship_no,
          token: data.token,
          admin: data.admin,
        });
        if (data.admin) {
          router.push('/admin-dashboard');
        } else {
          router.push('/dashboard');
        }
      },
    });
  };

  return (
    <div className="relative min-h-screen">
      
      {/* Faded Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.15] z-0"
        style={{
          backgroundImage: "url('/360_F_255367453_h4QrW8WqQE1VV4bI8tp1qP8ZoPIvEMCl.jpg')",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="max-w-[600px] mx-auto my-8">
          <h2 className="mb-4 text-2xl font-bold">Voter / Admin Login</h2>
          {isError && (
            <p className="text-red-600 font-bold my-4">Login Failed!</p>
          )}
          <FormWrapper
            showLoader={isLoading}
            className="space-y-4"
            onSubmit={submitHandler}
          >
            <Input name="citizenship_no" label="Citizenship No." />
            <Input type="password" name="password" label="Password" />

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="adminLogin"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              />
              <label htmlFor="adminLogin">Login as Admin</label>
            </div>
          </FormWrapper>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default LoginPage;

