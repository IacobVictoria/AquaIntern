// 1. Architecture

// REST - an architectural style that defines rules for building APIs based on HTTP methods

// NestJS is a progressive framework that combines TypeScript and Node.js
// to build scalable and maintainable REST APIs

//2. Modularity

//Next Js promotes modularity : separate features into distinct modules 
//Each module has : a controller, a service for business logic, entities, providers

//3. @Injectable

// a class used as a provider
//Required for Dependency Injection- inject it in constructors
// and use its methods without creating it manually.

//4. Decorators

// a) @Controller – binds a route prefix and marks the class as a controller for handling HTTP routes
// enables route decorators like @Get, @Post, etc.
// b) HTTP requests – no need to define separate routes manually; everything is inside the class with the @Controller decorator
// if you need a route parameter, use @Get(':id') along with @Param
// for query parameters, use @Query
// to access the body of a POST request, use @Body

//5. Testing

// due to modularity :services and controllers can be easily tested in isolation

//6. CLI
//comes with powerful CLI to help generate modules, controllers easily
//ex: nest generate service ...

//7. Guards - autorization and control for a specific endpoint @UseGuards(), and has @Injectable()
