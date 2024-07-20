import React from 'react';
import '../Styles/Contacts.css';
import SectionComponent from '../UIComponents/SectionComponent';
import ContactDetails from '../UIComponents/ContactDetails';
import SocialIcons from '../UIComponents/SocialIcons';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from '../UIComponents/ScrollToTop';

const Contacts = () => {
    //To scroll to top of the page upon navigation
    ScrollToTop();

    const initialValues = {
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
    }

    const validationSchema = Yup.object ({
        name: Yup.string().required('Name is required').matches(/^[a-zA-Z0-9 ]*$/, 'Only letters and numbers are allowed'),
        email: Yup.string().required('Email is required').email('Enter valid email'),
        phoneNumber: Yup.string().required('Phone number is required').matches(/^[0-9]*$/, 'Only numbers are allowed'),
        message: Yup.string().required('Message is required'),
    })

    const successMessage = () => {
        toast.success('Message Sent', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
            });
    }

    const onSubmit = (values, {resetForm}) => {
        console.log(values);
        successMessage();
        resetForm();
    }

  return (
    <SectionComponent
        sectionId='contacts-page'
        sectionTitle='Contact Us'
        sectionSubtitle='Be A Kamper Now !'
    >
        <div className='contacts__content-wrapper'>
            <div className='contacts__contact-information-wrapper'>
                <div className='contacts__contact-details-wrapper'>
                    <h3 className='contacts__contact-details-title'>Get In Touch</h3>
                    <p className='contacts__contact-details-subtitle'>
                        We value your feedback and inquiries. Reach out to us via phone, email, or social media for any questions or assistance you may need.
                    </p>
                    <div className='contacts__contact-details-body'>
                        <ContactDetails 
                            icon='fa-house' 
                            title='Address' 
                            details='Block 33 Lot 12 Our Lady Of La Naval Street, Rosario Complex 4023 San Pedro, Philippines'
                        />
                        <ContactDetails 
                            icon='fa-phone' 
                            title='Phone Number' 
                            details='0965 760 9399'
                        />
                        <ContactDetails 
                            icon='fa-envelope' 
                            title='E-Mail' 
                            details='yeclasteven85@gmail.com'
                        />
                    </div>
                    <div className='contacts__contact-details-footer'>
                        <p className='contacts__contact-details-socials-title'>Follow Us:</p>
                        <div className='contacts__contact-details-socials-wrapper'>
                            <SocialIcons
                                link='https://www.facebook.com/search/top?q=kamp%20bj%20aquatics' 
                                icon='fa-facebook-f'
                            />
                            <SocialIcons
                                link='https://www.instagram.com/kamp.bj.3/?hl=am-et' 
                                icon='fa-instagram'
                            />
                            <SocialIcons
                                link='https://www.tiktok.com/@kampbjaquatics?lang=en' 
                                icon='fa-tiktok'
                            />
                        </div>
                    </div>
                </div>
                <div className='contacts__message-box-wrapper'>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {() => (
                            <Form className='contacts__form'>
                                <h3 className='contacts__form-title'>Send a message</h3>
                                <div className='contacts__field-wrapper'>
                                    
                                    <Field type='text' id='name' name='name' placeholder='Name' className='contacts__field-input'/>
                                    <ErrorMessage name='name' component='div' className='contacts__field-error' />
                                </div>
                                <div className='contacts__field-wrapper'>
                                    <Field type='email' id='email' name='email' placeholder='Email' className='contacts__field-input'/>
                                    <ErrorMessage name='email' component='div' className='contacts__field-error' />
                                </div>

                                <div className='contacts__field-wrapper'>
                                    <Field type='text' id='phoneNumber' name='phoneNumber' placeholder='Phone Number' className='contacts__field-input'/>
                                    <ErrorMessage name='phoneNumber' component='div' className='contacts__field-error' />
                                </div>

                                <div className='contacts__field-wrapper'>
                                    <Field as='textarea' id='message' name='message' placeholder='Message' className='contacts__field-input message-box'/>
                                    <ErrorMessage name='message' component='div' className='contacts__field-error' />
                                </div>

                                <button type='submit' className='contacts__form-submit'>Submit</button>
                            </Form>
                        )}
                    </Formik>
                </div>
                <ToastContainer />                
            </div>

            <div className='contacts__map-wrapper'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1599.8389352421875!2d121.04844311763125!3d14.340606350504585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d7fc4166b881%3A0xcfa1cdf06f9f8353!2sKAMP%20BJ%20AQUATICS!5e0!3m2!1sen!2sph!4v1721445586717!5m2!1sen!2sph"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
        </div>
    </SectionComponent>
  )
}

export default Contacts
