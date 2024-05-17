import Link from "next/link";

import { Logo } from "@/src/components/atoms/Logo";
import { Container } from "@/src/components/atoms/Container";
import useFirebaseAuth from "@/src/firebase/firebase-auth";

const Header = () => {
  const { authUser, logout } = useFirebaseAuth();

  const name = authUser?.displayName;
  const email = authUser?.email;
  const phone = authUser?.phoneNumber;
  const userName = name || email || phone;

  return (
    <header>
      <Container className="flex items-center justify-between">
        <div className="grid grid-cols-2 gap-2 items-center">
          <Link href={"/"} passHref>
            <Logo className="h-7 sm:h-10" />
          </Link>
        </div>
        {userName && (
          <div className="flex flex-col md:flex-row md:gap-3 items-end md:items-center justify-between">
            <div className=" text-teal-700">{`Logged in as ${userName}`}</div>
            <div
              className="text-red-400 hover:cursor-pointer font-bold text-base"
              onClick={() => logout()}
            >
              Log Out
            </div>
          </div>
        )}
      </Container>
      <div className=" border-t-3 border-t border-cecece " />
    </header>
  );
};

export default Header;
