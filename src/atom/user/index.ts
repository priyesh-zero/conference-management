import { atom } from "jotai";

type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    isStaff: boolean;
    events: string[];
};

export const userAtom = atom<User | null>({
    id: "user-one",
    name: "User One",
    email: "user@one.com",
    password: "UserPassword",
    isStaff: false,
    events: ["d01e01", "d03e02"],
});
