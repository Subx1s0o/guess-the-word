import { NextPage } from "next";

export type CheckAuth = {
  isNeededAuth?: boolean;
};

export type NextPageAuth<P = {}> = NextPage<P> & CheckAuth;

export type TypeComponentAuthFields = { Component: CheckAuth };
