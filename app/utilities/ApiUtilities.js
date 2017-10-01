// Api utilities

export function callApi(url) {
  return fetch(url).then(
    response =>
      response.ok ? response.json() : Promise.reject(response.text())
  );
}
