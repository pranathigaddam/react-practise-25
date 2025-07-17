"use client";

import React, { useActionState } from "react";

import { validateAction } from "./action";

const page = () => {
  const [actionState, action, ispending] = useActionState(validateAction, null);
  return (
    <div>
      <form action={action}>
        <input type="text" name="username"></input>
        <button> {ispending ? "submitting" : "submit"}</button>
        {actionState?.status && actionState?.message}
      </form>
    </div>
  );
};

export default page;
