import { type } from "@testing-library/user-event/dist/type";
import data from "../data";

function Contact(){
	let {title}=data;

	return(
		<section id="contact">
				<div className="title">
					<strong>{title.contact.strong}</strong>
					<p>{title.contact.p}</p>
				</div>
				<div className="content">
					<form>
						<div className="content_inner">
								<div className="inner">
									<div className="row">
									<input type="text" placeholder="your Name*"/>
									<input type="email" placeholder="your e-mail*"/>
									<input type="text" placeholder="subject*"/>
									</div>
									<textarea className="message" placeholder="your Message*"></textarea>
								</div>
								<div className="button">
									<input type="submit" value="Send Message"/>
								</div>
						</div>	
					</form>
				</div>
			</section>
	)
}

export default Contact;