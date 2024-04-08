import axios from 'axios';
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

async function getUserDetails() {
  try{
    const user = await client.user.findMany({
      where:{
        id:3
      }
    });
    console.log(user,'user');
    
    return { username: user[0]?.username, password: user[0]?.password }
  }catch(error){
    console.log(error);
  }
}

export default async function Home() {
  const userData = await getUserDetails();
  // console.log(userData,'userData');
  
  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userData?.username}
                </div>
                
                Password: {userData?.password}
            </div>
        </div>
    </div>
  );
}
