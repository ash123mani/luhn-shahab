const basUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:5000' : '';

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
