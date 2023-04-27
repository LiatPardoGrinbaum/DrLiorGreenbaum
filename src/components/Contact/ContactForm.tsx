import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import validator from "validator";
import { Box, Button, TextField, Typography } from "@mui/material";
import "./style.css";
import { theme } from "../../theme";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const REACT_APP_SERVICE_ID: string = process.env.REACT_APP_SERVICE_ID!;
  const REACT_APP_TEMPLATE_ID: string = process.env.REACT_APP_TEMPLATE_ID!;
  const REACT_APP_USER_ID: string = process.env.REACT_APP_USER_ID!;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      setError(".יש למלא את כל השדות");
    } else if (!validator.isEmail(email)) {
      setError("כתובת אימייל אינה חוקית.");
    } else if (phone.toString().length !== 10) {
      setError("יש להזין מספר פלאפון בעל 10 ספרות.");
    } else {
      console.log(e.currentTarget);
      setName("");
      setEmail("");
      setPhone("");
      setError("");
      setSuccess("תודה, קיבלתי את ההודעה שלך! אהיה איתך בקשר בהקדם.");
      emailjs.sendForm(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, e.currentTarget, REACT_APP_USER_ID).then(
        (result) => {
          console.log(result);
          console.log(result.text);
          console.log("!ההודעה נשלחה");
        },
        (error) => {
          console.log(error.text);
        }
      );
      setTimeout(() => {
        setSuccess("");
      }, 2000);
    }
  };

  return (
    <Box>
      <Typography variant="h6" color="primary.dark" component="h2">
        לייעוץ וקביעת תור:
      </Typography>
      <form onSubmit={sendEmail} className="form-container">
        <TextField
          name="user_name"
          placeholder="שם מלא"
          type="text"
          variant="outlined"
          fullWidth
          required
          size="small"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          name="user_email"
          placeholder="כתובת מייל"
          type="email"
          variant="outlined"
          fullWidth
          required
          size="small"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          name="user_phone"
          placeholder="טלפון"
          type="number"
          variant="outlined"
          fullWidth
          required
          size="small"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <Button type="submit" color="primary" variant="contained" className="input-submit" sx={{ width: "20rem" }}>
          שליחה
        </Button>
      </form>
      <Box sx={{ padding: "1rem 0rem" }}>
        {error && (
          <p className="alert" style={{ color: "red", fontFamily: theme.typography.fontFamily }}>
            {error}
          </p>
        )}
        {success && (
          <p className="alert" style={{ color: "green", fontFamily: theme.typography.fontFamily }}>
            {success}
          </p>
        )}
      </Box>
    </Box>
  );
};

export default ContactUs;
