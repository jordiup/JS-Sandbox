# JavaScript Patterns
- All programming languages have design patterns used for a variety of situations.
- They are re-usable solutions that can be applied to occurring problems in software Design.

We will look at the following patterns:
 - Module: used for overall structure
 - Revealing module pattern: used for overall structure
 - Singleton: ~variation of module pattern; one instance of an object
 - Factory: used to create many objects
 - Observer: allows us to subscribe/unsub from events
 - Mediator: a central mediator with colleagues that separate off
 - State: allows us to have a certain state in our application

## Singleton
Can only return one instance of an object at a time. Repeated calls to the same constructor return the same instance. Often times singletons are frowned upon because they give you a global point of access; not embracing encapsulation. Example use case: only having one user at a time when creating a user. Prevents two users being created at once.

## Factory
Often used in application to manage and maintain collections of object that are different but have many common characteristics for example premium vs. standard memberships.

## Observer
Allows us to unsubscribe from certain events or certain functionality. Can be used to notify the DOM of certain events to be updated, AngularJS also relies heavily on this pattern through event management. Powerful as it allows you to add many new events; see my subscriber example!

## Mediator
Behavioural pattern like the observer, idea is to have a mediator to interface with colleagues; mediated objects. A good use case is with a chat room. You could use sockets for such a project but is beyond this tutorial.
