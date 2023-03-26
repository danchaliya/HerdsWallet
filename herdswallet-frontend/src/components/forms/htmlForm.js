import '../../styles/forms.scss'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import axios from 'axios';

function basicForm() {
    const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [phone, setPhone] = useState('');
}

// const handleSubmit = (event) => {

// }

const form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
    //to prevent reload
    e.preventDefault();
    //creates a multipart/form-data object
    let data = new FormData(form);
    axios({
      method  : 'post',
      url : '/',
      data : data,
    })
    .then((res)=>{
      console.log(res);
    })
    .catch((err) => {throw err});
});

return(
    <form action="/action_page.php">
  <label for="fname">First name:</label><br/>
  <input type="text" id="fname" name="fname" value="John"/><br/>
  <label for="lname">Last name:</label><br/>
  <input type="text" id="lname" name="lname" value="Doe"/><br/><br/>
  <input type="submit" value="Submit"/>
</form> 

)

export default basicForm()