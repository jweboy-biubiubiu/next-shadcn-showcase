const BASE_REQUEST_URL = "https://nest-api-service-gb87e12dn-jweboy.vercel.app";

export const request = async (url: string, params?: any) => {
  try {
    const { data, code } = await fetch(BASE_REQUEST_URL + url, {
      body: params,
    }).then((res) => res.json());
    // console.log("data", data);
    if (code === 0) {
      return data;
    }
    return null;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};
