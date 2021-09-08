import "./Phones.css";
import { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import Alert from "@material-ui/lab/Alert";
import PhoneItem from "./PhoneItem";
import LoadingIndicator from "./LoadingIndicator";
import phonesServices from "../services/phones";

export default function Phones() {
  const [phones, setPhones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const phones = await phonesServices.getAll();
  
        setPhones(phones);
      } catch (error) {
        setError(error);
      }
    })();

    setIsLoading(false);
  }, []);

  async function toggleDetails(phoneSelected) {
    try {
      const phoneSelectedId = phoneSelected.id;
      const details = phoneSelected.details ? undefined : await phonesServices.getById(phoneSelectedId);
      const phonesUpdate = phones.map((phone) => {
        return phone.id === phoneSelectedId ? Object.assign({}, phone, { details }) : phone;
      });

      setPhones(phonesUpdate);
    } catch (error) {
      console.log(error);
    }
  }

  if (error) {
    return (
      <div className="Phones-alert">
        <Alert severity="error">{error.message}</Alert>
      </div>
    );
  } else if (isLoading) {
    return <LoadingIndicator />;
  } else {
    return (
      <List>
        {phones.map((phone) => (
          <PhoneItem
            key={phone.id}
            phone={phone}
            toggleDetails={toggleDetails}
          ></PhoneItem>
        ))}
      </List>
    );
  }
}
