const basUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:5000' : 'http://3.115.123.72:5001';
console.log('process.env.NODE_ENV', process.env.NODE_ENV);

export async function postData(endpoint = "", data = {}) {
  
  const response = await fetch(`${basUrl}${endpoint}`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data)
  });

  return response.json();
}
