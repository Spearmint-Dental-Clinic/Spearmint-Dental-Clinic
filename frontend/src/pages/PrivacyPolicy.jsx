import Header from "../components/Header";

export default function PrivacyPolicy() {
    return (
        <div className="p-5 text-center">
            <a href="/" className="float-start text-secondary">Back</a>
            <h1>Spearmint Dental Clinic</h1>
            <h3 className="text-secondary">Privacy Policy</h3>
            <h6 className="text-secondary"><em>Last updated:" 10<sup>th</sup> August, 2026</em></h6>
            <hr className="w-75 mx-auto" />
            <div className="w-75 mx-auto text-start" id="intro">
                <p>
                    Spearmint Dental Clinic ("the Clinic", "we", "us", or "our") is committed to protecting the privacy and personal data of our patients and website visitors. 
                    This Privacy Policy explains how we collect, use, store, and protect your personal data when you visit our <a href="https://spearmint-dental-clinic-1.onrender.com/" className="text-secondary">website</a> or use our online appointment booking service, in accordance with the Kenya Data Protection Act, 2019 ("the Act") and its subsidiary regulations.
                    By using our website, you consent to the practices described in this Privacy Policy.
                </p>
            </div>
            <div id="info-collected" className="w-75 mx-auto mt-4 text-start">
                <h4>1. Information We Collect</h4>
                <p>
                    We may collect the following categories of personal data when you interact with our website:
                    <ul className="mt-2">
                        <li className="mb-2">Contact details: name, email address (optional) and phone number</li>
                        <li className="mb-2">Appointment information: preferred appointment dates/times, dental service requested, and any notes you provide when booking</li>
                        <li className="mb-2">Health-related information: if you voluntarily share details about your dental concerns, medical history, or existing conditions when booking or contacting us</li>
                        <li className="mb-2">Technical information: IP address, browser type, and device information collected automatically when you visit our website (for basic site functionality and security, e.g. session cookies used to complete a booking)</li>
                    </ul>
                    We do not knowingly collect more personal data than is necessary for the purposes described in this Policy.
                </p>
            </div>
            <div id="info-use" className="w-75 mx-auto mt-4 text-start">
                <h4>2. How We Use Your Information</h4>
                <p>
                    We use the personal data we collect for the following purposes:
                    <ul className="mt-2">
                        <li className="mb-2">To schedule, confirm, reschedule, or cancel dental appointments</li>
                        <li className="mb-2">To communicate with you about your appointment, our services, or your enquiries</li>
                        <li className="mb-2">To maintain accurate patient and clinic records</li>
                        <li className="mb-2">To improve our website and the services we offer</li>
                        <li className="mb-2">To comply with legal, regulatory, and professional obligations (including dental and health record-keeping requirements)</li>
                        <li className="mb-2">To protect the security and integrity of our website and systems</li>
                    </ul>
                </p>
            </div>
            <div id="legal-processing" className="w-75 mx-auto mt-4 text-start">
                <h4>3. Legal Basis for Processing</h4>
                <p>
                    Under the Data Protection Act, we process your personal data on one or more of the following legal bases:
                    <ul className="mt-2">
                        <li className="mb-2">Your consent, given when you submit a booking or enquiry form</li>
                        <li className="mb-2">Performance of a contract, where processing is necessary to provide dental services you have requested</li>
                        <li className="mb-2">Compliance with a legal obligation, such as health record retention requirements</li>
                        <li className="mb-2">Our legitimate interests, such as maintaining the security and proper functioning of our website</li>
                    </ul>
                    Where we rely on your consent, you may withdraw it at any time by contacting us using the details in Section 9, without affecting the lawfulness of processing carried out before withdrawal.
                </p>
            </div>
            <div id="appointment-booking" className="w-75 mx-auto mt-4 text-start">
                <h4>4. Online Appointment Booking</h4>
                <p>
                    When you use our online booking feature, we collect the personal and appointment information you enter into the booking form. 
                    This information is used solely to schedule and manage your appointment and to communicate with you about it. 
                    Booking data is stored on our systems and is not shared with any third party except as described in Section 5.
                </p>
            </div>
            <div id="data-sharing" className="w-75 mx-auto mt-4 text-start">
                <h4>5. Data Sharing and Disclosure</h4>
                <p>
                    We do not sell, rent, or trade your personal data. 
                    At present, our website does not use third-party analytics, advertising, or booking platforms that would receive your data. 
                    We may share your personal data only in the following limited circumstances:
                    <ul className="mt-2">
                        <li className="mb-2">With dental or medical professionals directly involved in your care</li>
                        <li className="mb-2">Where required by law, court order, or a competent regulatory or government authority</li>
                        <li className="mb-2">With your explicit consent, for a purpose not otherwise covered by this Policy</li>
                    </ul>
                    Should we begin using third-party service providers (for example, appointment scheduling software, payment processors, or analytics tools) in the future, we will update this Policy accordingly and, where required, seek your consent.
                </p>
            </div>
            <div id="your-rights" className="w-75 mx-auto mt-4 text-start">
                <h4>7. Your Rights</h4>
                <p>
                    Under the Data Protection Act, you have the right to:
                    <ul className="mt-2">
                        <li className="mb-2">Be informed of the use to which your personal data is to be put</li>
                        <li className="mb-2">Access your personal data held by us</li>
                        <li className="mb-2">Request correction of inaccurate or outdated personal data</li>
                        <li className="mb-2">Request deletion of your personal data, subject to legal and record-keeping exceptions</li>
                        <li className="mb-2">Object to or restrict certain processing of your personal data</li>
                        <li className="mb-2">Withdraw consent previously given, at any time</li>
                        <li className="mb-2">Lodge a complaint with the Office of the Data Protection Commissioner (ODPC) if you believe your data protection rights have been violated</li>
                    </ul>
                    <p>To exercise any of these rights, please contact us using the details in Section 9.</p>
                </p>
            </div>
            <div id="data-security" className="w-75 mx-auto mt-4 text-start">
                <h4>8. Data Security</h4>
                <p>
                    We implement reasonable technical and organisational measures to protect your personal data against unauthorised access, loss, misuse, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
                </p>
            </div>
            <div className="contact-info w-75 mx-auto mt-4 text-start">
                <h4>9. Contact Us and Data Protection Officer</h4>
                <p>
                    If you have questions, concerns, or requests regarding this Privacy Policy or how your personal data is handled, please contact us at:
                    <ul className="mt-2 list-unstyled">
                        <li className="mb-2"><strong>Clinic Name: </strong>Spearmint Dental Clinic</li>
                        <li className="mb-2"><strong>Address: </strong>Unipen HPA Dental and Physiotherapy, Hurlingham, Nairobi</li>
                        <li className="mb-2"><strong>Email: </strong>spearmintclinic@gmail.com</li>
                        <li className="mb-2"><strong>Phone: </strong>(254) 745-382-230</li>
                    </ul>
                    You may also contact the Office of the Data Protection Commissioner (ODPC), Kenya, if you wish to raise a concern about how your data has been handled.
                </p>
            </div>
            <div id="policy-changes" className="w-75 mx-auto mt-4 text-start">
                <h4>10. Changes to This Policy</h4>
                <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. Any changes will be posted on this page with an updated "Last updated" date. We encourage you to review this Policy periodically.
                </p>
            </div>
        </div>
    )
}