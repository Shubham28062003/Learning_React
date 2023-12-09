What is Emmet?
Difference between library and framework?
•	A library provides a set of helper functions/objects/modules which your application code calls for specific functionality.
•	Using the code which is already written by some other developer.
•	Inversion of control: When we call a method from a library, we are in control. But in framework, the control is inverted i.e. the framework calls us.
•	Including framework smoothly into an existing project is impossible. Libraries can be integrated easily into existing projects to add some specific functionality.

What is CDN? How Should we use it?
Content Delivery Network?
•	A content delivery network (CDN) is a network of interconnected servers that speeds up webpage loading for data-heavy applications.
•	 To reduce latency, or reduce the delay in communication created by a network's design.

Why React is called as React?
•	React is a JavaScript library for building user interfaces, that was developed by Facebook. It was originally released in 2013 
•	It "reacts" quickly to changes without reloading the whole page. It uses the virtual DOM to efficiently update parts of a webpage.
CORS (Cross Origin Resource Sharing)
	A mechanism which add additional http headers to tell s browser that any specific web app can share resource to another web app
Both App must have different origin.
	https://akshaysaini.in
	Another Domain
	API
	PORT
	Protocol	
A preflight OPTION is made, It verifies and then send http headers as response then actual resource sharing is carried out.
Header
[Accept-control-Allow-Origin:*]

The `crossorigin` attribute is not specific to React; it is a standard attribute used in HTML for external resources, such as scripts, images, and stylesheets, to control how the browser handles cross-origin requests







What is difference between React and ReactDOM ?
	React allows us to define UI components as declarative function and provide virtual DOM to optimize rendering those components.
	Convert Virtual DOM to actual DOM ,it uses render() function for which allow to render react component.

Development (Dev) Link:
•	The development link is typically used during the development phase of your application.
•	It includes additional debugging tools, warnings, and helpful error messages.
•	It is larger in file size and may negatively impact the performance of your application.
•	It is not optimised for production use.
Production (Prod) Link:
•	The production link is meant for deploying your application in a production environment.
•	It excludes development-specific tools, warnings, and error messages.
•	It is smaller in file size, which improves the performance of your application.
•	It is optimized for production use.

What is async and Differ inn javascript?
	Boolean attribute used along with script tags, to load the external scripts smoothly within our code.





