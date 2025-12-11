import React from "react";
import Home from "@/components/homecontent/Home";
import { getHomePage } from "@/lib/api/api.service";
import ErrorBoundary from "@/components/common/ErrorBoundary";
export const dynamic = "force-dynamic";


export default async function Page() {  

  return (
    <>
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    </>
  );
}
