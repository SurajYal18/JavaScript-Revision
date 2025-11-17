async function getuser(){
    try{
        const res=await fetch("https://jsonplaceholder.typicode.com/users/1");
        if(!res.ok){
            
            throw new Error(`HTTP Error: ${res.status}`);
        }
        const data=await res.json()
        console.log("User:", data)
    }
    catch(err){
        console.error("Failed to fetch user:",err.message);
    }
}

getuser();

async function fetchUser(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed with status ${res.status}`);
  }

  return res.json();
}

// Usage
async function run() {
  try {
    const user = await fetchUser(3);
    console.log("User loaded:", user);
  } catch (err) {
    console.log("Error fetching user:", err.message);
  }
}

run();
