import { atom } from "jotai";
import { v4 } from "uuid";

type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    isStaff: boolean;
    events: string[];
};

const USERS: User[] = [
    {
        id: v4(),
        email: 'jane@acme.org',
        password: 'jane',
        name: 'Jane Doe',
        isStaff: true,
        events: []
    },
    {
        id: v4(),
        email: 'john@gmail.com',
        password: 'john',
        name: "John Diggle",
        isStaff: false,
        events: ["d01e01", "d03e02"]
    }
]

const users = window.localStorage.getItem("USERS")

if (!users) {
    window.localStorage.setItem("USERS", JSON.stringify(USERS))
}

const usersData = users ? JSON.parse(users) as User[] : USERS

const usersAtom = atom(usersData)

export const persistedUsers = atom(
    (get) => get(usersAtom),
    (_get, set, users: User[]) => {
        window.localStorage.setItem("USERS", JSON.stringify(users))
        set(usersAtom, users)
    }
)

export const userAtom = atom<User | null>(null);
