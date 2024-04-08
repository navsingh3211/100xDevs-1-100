import axios from 'axios';

async function getUserDetails() {
  new Promise((resolve,reject)=>{
    setTimeout(()=>{

    },3000);
  })
  // const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");
  const response = await axios.get("http://localhost:3000/api/user");

	return response.data;
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
