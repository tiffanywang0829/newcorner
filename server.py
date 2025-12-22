import smtplib
from email.message import EmailMessage
from string import Template
from pathlib import Path
import csv
import os
from dotenv import load_dotenv
from flask import Flask, render_template, request, url_for, redirect

# Load environment variables from .env file
load_dotenv()

# created an instance of the flask app
app = Flask(__name__)
print(__name__)

SMTP_SERVER = 'smtp.gmail.com'
SMTP_PORT = 587
SENDER_EMAIL = os.getenv('SENDER_EMAIL')
SENDER_PASSWORD = os.getenv('SENDER_PASSWORD')
RECIPIENT_EMAIL = 'tiffanywang0829@gmail.com'  # Where to receive notifications


def send_email(form_data):
    try:
        # Create email message
        email = EmailMessage()
        email['from'] = 'Website Contact Form'
        email['to'] = RECIPIENT_EMAIL
        email['subject'] = f"New Contact Form Submission: {form_data.get('subject', 'No Subject')}"

        # Create email body
        email_body = f"""
You have received a new message from your website contact form:

From: {form_data.get('email', 'No email provided')}
Subject: {form_data.get('subject', 'No subject')}

Message:
{form_data.get('message', 'No message')}
"""
        email.set_content(email_body)

        # Send email via Gmail SMTP
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as smtp:
            smtp.starttls()  # Enable TLS encryption
            smtp.login(SENDER_EMAIL, SENDER_PASSWORD)
            smtp.send_message(email)

        return True
    except Exception as e:
        print(f"Error sending email: {e}")
        return False


@app.route("/")
def my_home():
    return render_template('index.html')


# @app.route("/blog/<username>/<int:post_id>")
# def blog(username=None, post_id=None):
#     return render_template('index.html', name=username, post_id=post_id)

@app.route("/<string:page_name>")
def render_static(page_name):
    return render_template(page_name + '.html')


@app.route("/submit_form", methods=['POST', 'GET'])
def submit_form():
    # print(request.form)
    if request.method == 'POST':
        try:
            data = request.form.to_dict()
            # write_to_file(data)  # Disabled for Vercel deployment (serverless doesn't support file writes)
            send_email(data)  # Send email notification
            print(f'data: {data}')
            return render_template('thankyou.html', email=data.get('email'))
        except:
            return 'did not save to database.'
    else:
        return 'something went wrong. Try again!'


def write_to_file(data):
    with open('database.txt', mode='a') as database:
        email = data.get('email')
        subject = data.get('subject')
        message = data.get('message')
        file = database.write(f'\n{email}, {subject}, {message}')


def write_to_csv(data):
    import csv
    with open('database.csv', mode='a', newline='') as database2:
        email = data.get('email')
        subject = data.get('subject')
        message = data.get('message')
        csv_writer = csv.writer(database2, delimiter=',',
                                quotechar='"', quoting=csv.QUOTE_MINIMAL)
        csv_writer.writerow([email, subject, message])
# @app.route("/about")
# def about():
#     return render_template('about.html')


# @app.route("/contact")
# def contact():
#     return render_template('contact.html')


# @app.route("/works")
# def works():
#     return render_template('works.html')


# @app.route("/blog/2020/dogs")
# def dogs():
#     return "<p>this is my dog</p>"


if __name__ == '__main__':
    app.run(debug=True)
