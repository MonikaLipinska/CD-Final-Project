import styles from "@/styles/Help.module.scss";
import {useState} from "react";

const Help = () => {


    const HelpForm = () => {
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
            <div className={styles.help}>
                <h2>Help</h2>
                <p>How can we help you ?</p>

                <div className={styles.helpFormContainer}>
                    <form className={styles.helpForm} onSubmit={handleSubmit}>
                        <p>Help request form</p>
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
        <div>
            <HelpForm/>
        </div>
    );
};
export default Help;
