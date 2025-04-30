import './Contact.css'
function Contact() {
    
    return (
        <>
            <div className="contact-container">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you! Fill out the form or reach us through the details below.</p>

                <div className="contact-content">
                    <div className="contact-map">
                        <h2>Find Us on Map</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7207354713987!2d72.55756347441624!3d23.034023815902508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f505555555%3A0xc29f665392e964af!2sRoyal%20Technosoft%20P%20Limited!5e0!3m2!1sen!2sin!4v1746024692829!5m2!1sen!2sin" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <form >
                        <label >Your Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" required />

                        <label >Email Address</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required />

                        <label >Message</label>
                        <textarea id="message" name="message" rows="5" placeholder="Write your message here..." required></textarea>

                        <button type="submit">Send Message</button>
                        <p id="form-status" className="form-status"></p>
                    </form>


                    <div className="contact-info">
                        <h2>Our Contact Info</h2>
                        <p><strong>Email:</strong> contact@stepintostyle.com</p>
                        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                        <p><strong>Address:</strong> 123 Fashion St, New York, NY 10001</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;