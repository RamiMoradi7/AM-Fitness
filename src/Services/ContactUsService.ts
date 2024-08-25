import axios from "axios";
import { appConfig } from "../Utils/AppConfig";
import { ContactFormValues } from "../Components/HomeArea/Home/ContactUsForm";
import { Contact } from "../Models/Contact";

class ContactUsService {
  public async getContacts(): Promise<Contact[]> {
    const response = await axios.get<Contact[]>(appConfig.contactsUrl);
    const contacts = response.data;
    return contacts;
  }

  public async handleContactForm(
    contactFormData: ContactFormValues
  ): Promise<void> {
    await axios.post(appConfig.contactUsUrl, contactFormData);
  }
}

export const contactUsService = new ContactUsService();
