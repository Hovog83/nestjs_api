class HtmlMail {
  VerificationMail(secret, first_name, last_name) {
    return `
        <div class="root" style="border: 2px dashed purple; width: 80%; margin: 0 auto;">
						<center class="header" style="margin-top: 10px; margin-bottom: 10px;">
							<div>
									<img src="${process.env.IMAGE}" alt="#" style="height:60px" class="CToWUd">
							</div>
							<div style="margin-top: 10px">
									PassFactory
							</div>
						</center>
						<center>
							<h2>${first_name + " " + last_name}, Welcome to Sendgrid</h2>
							<p style="
						            color: gray;
						            padding: 0 20px;">Please, verify your email address to access the full functionality of your testvi account.</p>
              <p style="color: gray; padding: 0 20px;">Thank You.</p>
							<h4>code: <span style="color: gray;
						            font-size: 24px;">${secret}</span></h4>
						</center>
        </div>`;
  }
}

export default new HtmlMail();
