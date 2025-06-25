
type TemplateProps = {
    USER_NAME: string,
    BRAND_COLOR: string,
    VERIFICATION_URL: string,
    COMPANY_NAME: string,
    COMPANY_DOMAIN: string
}

export default ({ USER_NAME , BRAND_COLOR , VERIFICATION_URL , COMPANY_NAME , COMPANY_DOMAIN } : TemplateProps) => {

    return `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Verify Your Email Address</title>
    <!--[if mso]>
    <nxml:namespace xmlns:nxml="urn:schemas-microsoft-com:office:office" />
    <nxml:namespace xmlns:w="urn:schemas-microsoft-com:office:word" />
    <![endif]-->
    <style type="text/css">
        /* Reset styles */
        body, table, td, p, a, li, blockquote {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        table, td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        img {
            -ms-interpolation-mode: bicubic;
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }

        /* Client-specific styles */
        body {
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f4f4;
        }

        /* Prevent auto-linking */
        .appleLinks a {
            color: inherit !important;
            text-decoration: none !important;
        }

        /* Media queries */
        @media screen and (max-width: 600px) {
            .container {
                width: 100% !important;
                max-width: 100% !important;
            }
            .content {
                padding: 20px !important;
            }
            .button {
                width: 100% !important;
                text-align: center !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4;">
    <!-- Wrapper table -->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f4f4f4;">
        <tr>
            <td align="center" style="padding: 40px 0;">
                <!-- Main container -->
                <table class="container" role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    <!-- Header -->
                    <tr>
                        <td align="center" style="padding: 40px 40px 20px 40px; background-color: ${BRAND_COLOR}; border-radius: 8px 8px 0 0;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td align="center">
                                        <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; line-height: 1.2;">
                                            Verify Your Email
                                        </h1>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                        <td class="content" style="padding: 40px;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td style="color: #333333; font-size: 16px; line-height: 1.6;">
                                        <p style="margin: 0 0 20px 0;">Hi <strong>${USER_NAME}</strong>,</p>
                                        
                                        <p style="margin: 0 0 20px 0;">
                                            Thank you for signing up! To complete your registration and secure your account, please verify your email address by clicking the button below.
                                        </p>

                                        <!-- Verification Button -->
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 30px 0;">
                                            <tr>
                                                <td align="center">
                                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                                        <tr>
                                                            <td class="button" style="border-radius: 6px; background-color: ${BRAND_COLOR};">
                                                                <a href="${VERIFICATION_URL}" target="_blank" style="display: inline-block; padding: 16px 32px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 16px; font-weight: 600; color: #ffffff; text-decoration: none; border-radius: 6px;">
                                                                    Verify Email Address
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>

                                        <p style="margin: 20px 0; color: #666666; font-size: 14px;">
                                            If the button above doesn't work, copy and paste this link into your browser:
                                        </p>
                                        
                                        <p style="margin: 0 0 20px 0; word-break: break-all;">
                                            <a href="${VERIFICATION_URL}" style="color: #667eea; text-decoration: underline;">${VERIFICATION_URL}</a>
                                        </p>

                                        <p style="margin: 20px 0 0 0; color: #666666; font-size: 14px;">
                                            This verification link will expire in <strong>24 hours</strong>. If you didn't create an account with us, please ignore this email.
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="padding: 30px 40px; background-color: #f8f9fa; border-radius: 0 0 8px 8px; border-top: 1px solid #e9ecef;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td align="center" style="color: #666666; font-size: 14px; line-height: 1.5;">
                                        <p style="margin: 0 0 10px 0;">
                                            Need help? Contact our support team at 
                                            <a href="mailto:support@${COMPANY_DOMAIN}" style="color: #667eea; text-decoration: none;">support@${COMPANY_DOMAIN}</a>
                                        </p>
                                        <p style="margin: 0; font-size: 12px; color: #999999;">
                                            © 2024 ${COMPANY_NAME}. All rights reserved.<br>
                                            123 Business Street, City, State 12345
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
    `
}