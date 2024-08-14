"use client";
import GlobalLoader from "@/components/Loaders/GlobalLoader";
import { auth, githubProvider, googleProvider } from "@/firebase.config";
import { useActions } from "@/hooks/useActions";
import { useModalStore } from "@/hooks/useModalStore";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AuthButtons() {
  const router = useRouter();
  const { googleAuth } = useActions();
  const [loading, setLoading] = useState<boolean>(false);
  const { closeModal } = useModalStore();

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      const result: any = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const idToken = await user.getIdToken();

      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google`,
          { accessToken: idToken }
        );

        closeModal();

        if (response.data.needConfirmation) {
          // const queryParams = new URLSearchParams({
          //   token: response.data.token,
          // }).toString();

          router.replace(`/confirm-account/${response.data.token}`);
        } else {
          await googleAuth(response.data);
        }
      } catch (error) {
        setLoading(false);
        toast.error("Error To Sending Data, Check Your Internet Connection");
        return;
      }
    } catch (error) {
      setLoading(false);
      toast.error("Error during Google sign-in, try later");
    }
  };

  const signInWithGithub = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, githubProvider);
      console.log(result);
      closeModal();
    } catch (error) {
      console.error("Error during GitHub sign-in:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center gap-4 mb-4">
        <button
          onClick={signInWithGoogle}
          type="button"
          className="flex items-center gap-1 shadow-button border text-center px-4 py-2 bg-white text-black font-medium rounded-lg"
        >
          <GoogleIcon />
          <span>Google</span>
        </button>
        <button
          onClick={signInWithGithub}
          type="button"
          className="flex items-center gap-1 text-center px-4 py-2 bg-black text-white font-medium rounded-lg"
        >
          <GitHubIcon />
          <span>GitHub</span>
        </button>
      </div>
      {loading && <GlobalLoader />}
    </>
  );
}
