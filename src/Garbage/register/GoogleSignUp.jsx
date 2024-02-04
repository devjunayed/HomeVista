"use client";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Image from "next/image";
import auth from "../../../firebase.config";

const GoogleSignUp = () => {
  const handleGoogleSignUp = async () => {
    return signInWithPopup(auth, new GoogleAuthProvider())
      .then(async (result) => {
        const user = result.user;
        console.log(user);
        const storeUser = await fetch("/api/storeUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName: user.displayName,
            email: user.email,
          }),
        });
        const res = await storeUser.json();
        console.log(res);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
      });
  };
  return (
    <div className="py-6 space-x-2">
      <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">
        <Image
          src="/googlelogo.png"
          alt={"google logo"}
          width={500}
          height={500}
          onClick={handleGoogleSignUp}
          className="cursor-pointer"
        />
      </span>
    </div>
  );
};

export default GoogleSignUp;
