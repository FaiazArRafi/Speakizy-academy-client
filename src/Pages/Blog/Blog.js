import React from 'react';

const Blog = () => {
    return (
        <div className='container my-2 p-3 w-50'>
            <div className='bg-success text-white p-3 rounded-3 mb-3'>
                <h4>Q: What is cors ?</h4>
                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
            </div>
            <div className='bg-success text-white p-3 rounded-3 mb-3'>
                <h4>Q: Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p>Firebase one of the key feature is realtime database. The Realtime Database is essentially a cloud-hosted NoSQL database that stores data as JSON (JavaScript Object Notation) in real time. One of the key advantages for Firebase’s Realtime Database is that it works offline by using local cache on the device to store any changes made. When app connectivity is resumed, the data is synced. <br />
                    Most apps have some form of authentication feature that is necessary to identify the user. Thanks to Firebase’s easy-to-use SDK, ready-made UI libraries, and backend services, it is possible to set up the whole authentication process in just a couple of minutes. Firebase allows users to authenticate with their phone number, email, Google, and Facebook accounts and many more. <br />
                    Google Analytics for Firebase allows us to track your users’ journey through realtime and custom reporting. Firebase supports IOS, Android, Web, and Unity products, allowing us to track our users across a wide range of devices. According to Google, Firebase provides unlimited free reporting on up to 500 distinct events. Just like the regular Google Analytics, Google Analytics for Firebase automatically tracks certain key events and user parameters straight out of the box, and allows us to define custom events that are important to our application.<br /><br />
                    Some Firebase alternatives<br />
                    1 Back4App <br />
                    2 Backendless <br />
                    3 Kuzzle <br />
                    4 Pubnub <br />
                    5 Kumulos <br />
                </p>
            </div>
            <div className='bg-success text-white p-3 rounded-3 mb-3'>
                <h4>Q: How does the private route work ?</h4>
                <p>Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
                </p>
            </div>
            <div className='bg-success text-white p-3 rounded-3 mb-3'>
                <h4>Q: What is Node? How does Node work?</h4>
                <p>Node (or more formally Node.js) is an open-source, cross-platform runtime environment that allows developers to create all kinds of server-side tools and applications in JavaScript.<br />
                    Node is completely event-driven. Basically the server consists of one thread processing one event after another.<br />
                    A new request coming in is one kind of event. The server starts processing it and when there is a blocking IO operation, it does not wait until it completes and instead registers a callback function. The server then immediately starts to process another event (maybe another request). When the IO operation is finished, that is another kind of event, and the server will process it (i.e. continue working on the request) by executing the callback as soon as it has time.
                </p>
            </div>
        </div>
    );
};

export default Blog;