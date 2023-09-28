"use client";
import React from "react";
import { MovieProvider } from "../contexts/MovieContext";
import MovieContainer from "../containers/MovieContainer";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const Home = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MovieProvider>
        <MovieContainer />
      </MovieProvider>
    </QueryClientProvider>
  );
};

export default Home;
