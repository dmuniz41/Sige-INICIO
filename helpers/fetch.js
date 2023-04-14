//  http://localhost:4000/api

export const fetchSinToken = (endpoint, data, method = "GET") => {
  const url = `${import.meta.env.VITE_BACKEND_API_URL}/${endpoint}`;

  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};
