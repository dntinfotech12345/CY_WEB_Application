// sendEmail.js
import nodemailer from 'nodemailer';
const path = require('path');
const fs = require('fs');

async function sendEmailAfterTests() {
    // Define email transporter
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: Cypress.env('EMAIL_USER'), // use environment variable
            pass: Cypress.env('EMAIL_PASS')  // use environment variable
        }
    });

    // Retrieve scenario names (assuming they are available)
    const scenarioNames = Cypress.env('SCENARIO_NAMES') || [];

    // Create email subject
    const emailSubject = `Test Results for Scenarios: ${scenarioNames.join(', ')}`;

    // Path to Allure report
    const reportPath = path.resolve('./cypress/cucumberReports', 'index.html');
    console.log(reportPath);

    // Check if Allure report exists
    if (!fs.existsSync(reportPath)) {
        console.error('Allure report not found!');
        return;
    }

    // Email options
    const emailData = {
        toEmail: Cypress.env('TO_EMAIL'), // Assuming email details are set in Cypress environment variables
        body: Cypress.env('EMAIL_BODY') || 'Please find the attached test results.',
        regards: Cypress.env('EMAIL_REGARDS') || 'Best regards, QA Team'
    };

    const mailOptions = {
        from:  Cypress.env('EMAIL_USER'),
        to:  Cypress.env('TO_EMAIL'),
        subject: emailSubject,
        text: `${emailData.body}\n\n${emailData.regards}`,
        attachments: [
            {
                filename: 'allure-report.html',
                path: reportPath
            }
        ]
    };

    try {
        console.log('Attempting to send email...');
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

module.exports = { sendEmailAfterTests };
