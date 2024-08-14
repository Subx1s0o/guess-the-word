import axios from "axios";
import { notFound } from "next/navigation";
import PageContent from "../PageContent";

const url = process.env.NEXT_PUBLIC_BACKEND_URL;

interface IVerifyResponse {
  user?: any;
  valid: boolean;
}

interface IConfirmAccountPageProps {
  params: { token: string };
}

export default async function ConfirmAccountPage({
  params,
}: IConfirmAccountPageProps) {
  const { token } = params;
  console.log(token);
  if (!token) {
    return <p>here is token {token}, is undefined</p>;
  }

  try {
    const res = await axios.post(`${url}/auth/verify-oauth-token`, { token });
    const data: IVerifyResponse = res.data;
    console.log(res.data);
    if (!data.valid || !data.user) {
      notFound();
    }

    return <PageContent user={data.user} />;
  } catch (error) {
    console.log(error);
    notFound();
  }
}
