import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';
import report from("multiple-cucumber-html-reporter");

// Function to get the current date and time in a specific format
function getFormattedDateTime() {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true, timeZoneName: 'short' };
  return new Date().toLocaleString('en-US', options);
}

report.generate({
  jsonDir: "./cypress/cucumberReports",
  reportPath: "./cypress/cucumberReports/cucumber-htmlreport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "windows",
      version: "10",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Cypress project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: getFormattedDateTime() },
      { label: "Execution End Time", value: getFormattedDateTime() },
    ],
  },
});
export const sendEmailNotification = async (subject, body, toEmail, regards) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "roshanmorkhade96@gmail.com", // use environment variable
            pass: "ymoy mgti lvzg teyx"  // use environment variable
        }
    });

    // Path to the index.html file
    const reportPath = path.resolve('./cypress/cucumberReports/cucumber-htmlreport.html', 'index.html');

    // Check if the file exists
    if (!fs.existsSync(reportPath)) {
        console.error('Allure report not found!');
        return;
    }

    const mailOptions = {
        from: "roshanmorkhade96@gmail.com", // sender address
        to: toEmail, // list of receivers
        subject: subject, // Subject line
        text: `${body}\n\n${regards}`, // plain text body
        attachments: [
            {
                filename: 'index.html',
                path: reportPath
            }
        ]
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.response);
    } catch (error) {
        console.error('Error sending email:', error);
        if (error.response) {
            console.error('Error response:', error.response);
        }
    }
};

// Example usage
export const emailData = {
    subject: 'Test Subject',
    body: 'This is the Test Email for WebDriverIO TypeScript code.',
    toEmail: 'shrikantkhairnar313@gmail.com',
    regards: 'Thanks,\nDnT Team'
};

sendEmailNotification(emailData.subject, emailData.body, emailData.toEmail, emailData.regards);
