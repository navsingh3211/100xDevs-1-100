import { NextRequest } from "next/server";
import {PrismaClient} from '@prisma/client';

const client = new PrismaClient();

export async function GET(){
  const user = await client.user.findFirst({});
  // console.log(user,'user');
  return Response.json({ username: user?.username, password: user?.password })
}

export async function POST(req:NextRequest){
  //extract body
  const body = await req.json();
  // console.log(body,'body is:');
  
  //store the body in the database
  await client.user.create({
    data:{
      username:body.username,
      password:body.password
    }
  });

  return Response.json({
    messsage:"You have signuped successfully!"
  })
}