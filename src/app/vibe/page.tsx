"use client";
import { getApi } from "@/service/apiService";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Vibe = () => {
  const { data } = useQuery({
    queryKey: ["getData"],
    queryFn: () => getApi("/spotify"),
  });

  console.log({ data });

  return (
    <div>
      <div>Vibe</div>
    </div>
  );
};

export default Vibe;
