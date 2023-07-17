import axios from "axios";
interface propsType{
  email : string;
  password : number;

}
  const token =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImsiOiI4MDBiYjc3YS1mMmE5LTRmMTMtYWFhYi0xNGI0MmE0MmVlY2YiLCJleHAiOjQ4Mzk0Mzk2NDYsImlhdCI6MTY4Mzc2NjA0NiwibiI6Iuq0gOumrOyekCIsInV0IjoiQURNSU4ifQ.ClqwTuaOjapriAieiIwRa5rFa-gDp7Uk0gMcvoLph0wEZJVVnaDwjZ4gX5RSXQfFEcWpUz_0UzR60xzRaWoHhQ";



export function postDate() {
  try {
    const response = axios.post(
      "http://dev-api.riskzero.ai/auth/authenticate",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
