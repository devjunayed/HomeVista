import ProtectAdmin from "@/components/admin-components/ProtectAdmin/ProtectAdmin";
import React from "react";

const Page = () => {
  return (
    <ProtectAdmin>
      <div>Manage Properties</div>
    </ProtectAdmin>
  );
};

export default Page;
