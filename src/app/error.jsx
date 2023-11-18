"use client";

import React, { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
  <div className="text-center mt-10">
  <h1>Something went wrong</h1>
  <button className="hover:text-amber-600 border rounded-md my-3 p-1" onClick={() => reset()}>Try Again</button>
  </div>);
}
