import axios from "axios";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider";

const PurchaseModal = ({ items, handleClose, refetch }) => {
  const { name, resalePrice, _id, picture, Seller } = items;
  const { user } = useContext(AuthContext);
  const handlePurchase = (e) => {
    e.preventDefault();
    const buyer = user?.displayName;
    const email = user?.email;
    const device = name;
    const price = resalePrice;
    const contact = e.target.contact.value;
    const meetingLocation = e.target.meetingLocation.value;

    // console.log(name, email, device, price, contact, meetingLocation);

    axios
      .post("https://second-time-around-server-rahatsikz.vercel.app/orders", {
        Seller,
        buyer,
        email,
        device,
        price,
        contact,
        meetingLocation,
        productPic: picture,
      })
      .then(
        (response) => {
          console.log(response);
          toast.success("Order has been placed successfully");
          handleClose();
        },
        (error) => {
          console.log(error);
        }
      );

    // axios
    //   .put(`https://second-time-around-server-rahatsikz.vercel.app/productstate/?id=${_id}`, {
    //     purchaseStatus: true,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     refetch();
    //   })
    //   .catch((error) => console.error(error));
  };
  return (
    <div>
      <input type="checkbox" id={_id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-base-200">
          <label
            htmlFor={_id}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h4 className="text-lg text-center font-semibold my-4">
            Purchase Detail
          </h4>
          <form onSubmit={handlePurchase} className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="your name"
              defaultValue={user?.displayName}
              readOnly
              className="input w-full"
            />
            <input
              type="text"
              placeholder="your email"
              defaultValue={user?.email}
              readOnly
              className="input w-full"
            />
            <input
              type="text"
              placeholder="your selected device"
              defaultValue={name}
              readOnly
              className="input w-full"
            />
            <input
              type="text"
              placeholder="selected device Price"
              defaultValue={resalePrice + " tk"}
              readOnly
              className="input w-full"
            />
            <input
              type="text"
              name="contact"
              placeholder="Your Mobile Number"
              className="input w-full"
              required
            />
            <input
              type="text"
              name="meetingLocation"
              placeholder="Desired Meeting Location"
              className="input w-full"
              required
            />
            <div className="modal-action !mt-2 !justify-center">
              <button className="btn btn-block" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;
