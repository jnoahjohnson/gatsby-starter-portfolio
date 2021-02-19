---
slug: "/blog/jamstack"
title: JAM Stack
date: "02/18/2021"
---

The modern age of business demands an online presence which has led many businesses to investing a lot into their own websites. The systems behind these websites have evolved throughout the years and new systems are looking to save development time and reduce the cost of maintenance.

I have been working in the web development field for a few years now and have seen and build many websites using different technology stacks. The newest system that is the most promising for the future of the web and businesses is called the JAM stack.

## What is the JAM Stack?

Netlify, the business that started the idea of the JAM stack, recently raised an additional $53 million in funding to continue growing and hosting JAM stack websites. 800,000 developers now use them and more than 8 percent of the internet population visits a site hosted by them each month.

For a web hosting platform, this is massive growth that is continuing quickly. The question now arises, what is the JAM stack that is becoming immensely popular?

In web development, many different tools can be used to create the end product. The JAM stack stands for the tools that are used in this particular system: Javascript, APIs, and Markup.

Javascript is the programming language of the web and can do anything from create a user interface to compute powerful logic behind the scenes.

API stands for “application programming interface” which in essence is a way that an application or website interacts with another service (i.e. a website that has live weather data from a weather station).

Markup means that the web pages are static HTML. Essentially all of the content is generated at one time before the user arrives at the website. This principle will make more sense as we explain the differences between other systems and the JAM stack.

## How is the JAM Stack different?

The main difference between the JAM stack and traditional methods of web development comes down to web servers which are basically remote computers that hold files and process them when requested. Traditional methods use web servers, while JAM stack websites do not.

In order to understand this more fully, I will explain my own personal experience in building a website both ways. The example is a website that I created for a community to track and see points during a month-long competition. The site also had pictures that they uploaded and the rules for the competition.

While I only built this site traditionally, I have built other sites using the JAM stack with the same components, so I will just show how the same website would be built using both methods to make the differences clear.

To build this site traditionally, I first built the front end of the website. This is the part that everyone would see. There were bars that showed the points between different groups within the community and all of the information about the competition.

After completing the front end, I then built the back end which is the part that would actually track and calculate all the points which all had to be done on a web server that I configured and then maintained throughout the month.

During the month whenever a user would go to the website, the web server would have to process all of the information, generate the site with the updated information, and then the user would be able to see the website. This same process happens each time that a user access a site built in a traditional method.

To build a site using the JAM stack, the development process is much simpler. Going back to what JAM stands for (Javascript, APIs, Markup), these are the building blocks for a site like this.

Javascript is used to create the interface that the user will interact with. The points can be submitted and seen through an API which will then store that information through an outside service that does not need to be directly maintained. Markup is then the content such as the rules and images that will then be shown.

With the JAM stack, that is the entire development process. There is no web server to build or maintain. The website files are pre-processed and then put in a data center instead of a web server because no additional processing is needed. The files could be in a single data center, or in data centers throughout the world which creates a content delivery network (or CDN) that increases the speed for worldwide users.

Every time a user accesses the website, they are accessing the static files instead of requesting that a web server renders the files and then serves them. This small change makes a big difference when we look at the benefits of the JAM stack.

## What are the benefits of the JAM Stack?

The JAM stack has many benefits when developing new websites. Some of the main benefits are that websites built with the JAM stack are faster globally, cost less, require less maintenance, and are more secure.

JAM stack websites are faster globally because of the backend of the site because there is no web server so when a user goes to a website no processing is needed. The site is then served the user quickly. The ease of implementing a CDN also allows for a worldwide audience to access the website faster as the files are hosted in data centers throughout the world.

JAM stack websites cost less for the same reason that they are faster. No server means that there is no processing. The cost of web servers depend on how much processing the client uses, so less processing results in a lower cost. The sites also do not take as much time to build because of their relative simplicity, so companies do not need to pay developers for as much time as they build the websites.

JAM stack websites require less maintenance because the files are hosted statically and there is no server to constantly maintain. Developers can even build websites with a content delivery network (CDN) which essentially means that the owner of the website can easily add and edit content on the website.

JAM stack websites are more secure because there is no server or database (collection of data, usually user data) that a hacker could attack. APIs are much harder to access by outside sources while servers and databases are usually the easier points to attack. Whenever there is a data breach within a company, it is likely that the database or server was hacked.

The JAM stack has many benefits that make it very promising, though there is one big limitation that the JAM stack still has that would make it difficult to use for some websites.

## What is the limitation of the JAM stack?

The main limitation of the JAM stack is when it comes to dynamic content (content that changes based on the user). An example of this would be a social network.

A social network is very dynamic as users add and interact with a lot of content. This is where a traditional system shines because every time a user accesses the website, the server will get the most recent data and serve it dynamically.

Some social features such as comments can be added to a website through the use of APIs, but as the website gets more and more dynamic, developers and businesses should evaluate if the JAM stack is the best option in this situation. The point at which a company should make a switch to a traditional system really depends on the product and specific needs, but the good news is that it is becoming increasingly rare to have to use a traditional system.

Many APIs and other services are being built to enhance the experience of JAM stack websites. Features such as e-commerce and content management systems (CMSs) that allow owners to add and edit their own content were originally other limitations, but have been solved. A website called the New Dynamic has a list of services that can be used with the JAM stack.

When a website becomes extremely dynamic, businesses may have to look to traditional methods of web development, but new services are making the JAM stack easier and easier to use which means that there are almost no limitations now to what JAM stack websites can do.

##Where does the JAM stack go from here?

Both businesses and developers should examine all the needs of a website, whether current or future, and determine the best tools to use to build it. From personal experience and the growing number of resources, the first question I ask is if the JAM stack can work for this website and only use a traditional method as the exception to the rule.

When compared to a traditional system, the JAM stack is simpler as there is no server to maintain. This enables the website to be created and updated at a lower cost and the site and data are more secure. Deploying the website worldwide through a CDN is easy and results in a faster experience for all users.

As technology continues to advance, new tools allow businesses and developers to find new ways to solve problems more effectively. The JAM stack is the newest and most promising system in web development.

## Notes

1. “JAM Stack”, accessed March 8, 2020, [https://jamstack.org]
2. “Netlify secures Series C funding to push forward our vision for the web”, last modified March 4, 2020, [https://www.netlify.com/blog/2020/03/04/netlify-secures-series-c-funding-to-push-forward-our-vision-for-the-web/]
3. “Tools”, accessed March 8, 2020, [https://www.thenewdynamic.org/tool/]
