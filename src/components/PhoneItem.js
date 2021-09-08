import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import api from "../api";
import PhoneDetail from "./PhoneDetail";

export default function PhoneItem(props) {
  const { phone, toggleDetails } = props;
  const image = `${api.images}${phone.imageFileName}`;

  return (
    <>
      <ListItem onClick={ () => toggleDetails(phone) }>
        <ListItemAvatar>
          <Avatar
            variant="square"
            alt={phone.name}
            src={image}
            style={{ height: "100%" }}
          />
        </ListItemAvatar>
        <ListItemText primary={phone.name} secondary={`Price $${phone.price}`} />
      </ListItem>
      { phone.details ? <PhoneDetail details={phone.details}></PhoneDetail> : <Divider /> }
    </>
  );
}
