import styles from "@/styles/Contact.module.scss";
import {useState} from "react";

const Contact = () => {

    const ContactForm = () => {
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            message: ''
        });

        const handleChange = (e) => {
            const {name, value} = e.target;
            setFormData({
                ...formData,
                [name]: value,
            });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            // kod do wysyłania zapytania - fetch

            console.log('Form data:', formData);
        };


        return (
            <div className={styles.contact}>
                <h2>Contact Us</h2>
                <p>Example Str. 7</p>
                <p>zip code</p>
                <p>Warsaw</p>
                <br>
                </br>

                <p>phone: 111 111 111</p>
                <p>e-mail:example@gmail.com</p>
                <div className={styles.contactFormContainer}>
                    <form className={styles.contactForm} onSubmit={handleSubmit}>
                        <p>Contact form</p>
                        <div className={styles.formGroup}>
                            <label>Name:<input type="text" name="name" value={formData.name} onChange={handleChange}
                                               required/>
                            </label>
                            <label>Email:<input type="email" name="email" value={formData.email} onChange={handleChange}
                                                required/>
                            </label>
                            <label>Message:<textarea name="message" value={formData.message}
                                                     onChange={handleChange}></textarea>
                            </label>
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        );
    };

    return (
        <ContactForm/>
    );
};
export default Contact;