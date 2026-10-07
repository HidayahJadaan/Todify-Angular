import { User } from "../models/user.model";

const users:User[] =[
{
    id:'user-1',
    name:'Hedaia Jadaan',
    email:'hedaia@user.com',
    password:'123',
    created_at:new Date('2026-10-07')

},
{
    id:'user-2',
    name:'Mohammed Jadaan',
    email:'mohammed@user.com',
    password:'123',
    created_at:new Date('2026-09-02')

},
{
    id:'user-3',
    name:'Ibrahim Jadaan',
    email:'ibrahim@user.com',
    password:'123',
    created_at:new Date('2026-10-4')

},
];

export const getAllUsers = (): Promise<User[]>=> {
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve(users);

        },4000)
    })
}

// ===========================
export const addUser = (user:User):Promise<User>=>{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            user.id = 'user-'+ (users.length +1)
            user.created_at = new Date();
            users.push(user);
            resolve(user);

        },4000)
    })

}
// ========================================