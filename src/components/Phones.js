import { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import Alert from "@material-ui/lab/Alert";
import PhoneItem from "./PhoneItem";
import LoadingIndicator from "./LoadingIndicator";
import phonesServices from "../services/phones";
import { createUseStyles } from 'react-jss'

export default function Phones() {
  const [phones, setPhones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const useStyles = createUseStyles({
    PhonesAlert: {
      marginTop: '10px'
    }
  });
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      try {
        const phones = await phonesServices.getAll();
  
        setPhones(phones);
      } catch (error) {
        setError(error);
      }
      
      setIsLoading(false);
    })();
  }, []);

  async function toggleDetails(phoneSelected) {
    try {
      const phoneSelectedId = phoneSelected.id;
      const details = phoneSelected.details ? undefined : await phonesServices.getById(phoneSelectedId);

      setPhones((previousPhonesState) => {
        return previousPhonesState.map((phone) => {
          return phone.id === phoneSelectedId ? Object.assign({}, phone, { details }) : phone;
        })
      });
    } catch (error) {
      console.log(error);
    }
  }

  if (error) {
    return (
      <div className={classes.PhonesAlert}>
        <Alert severity="error">{error.message}</Alert>
      </div>
    );
  } else if (isLoading) {
    return (<LoadingIndicator />);
  } else if (!isLoading && phones.length === 0) {
    return (<div className={classes.PhonesAlert}>
      <Alert severity="info">No phones information available, please try adding a new phone through the phones API.</Alert>
    </div>)
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
