import Axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { nodeApiLink } from "../../config/Api/NodeServerLink";
import { addCartItem, removeCartItem } from "../../Redux/action/userAction";

export const useCartMutation = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const addCartMutation = useMutation(
    async (itemId: string) => {
      const { data } = await Axios.put(
        `${nodeApiLink}/api/users/cart`,
        { courseId: itemId },
        { withCredentials: true }
      );
      return data;
    },
    {
      onSuccess: (cart) => {
        dispatch(addCartItem(cart));
      },
      onSettled: () => {
        queryClient.invalidateQueries("cart");
      },
    }
  );
  const removeCartMutation = useMutation(
    async (itemId: string) => {
      const { data } = await Axios.delete(`${nodeApiLink}/api/users/cart`, {
        data: { courseId: itemId },
        withCredentials: true,
      });
      return data;
    },
    {
      onSuccess: (cart) => {
        dispatch(removeCartItem(cart));
      },
      onSettled: () => {
        queryClient.invalidateQueries("cart");
      },
    }
  );
  return {
    addCart: addCartMutation.mutate,
    removeCart: removeCartMutation.mutate,
    addCartMutation,
    removeCartMutation,
  };
};
