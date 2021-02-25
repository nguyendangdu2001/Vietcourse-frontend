import Axios from "axios";
import { QueryObserverResult, useQuery } from "react-query";
import { nodeApiLink } from "../../config/Api/NodeServerLink";
import { Cart } from "../../types/cart";

export const useCart = (): [Cart | undefined, QueryObserverResult<Cart, Error>] => {
  const query = useQuery<Cart, Error>("cart", async () => {
    const { data } = await Axios.get(`${nodeApiLink}/api/users/cart`, {
      withCredentials: true,
    });
    return data;
  });
  return [query.data, query];
};
