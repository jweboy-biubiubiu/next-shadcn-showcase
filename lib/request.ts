import QueryString from "qs";

const BASE_REQUEST_URL = "https://nest-api-service.vercel.app";

export const request = async (
  url: string,
  options?: RequestInit & Pick<Props, "searchParams">
) => {
  let reqUrl = BASE_REQUEST_URL + url;
  if (options?.searchParams) {
    const query = QueryString.stringify(options.searchParams, {
      addQueryPrefix: true,
    });
    reqUrl += query;
  }
  try {
    const { data, code } = await fetch(reqUrl, options).then((res) =>
      res.json()
    );
    // console.log("response", data);
    if (code === 0) {
      return data;
    }
    return null;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};
