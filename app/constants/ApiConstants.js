// Api url endpoint constants

const ROOT_URL = "https://newsapi.org/v1";
export const API_KEY = "601874f25d2c4d169f428b30a5f487dd";

const formatUrl = url =>
  url.indexOf("?") === -1
    ? `${ROOT_URL}${url}?apiKey=${API_KEY}`
    : `${ROOT_URL}${url}&apiKey=${API_KEY}`;

export const API_RETRIEVE_SOURCES = formatUrl("/sources/");
export const API_RETRIEVE_ARTICLES = formatUrl("/articles?source=:source");
