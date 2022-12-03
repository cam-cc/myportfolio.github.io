import React from 'react'
import SectionTitle from './SectionTitle'

const ContactSectionStyle = styled.div`
	padding: 10rem 0;
`;
export default function Contact() {
	return (
		<ContactSectionStyle>
			<div className="container">
			<SectionTitle heading="Contact" subheading="Get in touch" />
			<div className="contactSection__wrapper">
				<div className="left">

				</div>
				<div className="right">
					
				</div>
			</div>
		</div>
		</ContactSectionStyle>
	);
}