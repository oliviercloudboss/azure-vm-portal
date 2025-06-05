Hi there! 👋
My name is Oliver Lawrence and this is my first real-world cloud project a Self-Service Azure Virtual Machine (VM) Portal that I built from scratch as a self taught aspiring cloud engineer.

💡 What It Does
This portal lets users request access to a virtual machine by filling out a simple web form. Behind the scenes:

Their request is securely sent to an Azure Function.

It gets logged in Azure Table Storage.

A confirmation email is sent using SendGrid.

Then it tries to auto-provision a Windows VM using an Azure Automation Runbook.

All of this is automated. No manual VM setup needed. 

🛠️ Tech Stack
Frontend: HTML, CSS, JavaScript (hosted on GitHub + Azure Static Web Apps)

Backend: Azure Functions (Node.js)

Email: SendGrid API

Logging: Azure Table Storage

Provisioning: Azure Automation Runbook (PowerShell)

Security: Environment variables, limited user input, and email validation

🚧 Current Status
✅ Frontend live and working
✅ Requests send email + save to table
🛠️ Still fixing auto-VM creation — Runbook not fully triggering yet

📚 Why I Built This
As a self-taught aspiring cloud engineer, I wanted to challenge myself with something real, useful, and end-to-end on Azure. This project helped me understand automation, APIs, serverless, and real-world troubleshooting.

🙌 Thanks
Thanks for checking this out! If you're learning cloud or working on your own self-taught journey, I hope this inspires you. Let’s build cool stuff and keep learning. Feel free to contact me if you have any question about this project or just need help creating this porject on your own. 
