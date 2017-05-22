/**
 * TSync version of fetch. Adds custom error handling on top of the native fetch api.
 */
async function tsyncFetch(input: RequestInfo, init: RequestInit) {
  return fetch(input, init).then((response) => {
    if (response.ok) {
      return response;
    }
    throw new Error("Network response was not ok.");
  });
}

export default tsyncFetch;
