# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

The browser will check for a DNS record to find the IP address that goes with https://www.techtonic.com. The ISP's DNS server sends a query to find the IP address of the server hosting the website, if the website is not in the ISP's cache. Once found, the ISP will add the IP address in its cache. The browser then initiates a connection with the server, and sends a HTTPS request. The server will process the request and sends back a response. The response is rendered into what we see on the page including HTML, CSS, and JavaScript.

As a reference, I used previous knowledge along with the following article:
<a href="https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a"> What happens when you type an URL in the browser and press enter?</a>

## From start to finish, how does data reach you to be rendered in the browser?

After the steps answered in the previous question and a connection is established, the browser interprets the data. Additional objects within the HTML are requested and the page loads on the user's side.

## What code is rendered in the browser?

The browser then checks the HTML and sends out requests for additional elements on the page such as CSS, images, audio/video files, and JavaScript.  The Document Object Model tree is formed, the CSS Object Model is created and JavaScript manipulates them to form the webpage.

## What is the server-side code’s main function?

The server-side code's main function holds the back end data for a website. Back end data is the code running on the server. It receives requests from clients, and contains the appropriate data to send back to the client. The server-side code holds a website's various databases.

## What is the client-side code’s main function?

The client-side code is the front end data for a website. It's what the user sees.

## What is runtime?

Runtime is the period of time when a program is running, from when the program is executed to the end when it is closed.

<strong>Reference:</strong>
<a href='https://techterms.com/definition/runtime"> Runtime Definition</a>

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

An instance is created for the HTML document, stylesheets and scripts. The number depends on the code rendered. It isn't clear if this question refers to the Techtonic website or websites in general.

## How many instances of the server-side code are available at any given time?

The server-side creates an instance for each object it has. It isn't clear if this question refers to the Techtonic website or websites in general.

## How many instances of the databases connected to the server application are created?

A database instance describes a complete database environment. Database admins might create several instances for the same database for different purposes, such as pre-production, production, and development. An instance is a snapshot of a database's content at any given time.

It isn't clear if this question refers to the Techtonic website or websites in general.

<strong>Reference:</strong>
<a href="https://www.lifewire.com/database-instance-1019612"> Database Instance</a>
