import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as SendGrid from "@sendgrid/mail";
import * as process from "process";
import HtmlMail from "./html-mail";

@Injectable()
export class SendgridService {
  constructor(private readonly configService: ConfigService) {
    SendGrid.setApiKey(this.configService.get<string>("SENDGRID_API_KEY"));
  }
  async VerificationMail(email, code, first_name, last_name) {
    let html = HtmlMail.VerificationMail(code, first_name, last_name);
    let message = {
      from: {
        "email": process.env.SENDGRID_FROM,
        "name": process.env.SENDGRID_NAME
      },
      to: "hovotest910@gmail.com",
      subject: `testtest`,
      html: html
    };
    await SendGrid.send(message);
  }

}

