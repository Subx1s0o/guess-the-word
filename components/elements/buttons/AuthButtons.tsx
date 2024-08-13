import GlobalLoader from "@/components/Loaders/GlobalLoader";
import { auth, githubProvider, googleProvider } from "@/firebase.config";
import { useModalStore } from "@/hooks/useModalStore";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AuthButtons() {
  const router = useRouter();
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
        console.log(response.data);

        closeModal();

        if (response.data.needConfirmation) {
          // Set the token in cookies
          Cookies.set("auth-token", idToken, { expires: 1 });

          const queryParams = new URLSearchParams({
            name: response.data.name,
            photo: response.data.picture,
          }).toString();

          router.replace(`/confirm-account?${queryParams}`);
        }
      } catch (error) {
        console.error("Error sending token to backend:", error);
      }
    } catch (error) {
      console.error("Error during Google sign-in:", error);
    } finally {
      setLoading(false);
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
