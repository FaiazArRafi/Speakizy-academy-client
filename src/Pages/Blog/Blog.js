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
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. <br />
                    React.createContext() returns a consumer and a provider. "Provider" is a component that provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. "Consumer" as it happens is a component that consumes and uses the state.
                </p>
            </div>
            <div className='bg-success text-white p-3 rounded-3 mb-3'>
                <h4>Q: How does the private route work ?</h4>
                <p>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. <br />
                    The useRef returns a mutable ref object. This object has a property called ".current". The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The ".current" property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.
                </p>
            </div>
            <div className='bg-success text-white p-3 rounded-3 mb-3'>
                <h4>Q: What is Node? How does Node work?</h4>
                <p>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. <br />
                    The useRef returns a mutable ref object. This object has a property called ".current". The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The ".current" property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.
                </p>
            </div>
        </div>
    );
};

export default Blog;