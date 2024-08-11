
import { Metadata } from "next";
import ClientProviders from "../ClientProviders";

export const metadata: Metadata = {
  title: "Profile Page - Guess The Word",
  description: "View and manage your profile information.",
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientProviders>
      <main className="flex-1 flex flex-col">{children}</main>
    </ClientProviders>
  );
}
