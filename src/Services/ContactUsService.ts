import axios from "axios";
import { appConfig } from "../Utils/AppConfig";
import { ContactFormValues } from "../Components/HomeArea/Home/ContactUsForm";

class ContactUsService {
  public async handleContactForm(
    contactFormData: ContactFormValues
  ): Promise<void> {
    await axios.post(appConfig.contactUsUrl, contactFormData);
  }
}

export const contactUsService = new ContactUsService();
